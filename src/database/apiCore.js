import axios from 'axios';
import cache from './apiCache';

class apiCore {

	constructor(host=null, alias='') {
		this.axios = axios.create({});

		this.host = host ? host : process.env.API_HOST;
		this.token = process.env.API_TOKEN;
		this.alias = alias;

		this.baseURL = this.host + this.alias;

		this.fn = {}
	}

	compile(query) {
		const sign = query.indexOf('?') >= 0 ? '&' : '?';
		return this.baseURL + query + sign + 'token=' + this.token;
	}

	process(args) {		
		let { method, callback, query, data } = args;
		
		if (cache.isCached(query)) {
			return new Promise( (resolve, reject) => {
				resolve(cache.get(query));
			})
		} else {
			let promise = callback(this.compile(query), data);

			promise.then( response => {
				cache.set(query, response)
			});

			return promise;
		}
	}

	get(query) {
		return this.process({
			method: 'GET',
			query: query,
			callback: (q) => this.axios.get(q)
		});
	}

	post(query, data) {
		return this.process({
			method: 'POST',
			query: query,
			data: data,
			callback: (q, d) => this.axios.post(q, d)
		});
	}

	delete() {
		return {
			method: 'DELETE',
			query: query,
			callback: (q) => this.axios.delete(q)			
		};
	}

}

export default apiCore;

import axios from 'axios';
import axiosCache from '../cache/axiosCache';

class API {

	constructor(host=null, alias='') {
		this.host = host ? host : process.env.API_HOST;
		this.token = process.env.API_TOKEN;
		this.alias = alias;

		this.baseURL = this.host + this.alias;

		this.endpoints = {}
	}

	compile(query) {
		return this.baseURL + query + '&token=' + this.token;
	}

}

const instance = new API(null,'/api/collections/get');

instance.endpoints.getAll 		= ()		=> axios.get(instance.compile('/posts/?per_page=100'));
instance.endpoints.getID 		= ( id ) 	=> axios.get(instance.compile(`/posts/?filter[id]=${id}`));

export default instance;
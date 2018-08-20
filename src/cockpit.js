import axios from 'axios';

class cockpit {

	constructor() {
		this.baseURL = 'http://localhost/cockpit';
		this.token = '33c9c23f789f3e1f2e092e8644eba1';

		this.Promise = this.fetchDataFromAPI();
		this.Promise.then( result => {
			this.modify(result.entries);
		});
		
		
	}

	fetchDataFromAPI() {
		return axios.get(this.baseURL + '/api/collections/get/posts?token=' + this.token)
			.then( response => {
				return response.data;
			})
			.catch( e => {
				console.log('AXIOS: cannot get data.', e);
				return false;
			});
	}

	getAllPosts() {
		return this.Data;
	}

	getPost(id) {
		let d = this.Data;
		for (let i=0, length=d.length; i<length; i++) {
			if (d[i].id == id) return d[i];
		}
	}

	modify(data) {
		for ( let i=0, ilen=data.length; i<ilen; i++ ) {
			let entry = data[i];
			if (entry.hasOwnProperty('featuredImage') ) {
				entry['coverImage'] = () => this.thumbnailURL(entry.featuredImage.path, 'cover');
			}
			if ( entry.hasOwnProperty('gallery')) {
				for ( let j=0, jlen=entry.gallery.length; j<jlen; j++ ) {
					let image = entry.gallery[j];
					image.thumbnail = () => this.thumbnailURL(image.meta.asset, 'thumbnail');
				}
			}
		}
	}

	thumbnailURL(path, style) {
		return `${this.baseURL}/api/imagestyles/style/${style}?token=${this.token}&src=${path}&o=1`;
	}
}

export default new cockpit;
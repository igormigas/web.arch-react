import data from './data/posts2.json';
//import cockpit from './cockpit';

const GET_FROM_LOCAL = true;

class database {

	constructor() {
		this.Data = data;
		this.Data.entries.reverse();
	}

	getAllPosts() {
		return this.Data.entries;
	}

	getAllFields() {
		return this.Data.fields;
	}

	getTotalPosts() {
		return this.Data.total;
	}

	getPost(id) {
		let d = this.Data.entries;
		for (let i=0, length=d.length; i<length; i++) {
			if (d[i].id == id) return d[i];
		}
	}
}

const instance = GET_FROM_LOCAL ? new database : null;

export default instance;
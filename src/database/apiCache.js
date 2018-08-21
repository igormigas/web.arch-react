

class apiCache {

	constructor() {
		this.Cache = new Map();
	}

	isCached(name) {
		if (this.Cache.has(name)) {
			return true;
		}
		return false;
	}

	get(name) {
		return this.Cache.get(name);
	}
	
	set(name, data) {
		this.update(name, data);
	}

	setNew(name, data) {
		if (!this.isCached(name)) {
			this.Cache.set(name, data);
		}
	}

	update(name, data) {
		this.Cache.set(name, data);
	}
}

export default new apiCache;

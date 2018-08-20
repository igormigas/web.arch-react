import React from 'react';
import axios from '../../axios';
import database from '../../database';

import Gallery from '../../components/Gallery/Gallery';
import GalleryItem from '../../components/Gallery/GalleryItem';
import GalleryAddon from '../../components/Gallery/GalleryAddon';
import spinnerService from '../../components/UI/Spinner/spinnerService';
import axiosCache from '../../cache/axiosCache';

import classes from './Home.css';

class Home extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			dataPosts: database.getAllPosts(),
			dataFields: database.getAllFields()
		}

		//spinnerService.show('mainLoader');
	}

	componentDidMount() {
		/*let query = '/posts/?per_page=100';

		if (!axiosCache.isCached(query)) {
			axios.get(query)
				.then( response => {
					this.setState({
						dataPosts: response.data
					});
					spinnerService.hide('mainLoader');
				})
				.catch();
		} else {
			this.setState({
				dataPosts: axiosCache.get(query)
			});
			spinnerService.hide('mainLoader');
		}*/
	}

	createAddons() {
		return [
			<GalleryAddon key="3d9j" bgimg="/assets/images/UI/workplace.jpg" url="/projects">pozostałe projekty</GalleryAddon>,
			<GalleryAddon key="k8h6" bgimg="/assets/images/UI/map.jpg" url="/contact">oferta / kontakt</GalleryAddon>,				
		];
	}

	render() {
		let galleryItems, addons, posts;

		if (this.state.dataPosts) {
			if (this.props.match.path != '/projects') {
				addons = this.createAddons();
				posts = this.state.dataPosts.slice(0, 8 - addons.length);
			} else {
				posts = this.state.dataPosts;
			}			

			galleryItems = posts.map( item => {
				let bgimg = item.featuredImage
					? item.featuredImage.cover
					: item.gallery
							? item.gallery[0].thumbnail
							: null;
				return <GalleryItem
					key={item.id}
					id={item.id}
					slug={item.title_slug}
					bgimg={bgimg}>{item.title}</GalleryItem>;
			});
		}
		
		return (
			<Gallery>{galleryItems}{addons}</Gallery>
		);
	}
}

export default Home;
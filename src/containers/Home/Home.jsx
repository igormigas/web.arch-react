import React from 'react';
import API from '../../database/api';

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
			dataPosts: null
		}

		spinnerService.show('mainLoader');
	}

	componentDidMount() {
		API.endpoints.getAll()
			.then( response => {
				this.setState({
					dataPosts: response.data.entries.reverse()
				});
				spinnerService.hide('mainLoader');
			})
			.catch();
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
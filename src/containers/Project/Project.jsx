import React from 'react';
import API from '../../database/api';

import DetailItem from '../../components/Project/DetailItem';
import Box from '../../hoc/Box';
import spinnerService from '../../components/UI/Spinner/spinnerService';
import { detailsLabels } from '../../data/constants';

import classes from './Project.css'

class Project extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.match.params.id ? this.props.match.params.id : null,
			data: null,
		};
		spinnerService.show('mainLoader');
	}

	componentDidMount() {
		API.getID(this.state.id)
			.then( response => response.data.entries[0])
			.then( response => {
				this.setState({
					data: response
				});
				spinnerService.hide('mainLoader');
			})
			.catch();

		/*let query = '/posts/' + this.state.id;
		
		if (!axiosCache.isCached(query)) {
			axios.get(query)
				.then( response => {
					this.setState({
						data: response.data
					});
					spinnerService.hide('mainLoader')
				})
				.catch( error => {
					console.log(error);
				});
		} else {
			this.setState({
				data: axiosCache.get(query)
			});
			spinnerService.hide('mainLoader')
		}*/
	}

	mapGallery() {
		if (this.state.data) {
			return this.state.data.gallery.map( (image,i) => {
				return <img key={i} src={'http://api2.migasiewicz.pl' + image.path} />
			})
		}
	}

	mapDetails() {
		if (this.state.data) {
			if (this.state.data.hasOwnProperty('details')) {
				const details = {...this.state.data.details};
				return detailsLabels.map( (definition, i) => {
					if (details[definition.name]) {
						return <DetailItem label={definition.title} value={details[definition.name]} key={i} />;
					}
				});
			}
		}
	}

	render() {
		return (			
			<div className={classes.Project}>
				{ this.state.data ?
				<Box>
					<div className={classes.Overview}>
						<div className={classes.Title}>
							{this.state.data.title}
						</div>
						<ul className={classes.Details}>
							{this.mapDetails()}
						</ul>
						{ this.state.data.text ?
							<div className={classes.Description}>
								{this.state.data.text}
							</div> : null }
					</div>
					<div className={classes.Gallery}>
						{this.mapGallery()}
					</div>
				</Box>
				: null }
			</div> 
		);
	}
}

export default Project;
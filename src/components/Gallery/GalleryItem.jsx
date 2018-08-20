import React from 'react';
import { Link } from 'react-router-dom';

import classes from './GalleryItem.css'

const galleryItem = (props) => {
	return (
		<div className="item">
			<Link to={`/project-${props.id}/${props.slug}`}>
				<div
					className={classes.Image}
					style={{backgroundImage: `url(${props.bgimg})`}} />

					
				<div className={classes.ItemTitle}>
					{props.children}
				</div>
			</Link>
		</div>
	);
};

export default galleryItem;
import React from 'react';
import { Link } from 'react-router-dom';

import classes from './GalleryAddon.css'

const galleryAddon = (props) => {
	return (
		<div className="item">
			<Link to={props.url ? props.url : '/'}>
				<div
					className={classes.Image}
					>
					<p>{props.children}</p>
				</div>
				<div className={classes.ItemTitle}>&nbsp;</div>
			</Link>
		</div>
	);
};

export default galleryAddon;
import React from 'react';

import classes from './DetailItem.css'

const detailItem = (props) => {
	return (
		<li>
			<span className={classes.DetailsLabel}>{props.label}</span>
			<span className={classes.DetailsValue}>{props.value}</span>
		</li>
	);
};

export default detailItem;
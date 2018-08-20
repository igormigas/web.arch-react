import React from 'react';

import classes from './Gallery.css'

const gallery = (props) => (
	<div
		className={classes.Flex}>
		{props.children}
	</div>
);

export default gallery;
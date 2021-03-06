import React from 'react';

import classes from './Wrapper.css'

const wrapper = (props) => {
	return (
		<div className={classes.Wrapper}>
			{props.children}
		</div>
	);
};

export default wrapper;
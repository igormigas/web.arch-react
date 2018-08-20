import React from 'react';

import classes from './Footer.css'

const footer = (props) => (
	<footer 
		onClick={ (e) => { window.scrollTo(null,0); }}
		className={classes.Footer}>© migasiewicz.pl 2018</footer>
);

export default footer;
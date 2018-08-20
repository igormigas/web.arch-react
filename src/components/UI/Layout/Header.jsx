import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import classes from './Header.css'

const header = (props) => {
	const contact = props.showContact === false
		? null
		: (
			<div className={classes.Contact}>
				<p>architekt@migasiewicz.pl<br />
				+48 609 121 018<br />
				ul. Korczak 16, 62-800 Kalisz</p>
			</div>
		);


	return (
		<header className={classes.Header}>
			<div className={classes.Logo}>
				<Link to="/"><img src="/assets/images/logo.png" /></Link>
			</div>
			{contact}
			<div onClick={props.toggleEvent}>
				<div className={[classes.CSSToggler, (props.togglerActive ? classes.Active : null)].join(' ')}>
					<div className={classes.Line}></div>
					<div className={classes.Line}></div>
					<div className={classes.Line}></div>
				</div>
			</div>
		</header>
	);
};

export default header;
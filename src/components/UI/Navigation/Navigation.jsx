import React from 'react';
import { Link } from 'react-router-dom';

//import classesDesktop from './NavigationDesktop.css'
import classesMobile from './NavigationMobile.css'

const navigation = (props) => {
	let classes = props.forMobile ? classesMobile : classesDesktop;
	return (
		<nav className={classes.Nav}>
			<ul>
				<li><Link to="/projects" onClick={props.closeEvent}>Projekty</Link></li>
				<li><Link to="/contact" onClick={props.closeEvent}>Kontakt / Oferta</Link></li>
			</ul>
		</nav>
	);
};

export default navigation;
import React from 'react';

import classes from './Contact.css'

const contact = (props) => (
	<div className={classes.Container}>
		<div className={classes.Contact}>
			<h4>kontakt:</h4>
			<p>architekt@migasiewicz.pl<br />
			+48 609 121 018<br />
			ul. Korczak 16, 62-800 Kalisz</p>
		</div>
		<div className={classes.Offer}>
			<h4>oferta pracowni:</h4>
			<ul>
				<li>projekty budowlane</li>
				<li>projekty architektury i dekoracji wnętrz</li>
				<li>projekty związane z zabytkami</li>
				<li>koncepcje funkcjonalno - przestrzenne</li>
				<li>inwentaryzacje</li>
				<li>opracowanie wniosków o ustalenie warunków zabudowy</li>
				<li>opracowanie studiów wykonalności i analiz terenów inwestycji</li>
				<li>opinie techniczne</li>
				<li>nadzory autorskie</li>
				<li>doradztwo techniczno - budowlane</li>
			</ul>
		</div>
	</div>
);

export default contact;
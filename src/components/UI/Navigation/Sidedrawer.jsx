import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import Backdrop from '../Backdrop/Backdrop';
import Box from '../../../hoc/Box';

import classes from './Sidedrawer.css'

const sidedrawer = (props) => {
	
	let styles = {
		opacity: props.show ? '1' : '0',
		transform: props.show ? 'translateX(0)' : 'translateX(-100%)'
	}

	return (
		<Box>
			<Backdrop
				show={props.show}
				clicked={props.closeEvent} />
			<div className={classes.Sidedrawer} style={styles}>
				<Navigation
					forMobile={true}
					closeEvent={props.closeEvent} />
			</div>
		</Box>
	);
};

export default sidedrawer;
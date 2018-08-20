import React from 'react';

import spinnerService from './spinnerService';

import classes from './Spinner.css'

class Spinner extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			showSpinner: false
		}

		if (this.props.hasOwnProperty('service')) {
			this.service = this.props.service
		} else {
			this.service = spinnerService;
		}
		
		this.service.register(this);
	}

	componentWillUnmount() {
		this.service.unregister(this);
	}

	get name() {
		return this.props.name;
	}

	get show() {
		return this.state.showSpinner;
	}

	set show(state) {
		this.setState({showSpinner: state});
	}

	render() {
		return (
			this.state.showSpinner ? <div className={classes.Spinner}>
				<div className={classes.preloadJuggle}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div> : null);
	}
}

export default Spinner;
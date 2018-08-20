import React from 'react';

export default class Divo extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="_block">
				{this.props.header && <h1 style={{borderBottom: '1px solid black'}}>{this.props.header}</h1>}
				{this.props.children}
			</div>
		);
	}
}
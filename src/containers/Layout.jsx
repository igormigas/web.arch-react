import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../components/UI/Layout/Header';
import Footer from '../components/UI/Layout/Footer';
import Sidedrawer from '../components/UI/Navigation/Sidedrawer';
import Spinner from '../components/UI/Spinner/Spinner';
import Box from '../hoc/Box';

import classes from './Layout.css'

class Layout extends React.Component {
	
	state = {
		showSidebar: false,
		scrolling: false,
	}	

	toggleSidedrawerHandler = () => {
		this.setState({
			showSidebar: !this.state.showSidebar
		})
	}

	closeSidedrawerHandler = () => {
		this.setState({
			showSidebar: false
		})
	}

	handleScroll = () => {
		console.log('scrolling...');
		let windowY = window.scrollY;
		if (this.state.scrolling === false && windowY > 100) {
			this.setState({
				scrolling: true
			});
		}
		if (this.state.scrolling === true && windowY < 100) {
			this.setState({
				scrolling: false
			});
		}
	}

	componentDidMount() {
		//window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		//window.removeEventListener('scroll', this.handleScroll);
	}

	render() {

		return (
			<div className={'App ' + classes.App}>
				<Spinner name="mainLoader" />
				<Header
					showContact={this.props.location.pathname == '/contact' ? false : true}
					toggleEvent={this.toggleSidedrawerHandler}
					togglerActive={this.state.showSidebar} />
				<Sidedrawer
					show={this.state.showSidebar}
					closeEvent={this.closeSidedrawerHandler} />
				{ this.state.scrolling ? (<div
					className={classes.TopButton}
					onClick={ () => window.scrollTo(null,0) }>
					<img src="/assets/images/UI/button_top.png" />
				</div>) : null }
				<main className={classes.Main}>
					{this.props.children}
				</main>
				<Footer />
			</div>
		);
	}
}

export default withRouter(Layout);
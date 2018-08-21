import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './hoc/ScrollToTop';

// Main CSS source
import './styles/bootstrap/bootstrap-grid.css';
import './styles/main.scss';

// React Components
import Layout from './containers/Layout';
import Home from './containers/Home/Home';
import Project from './containers/Project/Project';
import Contact from './containers/Contact/Contact';

class App extends React.Component {
	render() {
		return (
			<Router>
				<ScrollToTop>
					<Layout>
						<Switch>
							<Route path="/project-:id" component={Project} />
							<Route path="/projects" exact component={Home} />
							<Route path="/contact" exact component={Contact} />
							<Route path="/" component={Home} />
						</Switch>
					</Layout>
				</ScrollToTop>
			</Router>
		);

	}
}

export default App;
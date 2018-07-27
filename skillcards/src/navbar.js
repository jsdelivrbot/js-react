import React, { Component } from 'react';
import PropTypes from 'prop-types';
// DONE!!! ======== //
class Navbar extends Component {
	static defaultProps = {
		onNewCard() {}

	}

	static propTypes = {
		onNewCard: PropTypes.func
	}

	render() {
		return (
			<header className="container">
				<nav className="nav-div">
					<li><a onClick={this.props.onNewCard}>New Card</a></li>
				</nav>
			</header>
			);
	}
}

export default Navbar;
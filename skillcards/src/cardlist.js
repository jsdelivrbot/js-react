import React, { Component } from 'react';
import Card from './card';
import PropTypes from 'prop-types';
// DONE!!! ======== //
class CardList extends Component {

	static propTypes = {
		cards: PropTypes.arrayOf(PropTypes.object).isRequired,
		onDelete: PropTypes.func.isRequired
	}

	render() {
			const {onDelete} = this.props;
			const cards = this.props.cards.map((kula, index) => (
				<Card key={kula.id} {...kula} onDelete={onDelete} />
				));
		return(
			<div className="">
			 {cards}
			</div>
		);
	}
}

export default CardList;
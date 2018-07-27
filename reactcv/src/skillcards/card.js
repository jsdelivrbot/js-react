import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Card extends Component {
	// static propTypes = {
	// 	title: PropTypes.string.isRequired,
	// 	rating: PropTypes.string.isRequired,
	// 	listitems: PropTypes.arrayOf(PropTypes.string).isRequired,
	// 	content: PropTypes.string.isRequired,
	// 	img: PropTypes.string.isRequired,
	// 	id: PropTypes.number.isRequired,
	// 	onDelete: PropTypes.func.isRequired
	// }

	render() {
		const {title, rating, img, content, id, onDelete} = this.props;
		// const listitems = this.props.listitems.map((itm, index) => (
		// 	<li key={index}>{itm}</li>
		// ));
		return (
			<div className="skill-cards-1">
				<div className="card-header-1">
					<img src={img} alt={title} />
				</div>
				<div className="card-title-1">
				{title}
				</div>
				<div className="card-content-1">
				{content}
				</div>
				<div className="card-rating-1">
				{rating}
				{/* <ul>
					{listitems}
				</ul> */}
				</div>
					<a className="btn-delete" onClick={() => onDelete(id)}>DELETE</a>
			</div>
		);
	}
}

export default Card;
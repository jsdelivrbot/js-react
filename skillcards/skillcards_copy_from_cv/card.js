import React, { Component } from 'react';
import PropTypes from 'prop-types';
// DONE!!! ======== //
class Card extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		listitems: PropTypes.arrayOf(PropTypes.string).isRequired,
		content: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		onDelete: PropTypes.func.isRequired
	}

	render() {
		const {title, img, content, id, onDelete} = this.props;
		const listitems = this.props.listitems.map((itm, index) => (
			<li key={index}>{itm}</li>
		));
		return (
			<div className="">
			<div className="">
				<img src={img} alt={title} />
			</div>
			<div className="">
			 <h3 className="">{title}</h3>
			 <h4>listitems:</h4>
			  <ul>
				{listitems}
			  </ul>
			  <h4>content</h4>
			  <p>{content}</p>
			  <button type="button" onClick={() => onDelete(id)}>DELETE</button>
			 </div> 
			</div>
		);
	}
}

export default Card;
import React, { Component } from 'react';
import Card from './card';
import CardList from './cardlist';

class SkillCards extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cards: [
			{
				id: 0,
				title: "HTML",
				content: "I like to think I know it.",
				rating: "4 stars",
				// listitems: ["", "", ""],
				img: "ICON"
			},
			{
				id: 1,
				title: "CSS",
				content: "It's getting there, but I still suck at designing my own stuff.",
				rating: "3 stars",
				// listitems: ["", "", ""],
				img: "ICON"
			},
			{
				id: 2,
				title: "JAVASCRIPT",
				content: "I understand the problem, and I can google and implement the solutions easily.",
				rating: "2 stars",
				// listitems: ["", "", ""],
				img: "ICON"
			},
			{
				id: 3,
				title: "JAVASCRIPT",
				content: "I understand the problem, and I can google and implement the solutions easily.",
				rating: "2 stars",
				// listitems: ["", "", ""],
				img: "ICON"
			},
			{
				id: 4,
				title: "JAVASCRIPT",
				content: "I understand the problem, and I can google and implement the solutions easily.",
				rating: "2 stars",
				// listitems: ["", "", ""],
				img: "ICON"
			},
			{
				id: 5,
				title: "JAVASCRIPT",
				content: "I understand the problem, and I can google and implement the solutions easily.",
				rating: "2 stars",
				// listitems: ["", "", ""],
				img: "ICON"
			},
			{
				id: 6,
				title: "JAVASCRIPT",
				content: "I understand the problem, and I can google and implement the solutions easily.",
				rating: "2 stars",
				// listitems: ["", "", ""],
				img: "ICON"
			},
			{
				id: 7,
				title: "JAVASCRIPT",
				content: "I understand the problem, and I can google and implement the solutions easily.",
				rating: "2 stars",
				// listitems: ["", "", ""],
				img: "ICON"
			},
			{
				id: 8,
				title: "JAVASCRIPT",
				content: "I understand the problem, and I can google and implement the solutions easily.",
				rating: "2 stars",
				// listitems: ["", "", ""],
				img: "ICON"
			}
			],
		// nextRecipeId: 3,
		// showForm: false
		}

		this.onDelete = this.onDelete.bind(this);
	}

	onDelete(id) {
		const cards = this.state.cards.filter(r => r.id !== id);
		this.setState({cards});
	}

  render() {
    return (
      <div className="full-width">
        <CardList onDelete={this.onDelete} cards={this.state.cards} />
      </div>
    );
  }
}

export default SkillCards;
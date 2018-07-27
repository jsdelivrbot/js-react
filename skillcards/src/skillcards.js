import React, { Component } from 'react';
import Card from './card';
import Navbar from './navbar';
import CardList from './cardlist';
import Input from './input';

class SkillCards extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cards: [
			{
				id: 0,
				title: "something",
				content: "something else",
				listitems: ["water", "milk", "shake"],
				img: ""
			},
			{
				id: 1,
				title: "something 2",
				content: "something blah",
				listitems: ["sugar", "milk", "indianfood"],
				img: ""
			},
			{
				id: 2,
				title: "something 3",
				content: "something third",
				listitems: ["pizza", "brownie", "coke"],
				img: ""
			}
			],
		nextRecipeId: 3,
		showForm: false
		}

		this.handleSave = this.handleSave.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	handleSave(recipe) {
		this.setState((prevState, props) => {
			const newRecipe = {...recipe, id: this.state.nextRecipeId};
			return {
				nextRecipeId: prevState.nextRecipeId + 1,
				cards: [...this.state.cards, newRecipe],
				showForm: false
			}
		});
	}

	onDelete(id) {
		const cards = this.state.cards.filter(r => r.id !== id);
		this.setState({cards});
	}

  render() {
  	const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewCard={() => this.setState({showForm: true})} />
        { showForm ? 
        	<Input
        		onSave={this.handleSave} 
        		onClose={() => this.setState({showForm: false})}
        	/> : null }
        <CardList onDelete={this.onDelete} cards={this.state.cards} />
      </div>
    );
  }
}

export default SkillCards;
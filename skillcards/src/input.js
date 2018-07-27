import React, { Component } from 'react';

class Input extends Component {

	static defaulProps = {
		onClose() {},
		onSave() {}
	}

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			content: '',
			listitems: [''],
			img: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleNewListItems = this.handleNewListItems.bind(this);
		this.handleChangeItm = this.handleChangeItm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	handleNewListItems(e) {
		const {listitems} = this.state;
		this.setState({listitems: [...listitems, '']});
	}

	handleChangeItm(e) {			//split the string by the dash and get the second part
		const index = Number(e.target.name.split('-')[1]);
		const listitems = this.state.listitems.map((itm, i) => (
			i === index ? e.target.value : itm
		));
		this.setState({listitems});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSave({...this.state});
		this.setState({
			title: '',
			content: '',
			listitems: [''],
			img: ''
		})
	}

	render() {
		const {title, content, img, listitems} = this.state;
		const {onClose} = this.props;
		let inputs = listitems.map((itm, i) => (
			<div 
				className=""
			 	key={`listitem-${i}`}
			>
			 <label>{i+1}.
			 	<input
			 		type="text"
			 		name={`listitem-${i}`}
			 		value={itm}
			 		size={45}
			 		autoComplete="off"
			 		placeholder=" listitem"
			 		onChange={this.handleChangeItm} />
			 </label>
			</div>		
		));

	return(
		<div className="">
			<form className="" onSubmit={this.handleSubmit}>
				<button
					type="button"
					className=""
					onClick={onClose}
				>
					X
				</button>
				<div className="">
					<label htmlFor="card-title-input">Title</label>
					<input
						id="card-title-input"
						key="title"
						name="title"
						type="text"
						value={title}
						size={42}
						autoComplete="off"
						onChange={this.handleChange} />
					</div>
					<label
						htmlFor="card-content-input"
						style={{marginTop: '5px'}}
					>
						content
					</label>
					<textarea
						key="content"
						id="card-content-input"
						type="content"
						name="content"
						rows="8"
						cols="50"
						autoComplete="off"
						value={content}
						onChange={this.handleChange} />
					{inputs}
					<button
						type="button"
						onClick={this.handleNewListItems}
						className="buttons"
					>
					+
					</button>
					<div className="">
						<label htmlFor="card-img-input">Image Url</label>
						<input
							id="card-img-input"
							type="text"
							placeholder=""
							name="img"
							value={img}
							size={36}
							autoComplete="off"
							onChange={this.handleChange} />
					</div>
					<button
						type="submit"
						className="buttons"
						style={{alignSelf: 'flex-end', marginRight: 0}}
					>
						SAVE
					</button>
			</form>
		</div>					
	)

	}
}

export default Input;
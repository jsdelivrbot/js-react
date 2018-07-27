import React from 'react';

class AddOption extends React.Component {
    state = {
        error: undefined
    };
    //constructor props removed, arrow function added
    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        //handling errors
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }));
        //only wipe the input field if there was no error
        if(!error) {
            e.target.elements.option.value = '';
        }
    };

    render() {
        return(
            <div>
                {/* passing the error messages to render */}
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add option</button>
                </form>
            </div>
        );
    }
}

export default AddOption;
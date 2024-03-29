import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

// pull the state out of the constructor
// convert all 4 event handlers to class properties ( arrow functions )
// delete the consturctor completetly
// start with class properties and end with method

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: []
        };
    }

    componentDidMount() {

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({ options: options }));
            } 
        } catch(e) {
            //do nothing at all :D
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('component will be gone');
    }

    //handleDeleteOptions, passing it down to child (options) and calling it in options
    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
        this.setState(() => ({ options : [] }));
    }
    //handleDeleteOptionSingular
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    };
    //handlePick - pass down to action and bind it
    handlePick() {
                const randomNum = Math.floor(Math.random() * this.state.options.length);
                const option = this.state.options[randomNum];
                alert(option);
    }
    //
    handleAddOption(option) {
        //conditions for errors
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!';
        }
        // else, add it
        // this.setState((prevState) => {
        //     return {
        //         //concat the old array of options with the new option value and return all the values in a new array
        //         options: prevState.options.concat([option])
        //     };
        // });
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }


    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer.";

        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;
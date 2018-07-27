import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';


class IndecisionApp extends React.Component {
        state = {
            options: [],
            //modal is hidden by default
            selectedOption: undefined
        };
        //handleDeleteOptions, passing it down to child (options) and calling it in options
        handleDeleteOptions = () => {

            this.setState(() => ({ options : [] }));
        };
        //handleDeleteOptionSingular
        handleDeleteOption = (optionToRemove) => {
            this.setState((prevState) => ({
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option;
                })
            }));
        };
        //handlePick - pass down to action and bind it
        handlePick = () => {
                    const randomNum = Math.floor(Math.random() * this.state.options.length);
                    const option = this.state.options[randomNum];
                    //set state for selected option to modal show up
                    this.setState(() => ({
                        selectedOption: option
                    }));
        };
        //
        handleAddOption = (option) => {
            //conditions for errors
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists!';
            }
            // else, add it
            this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
        };

        handleClearSelectedOption = () => {
            this.setState(() => ({ selectedOption: undefined }));
        };

    componentDidMount = () => {

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
    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount = () => {
        console.log('component will be gone');
    }



    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer.";

        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                    <div className="container">
                        <Action
                            hasOptions={this.state.options.length > 0}
                            handlePick={this.handlePick}
                        />
                        <div className="widget">
                            <Options
                                options={this.state.options}
                                handleDeleteOptions={this.handleDeleteOptions}
                                handleDeleteOption={this.handleDeleteOption}
                            />
                            <AddOption 
                                handleAddOption={this.handleAddOption}
                            />
                        </div>
                        <OptionModal 
                            selectedOption={this.state.selectedOption}
                            handleClearSelectedOption={this.handleClearSelectedOption}
                        />
                    </div>
            </div>
        );
    }
}   

export default IndecisionApp;
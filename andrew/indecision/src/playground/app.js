
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

// IndecisionApp.defaultProps = {
//     options: [

//     ]
// };

//converted to stateless functions, no this. only props
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'some default showing up'
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return(
        <div>
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {/* set a starter message if no options available */}
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        </div>
    );
};

//Option child of Options

const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();
        //handling errors
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }));
        //only wipe the input field if there was no error
        if(!error) {
            e.target.elements.option.value = '';
        }

}
    render() {
        return(
            <div>
                {/* passing the error messages to render */}
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';

class Hero extends React.Component {

    //constructor removed (props) super(props)
        state = {
            hp: 25,
            count: 100
        };

    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if(!isNaN(count)) {
            this.setState(() => ({ count: count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    //drunk binding removed this yo

    dragonHeal = (min, max) => {
        return Math.max(Math.floor(Math.random() * max) + 1, min);
    };

    handleDragonHeal = () => {
        this.setState((prevState) => {
            var heal = this.dragonHeal(5, 9);
            console.log(heal);
            return {
                count: prevState.count + heal
            };
        });
    }

    calculateDamage = (min, max) => {
        return Math.max(Math.floor(Math.random() * max) + 1, min);
    };

    handleDamageDealt = () => {
        this.setState((prevState) => {
        var damage = this.calculateDamage(3, 5);
        console.log(damage);
            return {
                count: prevState.count - damage
            };
        });
    }
    //drunk binding removed this yo
    handleReset = () => {
        this.setState(() => {
            return {
                hp: 25,
                count: 100
            };
        });
    }


    render() {
        return(
            <div className="hero">
                {/* style="width: {this.state.count};" */}
                {/* style={ { width: `${ this.state.count }%` } } */}
                <div className="container">
                <div
                    style={ { width: `${ this.state.count }%` } }
                    className="dragonHealth">
                        Razorgore the Untamed: {this.state.count}
                </div>

                <div className="heroHealth">Hero: {this.state.hp}</div>
                
                <button onClick={this.handleDragonHeal}>Second Wind of the Black Dragonflight</button>
                <button onClick={this.handleDamageDealt}>Trionhus' Hammer of Justice</button>
                <button onClick={this.handleReset}>Wipe...</button>
                </div>
            </div>
        );
    }
}

export default Hero;

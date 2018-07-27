import React from 'react';
import ReactDOM from 'react-dom';

class Sidenav extends React.Component {
    render() {
        return(
            <div className="sidenav">
                <h1>Blizzard</h1>
                <h3>Diablo 3</h3>
                <h3>World of Warcraft</h3>
                <h3>Heroes of the Storm</h3>
                <h3>Hearthstone</h3>
                <h3>Overwatch</h3>
                <h3>Starcraft 2</h3>
                <h3>Starcraft</h3>
                <h1>Activision</h1>
                <h3>Destiny</h3>
            </div>
        );
    }
}

export default Sidenav;
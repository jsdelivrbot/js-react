import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class Sidenav extends React.Component {
    render() {
        return(
            <div className="sidenav">
                <div>
                    <div className="side-top">
                        <h1>Blizzard</h1>
                        
                        <NavLink to="/d3"><div><h3>Diablo 3</h3></div></NavLink>
                        
                        
                        <NavLink to="/wow"><div><h3>World of Warcraft</h3></div></NavLink>
                        
                        
                        <NavLink to="/hots"><div><h3>Heroes of the Storm</h3></div></NavLink>
                        
                        
                        <NavLink to="/hs"><div><h3>Hearthstone</h3></div></NavLink>
                        
                        
                        <NavLink to="/overwatch"><div><h3>Overwatch</h3></div></NavLink>
                        
                        
                        <NavLink to="/sc2"><div><h3>Starcraft 2</h3></div></NavLink>
                        
                        
                        <NavLink to="/sc"><div><h3>Starcraft</h3></div></NavLink>
                        
                    </div>
                    <div className="side-mid">
                        <h1>Activision</h1>
                        <NavLink to="/destiny2"><div><h3>Destiny</h3></div></NavLink>
                    </div>
                </div>
                <div className="side-bot">
                    <h2>Icon</h2>
                </div>
            </div>
        );
    }
}

export default Sidenav;
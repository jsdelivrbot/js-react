import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class SocialNav extends React.Component {
    render() {
        return(
            <div className="sidenav">
                <h1>Wisper</h1>
                <h1>InviteM</h1>
                <h1>Guilds</h1>
            </div>
        );
    }
}

export default SocialNav;
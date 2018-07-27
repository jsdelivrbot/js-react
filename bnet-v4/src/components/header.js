import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <div className="nav-left">
                    <h1>Logo</h1>
                    <NavLink to="/"><h1>Games</h1></NavLink>
                    <NavLink to="/social"><h1>Social</h1></NavLink>
                    <NavLink to="/shop"><h1>Shop</h1></NavLink>
                    <NavLink to="/news"><h1>News</h1></NavLink>
                </div>
                <div className="nav-right">
                    <div>
                    <p>ICON</p>
                    <p>User</p>
                    </div>
                    <p>Friends</p>
                </div>
            </div>
        );
    }
}

export default Header;
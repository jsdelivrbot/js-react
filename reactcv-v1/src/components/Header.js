import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className="header">
        {/* <NavLink to="/">Home</NavLink> */}
        <NavLink className="header-item" activeClassName="is-active" to="/about"><div>about<span>me</span></div></NavLink>
        <NavLink className="header-item header-item-dark" activeClassName="is-active" to="/sketches"><div>my<span>sketches</span></div></NavLink>
        <NavLink className="header-item" activeClassName="is-active" to="/contact"><div>contact<span>me</span></div></NavLink>
    </div>
);

export default Header;
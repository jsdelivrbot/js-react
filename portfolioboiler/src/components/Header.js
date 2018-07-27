import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Portfolio menu</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/project">Projects</NavLink>
    </div>
);

export default Header;
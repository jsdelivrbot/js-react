import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class ShopNav extends React.Component {
    render() {
        return(
            <div className="sidenav">
               <h1>Game 1 and its props</h1>
               <h1>Game 2 and its props</h1>
               <h1>Game 3 and its props</h1>
               <h1>Game 4 and its props</h1>
               <h1>Game 5 and its props</h1>
            </div>
        );
    }
}

export default ShopNav;
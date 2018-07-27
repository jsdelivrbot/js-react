import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <h1>Logo</h1>
                <h1>Games</h1>
                <h1>Social</h1>
                <h1>Shop</h1>
                <h1>News</h1>
            </div>
        );
    }
}

export default Header;
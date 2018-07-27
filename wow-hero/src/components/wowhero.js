import React from 'react';
import ReactDOM from 'react-dom';

import Hero from '../components/hero';
import Header from '../components/header';
import Sidenav from '../components/sidenav';

class Wowhero extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <div className="main">
                    <Sidenav />
                    <Hero />
                </div>
            </div>
        );
    }
}

export default Wowhero;
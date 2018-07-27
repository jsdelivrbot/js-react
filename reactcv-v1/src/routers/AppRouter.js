import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Sketch from '../components/Sketch';
import Sketches from '../components/Sketches';

const AppRouter = () => (
    <BrowserRouter>
        <div className="container">
        <Header />
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/about" component={About} exact={true}/>
                <Route path="/contact" component={Contact} exact={true}/>
                <Route path="/sketches" component={Sketches} exact={true}/>
                <Route path="/sketch/:id" component={Sketch} exact={true}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
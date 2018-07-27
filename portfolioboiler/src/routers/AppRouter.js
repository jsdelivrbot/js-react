import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Project from '../components/Project';

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header />
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/about" component={About} exact={true}/>
                <Route path="/contact" component={Contact} exact={true}/>
                <Route path="/project" component={Project} exact={true}/>
                <Route path="/projects/:id" component={Projects} exact={true}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
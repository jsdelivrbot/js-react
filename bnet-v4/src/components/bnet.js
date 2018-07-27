import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/header';
import Sidenav from '../components/sidenav';

import Hero from '../components/hero';

import Diablo from '../components/games/diablo';
import Wow from '../components/games/wow';
import Hots from '../components/games/hots';
import Hearthstone from '../components/games/hearthstone';
import Overwatch from '../components/games/overwatch';
import Starcraft2 from '../components/games/starcraft2';
import Starcraft from '../components/games/starcraft';
import Destiny2 from '../components/games/destiny2';

import Social from '../components/menu/social';
import Shop from '../components/menu/shop';
import News from '../components/menu/news';

import SocialNav from '../components/sidenav/social';
import ShopNav from '../components/sidenav/shop';

const Bnet = () => (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main">
                    
                    <Switch>
                        <Route path="/" component={Sidenav} exact={true}/>
                        <Route path="/social" component={SocialNav} exact={true}/>
                        <Route path="/shop" component={ShopNav} exact={true}/>

                        <Route path="/d3" component={Sidenav} exact={true} />
                        <Route path="/wow" component={Sidenav} exact={true} />
                        <Route path="/hots" component={Sidenav} exact={true} />
                        <Route path="/hs" component={Sidenav} exact={true} />
                        <Route path="/overwatch" component={Sidenav} exact={true} />
                        <Route path="/sc2" component={Sidenav} exact={true} />
                        <Route path="/sc" component={Sidenav} exact={true} />
                        <Route path="/destiny2" component={Sidenav} exact={true} />
                    </Switch>
                        <Switch>
                            <Route path="/" component={Hero} exact={true} />
                            <Route path="/d3" component={Diablo} exact={true} />
                            <Route path="/wow" component={Wow} exact={true} />
                            <Route path="/hots" component={Hots} exact={true} />
                            <Route path="/hs" component={Hearthstone} exact={true} />
                            <Route path="/overwatch" component={Overwatch} exact={true} />
                            <Route path="/sc2" component={Starcraft2} exact={true} />
                            <Route path="/sc" component={Starcraft} exact={true} />
                            <Route path="/destiny2" component={Destiny2} exact={true} />

                            <Route path="/social" component={Social} exact={true} />
                            <Route path="/shop" component={Shop} exact={true} />
                            <Route path="/news" component={News} exact={true} />
                        </Switch>
                </div>
            </div>
        </BrowserRouter>
        );

export default Bnet;
import React from 'react';
import { Link } from 'react-router-dom';

const Hearthstone = (props) => (
    <div className="hero">
        <h1>Hearthstone</h1>
        <div>
            <div className="header-play">
                <p>Options</p>
                <p>Redeem Code</p>
            </div>
            <div className="content-box">
                <div className="content-box-video">
                    News feed video
                </div>
                <div className="content-box-small">
                    News feed small
                </div>
                <div className="content-box-small"> 
                    News feed small
                </div>
            </div> 
        </div>   
        <div className="footer">
            <div className="footer-play">
                <p>Region</p>
                <select>
                    <option value="europe">Europe</option>
                    <option value="americas">Americas</option>
                </select>
                <button className="button">PLAY</button>
            </div>
            <div>
                <p>Published by ACTIVISION developed by BUNGIE</p>
            </div>
        </div>
    </div>
);

export default Hearthstone;
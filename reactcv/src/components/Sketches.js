import React from 'react';
import { Link } from 'react-router-dom';

const Sketches = (props) => (
    <div className="body">
        <div className="sketches">
            <div>
                
            </div>
            <div className="sketch-links">
                <Link className="btn btn-white button-animated-1" to="/sketch/destiny2">Destiny</Link>
                <Link className="btn btn-white button-animated-2" to="/sketch/spotify">Spotify</Link>
                <Link className="btn btn-white button-animated-3" to="/sketch/startup">Startup</Link>
                <Link className="btn btn-white button-animated-4" to="/sketch/landing">Landing</Link>
                <Link className="btn btn-white button-animated-5" to="/sketch/amazon">Amazon</Link>
            </div>
            <div>
                <h2>Also have some CRUDs, todos, and stuff everyone hates looking at.</h2>
            </div>
        </div>
    </div>
);

export default Sketches;
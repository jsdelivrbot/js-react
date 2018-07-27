import React from 'react';
import { Link } from 'react-router-dom';

const Sketch = (props) => (
    <div className="body">
        <h1>This is the {props.match.params.id} sketch.</h1>
    </div>
);

export default Sketch;
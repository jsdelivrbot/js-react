import React from 'react';
import { Link } from 'react-router-dom';

const Projects = (props) => (
    <div>
        This is the {props.match.params.id} project.
    </div>
);

export default Projects;
import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => (
    <div>
        Here are the projects with links.
        <Link to="/projects/valami">Valami</Link>
        <Link to="/projects/barmi">Barmi</Link>
        <Link to="/projects/akarmi">Akarmi</Link>
    </div>
);

export default Project;
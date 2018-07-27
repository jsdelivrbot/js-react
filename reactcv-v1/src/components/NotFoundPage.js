import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <div className="text-box">
            <div className="not-found large-title">
                <span>404</span> - Page Not Found
            </div>
            <div>
                <Link className="btn btn-purple button-animated" to="/">Go Back</Link>
            </div>
        </div>
    </div>
);

export default NotFoundPage;
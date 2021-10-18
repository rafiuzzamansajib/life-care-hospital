import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className="custom-container">
                <h1 className="text-center text-style">4 0 4</h1>
                <h2 className="text-center">Sorry!! Page not found</h2>
                <NavLink to="/home">
                <button className="btn btn-custom ">Reload page</button>
                </NavLink>
            
            </div>
        </div>
    );
};

export default NotFound;
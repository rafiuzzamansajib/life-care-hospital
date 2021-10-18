import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <div className="col">
        <div className="card">
          <img src={img} height="200px" className="fluid" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="px-3">{description.slice(0,150)}</p>
            <Link to={`/service/${id}`}>
                <button className="btn btn-primary">Servise Ditelse</button>
            </Link>
        </div>
        </div>
    </div>
    );
};

export default Service;
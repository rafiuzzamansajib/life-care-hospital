import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({consaltent}) => {
    const {id, name, img, expertize } = consaltent;
    return (
        <div className="col">
            <div className="card">
                 <div>
                    <img src={img} height="200px" className="img-fluid p-2" alt="..." />   
                 </div>
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>{expertize}</p>
                <Link to={`/specialist/${id}`}><button className='btn btn-primary'>Get Appoinment</button></Link>
                </div>
                </div>
        </div>
    );
};

export default Doctor;
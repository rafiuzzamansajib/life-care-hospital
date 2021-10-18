import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({specialist}) => {
    const { name, img, expertize } = specialist;
    return (
        <div className="col">
            <div className="card">
                 <div>
                    <img src={img} height="200px" className="fluid m-2" alt="..." />   
                 </div>
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="">{expertize}</p>
                <Link to=""><button className='btn btn-primary'>Get Appoinment</button></Link>
                </div>
                </div>
        </div>
    );
};

export default Doctor;
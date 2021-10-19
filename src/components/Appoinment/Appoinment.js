import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';

const Appoinment = () => {
    const { user } = useAuth();
    const { specialistId } = useParams(); 
    const[appoinment,setAppoinment] = useState([])
    useEffect(()=>{
        fetch('/doctors.json')
        .then(res=>res.json())
        .then(data=> setAppoinment(data))
    },[])
    const getAppoinment = appoinment.find(appointDoctor => appointDoctor.id == specialistId)
    return (
        <>
        <Header></Header>
        <div className="container align-middle d-flex justify-content-center mt-5 border">
            <div>
                <h3 className='text-center'>{user?.displayName}</h3>
                <p className='text-center'>Your Appoinment Has Been Confirmed</p>
                <p className='text-center'>Your Consalten Name : <span className='fw-bold'>{getAppoinment?.name}</span></p>
                <p className='text-center'>{getAppoinment?.name} is specialist at <span className="text-danger"> {getAppoinment?.expertize} </span> department.
                We Hope You will get well very Soon
                </p>
                <p className='text-center'><small>Best Wishes Form Life Care Hospital</small></p>

            </div>
        </div>
        </>
    );
};

export default Appoinment;
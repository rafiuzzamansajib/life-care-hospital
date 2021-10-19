import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';


const ServiceDitelse = () => {
    const {serviceId} = useParams()
    const[item,setItem] = useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[])
    const ditelseService = item.find(ditelse=> ditelse.id == serviceId)
    return (
        <>
        <Header></Header>
        <div className='container'>
            <h2 className='text-center'>{ditelseService?.name}</h2>
            <div className='border'>
            <div className='p-5'>
                <div>
                    <img className="img-fluid" src={ditelseService?.img} alt="" />
              </div>
              <div className="mx-5">
                <h4 className='text-center'>Service Consaltant: {ditelseService?.consaltant}</h4>
                <p className='text-center'>{ditelseService?.description}</p>
              </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default ServiceDitelse;
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';


const Doctors = () => {
    const[consaltent,setConsaltent] = useState([]);
    useEffect(()=>{
        fetch('/doctors.json')
        .then(res => res.json())
        .then(data =>setConsaltent(data))
    },[])
    return (
        <div id="specialist">
            <h2 className="text-primary text-center mt-5">Our Specialist Doctors</h2>
           <div id="experts" className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
                {
                    consaltent.map(consaltent => <Doctor
                    key={consaltent.id}
                    consaltent={consaltent}
                    >
                    </Doctor>)
                }
            </div>
        </div>
        </div>
    );
};

export default Doctors;
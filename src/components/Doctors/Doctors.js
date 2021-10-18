import React from 'react';
import Doctor from '../Doctor/Doctor';
import doctor1 from './../../images/doctors/1.jpg';
import doctor2 from './../../images/doctors/2.jpg'
import doctor3 from './../../images/doctors/3.jpg'
import doctor4 from './../../images/doctors/4.jpg'
import doctor5 from './../../images/doctors/5.jpg'

const specialist  = [
    {
        img: doctor1,
        name: 'Andrew Smith',
        expertize: 'Infectious Disease Specialists'
    },
    {
        img: doctor2,
        name: 'Lilly Anderson',
        expertize: 'Oncologists'
    },
    {
        img: doctor3,
        name: 'Zakaria Smith',
        expertize: 'Cardiologists'
    },
    {
        img: doctor4,
        name: 'Rose Jacson',
        expertize: 'Critical Care Medicine Specialists'
    },
    {
        img: doctor5,
        name: 'Sakib Willian',
        expertize: 'Emergency Medicine Specialists'
    },
]
const Doctors = () => {
    return (
        <div id="specialist">
            <h2 className="text-primary text-center mt-5">Our Specialist Doctors</h2>
           <div id="experts" className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
                {
                    specialist.map(specialist  => <Doctor
                        key={specialist.name}
                        specialist={specialist}
                    >

                    </Doctor>)
                }
            </div>
        </div>
        </div>
    );
};

export default Doctors;
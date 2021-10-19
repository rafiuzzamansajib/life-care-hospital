import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from './../../images/banner/banner1.jpg'
import banner2 from './../../images/banner/banner2.jpg'
import banner3 from './../../images/banner/banner3.jpg'

const Banner = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item interval={1500}>
                <img
                className="d-block w-100 img-size"
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Specialist Doctors Panel</h3>
                    <p>We have some best doctor.They teart patient very frindly</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100 img-size"
                src={banner2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Patient Ward</h3>
                <p>Clean and Comfortable Ward.It feels patient that they are in home</p>
                </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
                <img
                className="d-block w-100 img-size"
                src={banner3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Operation Theatre</h3>
                <p>Best Segueon team perform in verious critical and Life saving surgery</p>
                </Carousel.Caption>
             </Carousel.Item>
        </Carousel>
        </>
    );
};

export default Banner;
import { faAt, faMapMarkedAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './contact.css'

const Contact = () => {
    return (
        <div id='contact'>
        <h3 className='text-center text-primary'>Contact Us</h3>
        <div className="d-flex">
            <div className="col-md-5">
              <div className="container items">
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5 className='mx-5'>+999 9999 9999</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div>
                    <p className='mx-5'>
                      New Elepahant Road,11/A
                    </p>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faAt} />
                  </div>
                  <div>
                    <p className='mx-5'>
                      lifecare@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='contatiner w-75 py-5 items'>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Massage</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button>Send</Button>
        </Form>

        </div>
        </div>
    </div>
    );
};

export default Contact;
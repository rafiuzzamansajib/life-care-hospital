import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer-dark">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="#">Web design</Link></li>
                            <li><Link to="#">Development</Link></li>
                            <li><Link to="#">Hosting</Link></li>
                        </ul>
                    </div>
                    {/* <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><Link to="#">Company</Link></li>
                            <li><Link to="#">Team</Link></li>
                            <li><Link to="#">Careers</Link></li>
                        </ul>
                    </div> */}
                    <div className="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div className="col item social">
                        <Link to="#"><FontAwesomeIcon icon={faFacebook} /></Link>
                        <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                        <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link to="#"><FontAwesomeIcon icon={faBlog} /></Link>
                    </div>
                </div>
                <p className="copyright">Company Name © 2018</p>
            </div>
    </div>
        </>
    );
};

export default Footer;
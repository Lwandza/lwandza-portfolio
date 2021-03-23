import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode, faMobile, faMobileAlt, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/>
                                </div>
                                <h3>Web Development</h3>
                                <p>I can develop responsive websites using bootstrap and material ui</p>
                            </div>
                        </div>                        
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faMobileAlt} size="2x"/>
                                </div>
                                <h3>App Development</h3>
                                <p>Anrdoid, Angualr, Ionic, React and Expo created usind Visual Studio Code and Android Studio</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                 <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faNetworkWired} size="2x"/>
                                </div>
                                <h3>Api Development</h3>
                                <p>Google, Firebase. AWS, Facebook and MySql database api intergration</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faGoogle} size="2x"/>
                                </div>
                                <h3>Google Ads</h3>
                                <p>Google intergration to your app and website</p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Services

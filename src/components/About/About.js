import React from 'react';
import profile from '../../assets/profile.jpg'

const About = () => {
    return (
        <div className="about">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 col-xm-12">
                        <div className="photo-wrap mb-5">
                            <img className="profile-img" src={profile} alt="lwandza"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xm-12">
                        <h1 className="about-heading">About Me</h1>
                        <p>Add Text</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

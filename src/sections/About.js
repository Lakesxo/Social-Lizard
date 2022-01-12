import React from 'react'
import Heading from '../components/Heading'

const About = () => {
    const isMobile = window.innerWidth <= 600;

    return (
        <div className="about" id="about">
            <Heading title="About" />
            <div className="flexAb">
                <div className="leftAb">
                    <p className="abDeets ">
                    Social lizard is a creative agency dedicated towards nurturing, developing and handling of brands,ideas and business of music stars. As an incubator,we are the perfect blend of experience and Gen-Z innovations designed to accelerate the growth and success of music stars through an array of business support resources and services.
                    </p>
                    <p data-aos="fade-up" className="abDeets">
                    As a modern day organization located in the state that never sleeps Abeokuta,Nigeria with a work-force that offers on show the best of purpose and creative thinking.The mission of the agency is to fulfil and surpass the client's aim by providing new era social media solutions,gritty old experience,content creation and iconic branding.    
                    </p>
                </div>
                <div className="rightAb">
                    <img data-aos={!isMobile ? "fade-left" : ""} src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1630235222/Black_Event_Coordinators_Logo__1_-removebg-preview_2_zjkm7h.png" alt="social lizard logo" />
                </div>
            </div>
        </div>
    )
}

export default About

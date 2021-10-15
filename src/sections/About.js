import React from 'react'
import Heading from '../components/Heading'

const About = () => {
    return (
        <div className="about" id="about">
            <Heading title="About" />
            <div className="flexAb">
                <div className="leftAb">
                    <p className="abDeets">
                    Social Lizard Agency is a creative incubator dedicated to nurturing
                    and developing businesses and music stars through shaping their
                    brands creating content that aligns and achieving set goals. This task
                    comes with understanding the vision and requirements in shaping
                    these businesses and artistes brand, Social Lizard Agency is equipped
                    with a workforce that truly believes in teamwork and setting goals
                    and business strategies.
                    </p>
                    <p className="abDeets">
                        Social Lizard is a modern agency located in Lagos, Nigeria. Our mission as a new day creative agency is to fulfil client’s social media marketing goals by providing new era social media solutions, content creation and iconic branding.
                    </p>
                </div>
                <div className="rightAb">
                    <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1630235222/Black_Event_Coordinators_Logo__1_-removebg-preview_2_zjkm7h.png" alt="social lizard logo" />
                </div>
            </div>
        </div>
    )
}

export default About

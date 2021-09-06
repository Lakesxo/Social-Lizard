import React from 'react'
import Heading from '../components/Heading'

const About = () => {
    return (
        <div className="about" id="about">
            <Heading title="About" />
            <div className="flexAb">
                <div className="leftAb">
                    <p className="abDeets">
                        Social Lizard is a modern agency located in Lagos, Nigeria. Our mission as a new day creative agency is to fulfil client’s social media marketing goals by providing new era social media solutions, content creation and iconic branding.
                    </p>
                    <p className="abDeets">
                        Social Lizard is a modern agency located in Lagos, Nigeria. Our mission as a new day creative agency is to fulfil client’s social media marketing goals by providing new era social media solutions, content creation and iconic branding.
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

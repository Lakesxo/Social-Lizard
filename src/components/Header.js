import React from 'react'

const Header = ({ toggle, toggleHamburger }) => {
    const isMobile = window.innerWidth <= 600;

    return (
        <div>
            <div className="header">
                <div className="logo">
                    <img src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1630235221/social_lizard_agency_4_gce8uh.png" alt="social lizard logo" className="logo" />
                </div>
                <div className="navHam">
                    {
                        isMobile ? 
                            <div onClick={toggleHamburger} className={toggle ? "hamburger change" : "hamburger"}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                            :
                            <div className="navDesktop">
                                <div className="nomNavs">
                                    <p className="nav">About</p>
                                    <p className="nav">Services</p>
                                    <p className="nav">Testimonials</p>
                                </div>
                                <div className="ctas">
                                    <button className="contact">Contact</button>
                                    <button className="start">Get Started</button>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header

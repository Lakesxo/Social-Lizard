import React from 'react'
import { Link } from 'react-scroll'

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
                                    <Link to="about" spy={true}><p className="nav">About</p></Link>
                                    <Link to="services" spy={true}><p className="nav">Services</p></Link>
                                    <Link to="testimonials" spy={true}><p className="nav">Testimonials</p></Link>
                                    
                                    
                                </div>
                                <div className="ctas">
                                    <Link to="contact" spy={true}><button className="contact">Contact</button></Link>
                                    <Link to="services" spy={true}><button className="start">Get Started</button></Link>
                                    
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header

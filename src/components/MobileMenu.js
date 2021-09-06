import React from 'react'
import { Link } from "react-scroll"

const MobileMenu = ({ toggleHamburger }) => {
    return (
        <div className="mbMenu">
            <Link to="about" spy={true}><p className="mbNavz" onClick={toggleHamburger}>About</p></Link>
            <Link to="services" spy={true}><p className="mbNavz" onClick={toggleHamburger}>Services</p></Link>
            <Link to="testimonials" spy={true}><p className="mbNavz" onClick={toggleHamburger}>Testimonials</p></Link>
            <Link to="contact" spy={true}><p className="mbNavz" onClick={toggleHamburger}>Contact</p></Link>
            <Link to="services" spy={true}><button className="start" onClick={toggleHamburger}>Get started</button></Link>
        </div>
    )
}

export default MobileMenu

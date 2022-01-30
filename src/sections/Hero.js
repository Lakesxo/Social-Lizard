import React, { useState } from 'react'
import Header from '../components/Header'
import MobileMenu from '../components/MobileMenu';
import SocialIcons from '../components/SocialIcons'
import { Link } from "react-scroll"

const Hero = () => {
    const isMobile = window.innerWidth <= 600;
    const [ toggle, setToggle ] = useState(false)

    const toggleHamburger = () => {
        setToggle(!toggle)
        if (!toggle) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }

    return (
        <div>
            <div className="heroView" id="hero">
                <Header toggle={toggle} toggleHamburger={toggleHamburger} />
                <div className="flexHero">
                    <div className="leftHero">
                        <div className="textnBtn">
                            <p className="heroDeets">GROW <span className="extra">YOUR</span><br /> CREATIVE BUSINESS <span className="extra">WITH</span><br /> SOCIAL LIZARD</p>
                            <Link to="services" spy={true}><button className="start">Get started</button></Link>
                        </div>
                        {/* <img className="path" data-aos="fade-left" draggable="false" src={isMobile ? "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1641982519/Group_mb_bi0s7l.png" : "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1641982519/Group_desk_gqoxvz.png"} alt="social lizard" /> */}
                    </div>
                    <div className="rightHero">
                        <img draggable="false" src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1630147706/Social_tree_uoojjt.gif" alt="social lizard" />
                        <img className="path" data-aos="fade-left" draggable="false" src={isMobile ? "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1641982519/Group_mb_bi0s7l.png" : "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1643554803/lastbg_kntg3a.png"} alt="social lizard" />
                    </div>
                </div>
                <img draggable='false' src={isMobile ? "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1630503716/Ellipse_3_rnwuq7.png" : "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1630235221/Ellipse_1_u8lyv6.png"} alt="social lizard" className="bgImg" />
                <SocialIcons />
            </div>
            {toggle && <MobileMenu toggle={toggle} toggleHamburger={toggleHamburger} />}
        </div>
    )
}

export default Hero

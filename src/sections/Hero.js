import React from 'react'
import Header from '../components/Header'
import SocialIcons from '../components/SocialIcons'

const Hero = () => {
    return (
        <div className="heroView">
            <Header />
            <div className="flexHero">
                <div className="leftHero">
                    <div className="textnBtn">
                        <p className="heroDeets">Grow <span className="extra">your</span> business the <span className="extra">right</span> way with social <span className="extra">lizard</span>.</p>
                        <button className="start">Get started</button>
                    </div>
                    <img className="path" draggable="false" src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1630235221/Group_10_xblwxs.png" alt="social lizard" />
                </div>
                <div className="rightHero">
                    <img draggable="false" src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1630147706/Social_tree_uoojjt.gif" alt="social lizard" />
                </div>
            </div>
            <img draggable='false' src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1630235221/Ellipse_1_u8lyv6.png" alt="social lizard" className="bgImg" />
            <SocialIcons />
        </div>
    )
}

export default Hero

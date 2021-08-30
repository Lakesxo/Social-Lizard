import React from 'react'
import Heading from '../components/Heading'
import SocialIcons from '../components/SocialIcons'

const Contact = () => {
    return (
        <div className="contactCont">
            <Heading title="Get In Touch" />
            <div className="midTxt">
                <p className="catchy">Here’s where you’d insert a catchy phrase for the contact us section</p>
            </div>
            <form>
                <div className="flexInp">
                    <input type="text" name="name" id="name" placeholder="Name" />
                    <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                <textarea placeholder="Message" name="message" id="message" cols="30" rows="10"></textarea>
                <button className="start">Send</button>
            </form>
            <div className="centSc">
                <SocialIcons />
            </div>
        </div>
    )
}

export default Contact

import React, { useEffect, useState, useRef } from 'react'
import Heading from '../components/Heading'
import SocialIcons from '../components/SocialIcons'
import { useForm } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xvodjgjo");
    const [deliveredForm, setDeliveredForm] = useState(false)
    const formRef = useRef()

    useEffect(() => {
        if (state.succeeded) {
            setDeliveredForm(true)
            setTimeout(() => setDeliveredForm(false), 5000)
        }
        formRef.current.reset()
    }, [state.succeeded])
 
    return (
        <div className="contactCont" id="contact">
            <Heading title="Get In Touch" />
            <div className="midTxt">
                <p className="catchy">Here’s where you’d insert a catchy phrase for the contact us section</p>
            </div>
            <form onSubmit={handleSubmit} ref={formRef}>
                <div className="flexInp">
                    <input type="text" name="name" id="name" placeholder="Name" required />
                    <input type="email" name="email" id="email" placeholder="Email" required />
                </div>
                <textarea placeholder="Message" name="message" id="message" cols="30" rows="10"></textarea>
                {
                    deliveredForm ? <p className="thanks">Thanks for reaching out !</p> : <button disabled={state.submitting} className="start fullWdth">Send</button>
                }
            </form>
            <div className="centSc">
                <SocialIcons />
            </div>
        </div>
    )
}

export default Contact

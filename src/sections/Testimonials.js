import React from 'react'
import Heading from '../components/Heading'
import Carousel from 'react-bootstrap/Carousel' 
import TestimonialCard from '../components/TestimonialCard'

const Testimonials = () => {
    return (
        <div className="testiCont">
            <Heading title="Testimonials" />
            <div className="midTxt">
                <p className="catchy">Here’s what our clients had to say about us</p>
            </div>
            <div className="caroCont">
                <Carousel controls={true} >
                    <Carousel.Item>
                        <div className="caroFlex">
                            <TestimonialCard img="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1593611487/user2_saauqi.png" details="We handle social media accounts page set up and account management" author="Pacman" />
                            <TestimonialCard img="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1593611487/user2_saauqi.png" details="We handle social media accounts page set up and account management" author="Pacman" />
                            <TestimonialCard img="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1593611487/user2_saauqi.png" details="We handle social media accounts page set up and account management" author="Pacman" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="caroFlex">
                            <TestimonialCard img="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1593611487/user2_saauqi.png" details="We handle social media accounts page set up and account management" author="Pacman" />
                            <TestimonialCard img="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1593611487/user2_saauqi.png" details="We handle social media accounts page set up and account management" author="Pacman" />
                            <TestimonialCard img="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1593611487/user2_saauqi.png" details="We handle social media accounts page set up and account management" author="Pacman" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="caroFlex">
                            <TestimonialCard img="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1593611487/user2_saauqi.png" details="We handle social media accounts page set up and account management" author="Pacman" />
                            <TestimonialCard img="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1593611487/user2_saauqi.png" details="We handle social media accounts page set up and account management" author="Pacman" />
                            <TestimonialCard img="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1593611487/user2_saauqi.png" details="We handle social media accounts page set up and account management" author="Pacman" />
                        </div>
                    </Carousel.Item>
                </Carousel>
                
            </div>
        </div>
    )
}

export default Testimonials

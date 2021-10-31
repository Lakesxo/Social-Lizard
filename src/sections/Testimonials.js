import React from 'react'
import Heading from '../components/Heading'
import Carousel from 'react-bootstrap/Carousel' 
import TestimonialCard from '../components/TestimonialCard'

const Testimonials = () => {
    return (
        <div className="testiCont" id="testimonials">
            <Heading title="Testimonials" />
            <div className="midTxt">
                <p className="catchy">Here’s what our clients had to say about us</p>
            </div>
            <div className="caroCont">
                <Carousel controls={true} >
                    <Carousel.Item>
                        <div className="caroFlex">
                            <TestimonialCard details=" Trusting social lizard with my brand as been one of the best decisions I made this year, they spotlighted a lot of mistakes I overlooked as a business owner" author="Dotun" />
                            <TestimonialCard details="My team recommended social lizard and I just say I am impressed with work so far I will say It's a job well done." author="Susan" />
                            <TestimonialCard details="Social lizard did the work and I think they should talk the talk" author="Chiamaka" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="caroFlex">
                            <TestimonialCard details="I always thought releasing music was easy, till social lizard put me through the basics and a while lot of artiste development" author="Gbenga" />
                            <TestimonialCard details="Listenership was my problem not till social lizard point out a large loophole in my branding and social media representation." author="Ayodeji" />
                            <TestimonialCard details="I Have been able to gain more reach thanks to a constantly updated portfolio page created for me." author="Racheal" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="caroFlex">
                            <TestimonialCard details="Social lizard transformed my business and boosted my sales for me" author="Cosmos" />
                            <TestimonialCard details="I would say you guys are the best social media agency to work with out there" author="Richard" />
                            <TestimonialCard details="For me it's expertise and class at it's best. Trusting social lizard with my brand has been one of the best decisions i have made." author="Elizabeth" />
                        </div>
                    </Carousel.Item>
                </Carousel>
                
            </div>
        </div>
    )
}

export default Testimonials

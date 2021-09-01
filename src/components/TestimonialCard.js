import React from 'react'

const TestimonialCard = ({ img, details, author }) => {
    return (
        <div className="cardTCont">
            <img className="userTesti" src={img} alt="social lizard testimonila" />
            <p className="testiDeets"><span className="quotes">"<span className="actDeets">{details}</span>"</span></p>
            <p className="testiAuthor">{author}</p>
        </div>
    )
}

export default TestimonialCard

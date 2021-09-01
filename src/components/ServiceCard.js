import React from 'react'

const ServiceCard = ({ icon, title, deets }) => {
    return (
        <div className="servCard">
            <div className="iconServ">{icon}</div>
            <p className="servTitle">{title}</p>
            <p className="servDeets">{deets}</p>
        </div>
    )
}

export default ServiceCard

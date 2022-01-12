import React from 'react'

const Heading = ({ title }) => {
    const style = {
        paddingBotton: "10px",
        borderBottom: "2px solid #EC8B24",
        color: "#D3431F"
    }

    return (
        <div className="centH2">
            <h2 data-aos="zoom-in" style={style}>{title}</h2>
        </div>
    )
}

export default Heading

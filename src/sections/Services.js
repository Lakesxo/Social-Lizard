import React from 'react'
import Heading from '../components/Heading'
import ServiceCard from '../components/ServiceCard'
import { Icon } from '@iconify/react';

const Services = () => {
    const isMobile = window.innerWidth <= 600;

    return (
        <div className="serviceCont" id="services">
            <Heading title="Services" />
            <div className="tabbedCont">
                <div className="centTabNav">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">{isMobile ? "SMEs" : "SME Services"}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{isMobile ? "Audio" : "Audio Services"}</button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="flexServs">
                            <ServiceCard icon={<Icon icon="fluent:people-team-16-filled" />} title="Social Media" deets="We handle social media accounts page set up and account management" />
                            <ServiceCard icon={<Icon icon="whh:painting" />} title="Branding" deets="We handle social media accounts page set up and account management" />
                            <ServiceCard icon={<Icon icon="heroicons-outline:status-online" />} title="Online Portfolios" deets="We handle social media accounts page set up and account management" />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="flexServs">
                            <ServiceCard icon={<Icon icon="fluent:music-note-2-play-20-filled" />} title="Playlist Pitching" deets="We handle social media accounts page set up and account management" />
                            <ServiceCard icon={<Icon icon="icon-park-outline:hanfu-chinese-style" />} title="Appearance" deets="We handle social media accounts page set up and account management" />
                            <ServiceCard icon={<Icon icon="simple-icons:yourtraveldottv" />} title="Tours & Bookings" deets="We handle social media accounts page set up and account management" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services

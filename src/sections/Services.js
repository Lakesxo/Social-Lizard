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
                            <button className="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true">{isMobile ? "Artistes" : "Artiste Services"}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="false">{isMobile ? "SMEs" : "SME Services"}</button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="flexServs">
                            <ServiceCard icon={<Icon icon="fluent:music-note-2-play-20-filled" />} title="Playlist Pitching" deets="Pitching to verified and active playlists have become somewhat difficult in recent months, Social Lizard handling your catalogue guarantees playlisting on channels relevant to your audience." />
                            <ServiceCard icon={<Icon icon="icon-park-outline:hanfu-chinese-style" />} title="Appearance" deets="Every artiste is a business, at Social Lizard we take pride at having a personalised relationship around our ariste, their music and business by creating a business structure that works with each artiste and her/his goals." />
                            <ServiceCard icon={<Icon icon="simple-icons:yourtraveldottv" />} title="Tours & Bookings" deets="We handle social media accounts page set up and account management" />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="flexServs">
                            <ServiceCard icon={<Icon icon="fluent:people-team-16-filled" />} title="Social Media Management" deets="A try with social is us creating the best page layout on your social media pages to pass your brand messaging across to your niche demograph." />
                            <ServiceCard icon={<Icon icon="whh:painting" />} title="Branding" deets="Social Lizard is equppied with a knowledgable team around the art of branding and interpreting brand messaging." />
                            <ServiceCard icon={<Icon icon="heroicons-outline:status-online" />} title="Online Portfolios" deets="Presenting your business on whichever platform your customers chooses shows flexibility, Social Lizard is ready to get claws-on till we hit the goal." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services

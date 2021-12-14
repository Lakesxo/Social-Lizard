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
                            <ServiceCard icon={<Icon icon="fluent:music-note-2-play-20-filled" />} title="Playlist Pitching" deets="Every artist's goal is to be noticed,they want their music discovered and their craft acknowledged. Organically targeting the right playlists for our clients is another way we get our artiste in the ears of their listeners, at social lizard we guarantee playlisting on channels relevant to your new and existing audience." />
                            <ServiceCard icon={<Icon icon="icon-park-outline:hanfu-chinese-style" />} title="Appearance" deets="Every artiste is a business, at Social Lizard we take pride at having a personalised relationship around our ariste, their music and business by creating a business structure that works with each artiste and her/his goals." />
                            <ServiceCard icon={<Icon icon="simple-icons:yourtraveldottv" />} title="Tours & Bookings" deets="Tours,shows is important for everyday artiste because it is one of the best ways to establish fan interaction and is guaranteed to leave fans with an unforgettable experience. Stage manager would be available to put you through lessons needed for a solid Tour/Stage performance.Social lizard also renders booking services, arrangement for terms of contract, dates and fees with our clients interest at sight." />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="flexServs">
                            <ServiceCard icon={<Icon icon="fluent:people-team-16-filled" />} title="Social Media Management" deets="At social lizard,we create and distribute content for social media platforms,monitor and respond to online interactions and provide expert guidance needed to enhance our clients digital footprint.We are here to research, analyze, and understand your brand values and then translate those values into a music identity. This identity is a powerful tool to create a stronger and more emotional connection to your consumers, increasing their loyalty to your brand and building long-term relationships.
" />
                            <ServiceCard icon={<Icon icon="whh:painting" />} title="Branding" deets="Our agency stands out when it comes to creating and marketing branded materials,creating an image and content where the client's audience can engage seamlessly online and offline." />
                            <ServiceCard icon={<Icon icon="heroicons-outline:status-online" />} title="Online Portfolios" deets="Presenting your business on whichever platform your customers chooses shows flexibility, Social Lizard is ready to get claws-on till we hit the goal." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services

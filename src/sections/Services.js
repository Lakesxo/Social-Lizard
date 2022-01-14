import React from 'react'
import Heading from '../components/Heading'
import ServiceCard from '../components/ServiceCard'
import { Icon } from '@iconify/react';

const Services = () => {
    return (
        <div className="serviceCont" id="services">
            <Heading title="Services" />
                <div className="flexServs">
                    <ServiceCard 
                        icon={<Icon icon="fluent:music-note-2-play-20-filled" />} 
                        title="Playlist Pitching" 
                        deets="Every artiste's goal is to be noticed,they want their music discovered and their craft acknowledged. Organically targeting the right playlists for our clients is another way we get our artiste in the ears of their listeners." 
                    />
                    <ServiceCard 
                        icon={<Icon icon="icon-park-outline:hanfu-chinese-style" />} 
                        title="Appearance" 
                        deets="Every artiste is a business, at Social Lizard we take pride at having a personalised relationship around our ariste, their music and business by creating a business structure that works with each artiste and her/his goals." 
                    />
                    <ServiceCard 
                        icon={<Icon icon="simple-icons:yourtraveldottv" />} 
                        title="Tours & Bookings" 
                        deets="Tours & shows are important for every artiste because it is one of the best ways to establish fan interaction and is guaranteed to leave fans with an unforgettable experience." 
                    />
                </div>
                <div className="flexServs">
                    <ServiceCard 
                        icon={<Icon icon="fluent:people-team-16-filled" />} 
                        title="Social Media Management" 
                        deets="At social lizard we create and distribute content for social media platforms, monitor and respond to online interactions and provide expert guidance needed to enhance our clients digital footprint." 
                        />
                    <ServiceCard 
                        icon={<Icon icon="whh:painting" />} 
                        title="Branding" 
                        deets="Our agency stands out when it comes to creating and marketing branded materials,creating an image and content where the client's audience can engage seamlessly online and offline." 
                    />
                    <ServiceCard 
                        icon={<Icon icon="heroicons-outline:status-online" />} 
                        title="Online Portfolios" 
                        deets="Presenting your business on whichever platform your customers chooses shows flexibility, Social Lizard is ready to get claws-on till we hit the goal." 
                    />
                </div>
        </div>
    )
}

export default Services

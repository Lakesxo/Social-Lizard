import React from 'react'
import { Icon } from '@iconify/react';

const SocialIcons = () => {
    return (
        <div className="iconCont">
            <a href="https://twitter.com/"  rel="noreferrer" target="_blank"><button className="icon"><Icon icon="akar-icons:twitter-fill" /></button></a>
            <a href="https://facebook.com" rel="noreferrer" target="_blank"><button className="icon"><Icon icon="dashicons:facebook-alt" /></button></a>
            <a href="https://instagram.com/sociallizardng" rel="noreferrer" target="_blank"><button className="icon"><Icon icon="akar-icons:instagram-fill" /></button></a>
            <a href="https://youtube.com" rel="noreferrer" target="_blank"><button className="icon"><Icon icon="akar-icons:youtube-fill" /></button></a>
        </div>
    )
}

export default SocialIcons

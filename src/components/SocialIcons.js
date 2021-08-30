import React from 'react'
import { Icon } from '@iconify/react';

const SocialIcons = () => {
    return (
        <div className="iconCont">
            <button className="icon"><Icon icon="akar-icons:twitter-fill" /></button>
            <button className="icon"><Icon icon="dashicons:facebook-alt" /></button>
            <button className="icon"><Icon icon="akar-icons:instagram-fill" /></button>
            <button className="icon"><Icon icon="akar-icons:youtube-fill" /></button>
        </div>
    )
}

export default SocialIcons

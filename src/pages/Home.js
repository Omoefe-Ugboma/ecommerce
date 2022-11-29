import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

function Home() {
    return (
        <div className='container'>
            <Announcement />
            <Navbar />
            <Slider />
        </div>
    )
}

export default Home
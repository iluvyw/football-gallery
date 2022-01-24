import React, { useEffect, useRef } from 'react'
import Video from '../assets/intro.mp4'
import './Home.scss'

export default function Home() {
    const videoRef = useRef(null)

    useEffect(() => {
        videoRef.current.play()
    },[])


    return (
        <div className="home">
            <video src={Video} ref={videoRef} muted={true}/>
        </div>
    )
}

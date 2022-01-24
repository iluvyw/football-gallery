import React, { useEffect, useRef } from 'react'
import Video from '../assets/intro.mp4'
import './Home.scss'

export default function Home() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

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

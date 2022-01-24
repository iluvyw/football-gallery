import React, { useEffect, useRef } from 'react'
import './About.scss'
import FacebookIcon from '../icons/facebook.png'
import GithubIcon from '../icons/github.png'
import InstagramIcon from '../icons/instagram.png'
import LinkedinIcon from '../icons/linkedin.png'
import gsap from 'gsap'

export default function About() {
    const iconRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()
        const iconList = [].slice.call(iconRef.current.children)
        iconList.forEach(child => {
            tl.to(child, {
                y: 0,
                opacity: 1,
                duration: 0.4
            })
        })
    })

    const goToUrl = (url) => {
        window.open(url, '_blank').focus();
    }
    
    return (
        <div className="about">
            <div className="icon-container" ref={iconRef}>
                <img src={FacebookIcon} alt="icon" onClick={() => goToUrl("https://www.facebook.com/an.phamhoang.1/")}/>
                <img src={InstagramIcon} alt="icon" onClick={() =>goToUrl("https://www.instagram.com/emoji_j.j/")}/>
                <img src={GithubIcon} alt="icon" onClick={() => goToUrl("https://github.com/iluvyw")}/>
                <img src={LinkedinIcon} alt="icon" onClick={() => goToUrl("https://www.linkedin.com/in/anphamhoang/")}/>
            </div> 
            <h1>Copyright &copy; 2022 An Pham Hoang. All Rights Reserved</h1>
        </div>
    )
}

import React, { useEffect, useRef, useState } from 'react'
import './Navbar.scss'
import Open from '../icons/open.png'
import Close from '../icons/close.png'
import gsap from 'gsap'

export default function Navbar() {
    const [isDisplay,setIsDisplay] = useState(false)
    const [isDisabled,setIsDisabled] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {
        console.log(isDisplay)
    },[isDisplay])

    const TL_DURATION = 0.2

    const animationProcess = () => {
        const menuChildren = [].slice.call(menuRef.current.children)
        setIsDisabled(true)
        if (!isDisplay){
            const tl = gsap.timeline()
            tl.to(menuRef.current,{
                height: "100vh",
                duration: TL_DURATION
            })
            menuChildren.forEach(child => {
                tl.to(child, {
                    x: 0,
                    opacity: "100%",
                    duration: TL_DURATION,
                })
            })
        }
        else {
            const tl = gsap.timeline()
            menuChildren.forEach(child => {
                tl.to(child, {
                    x: -100,
                    duration: TL_DURATION/2,
                })
                tl.to(child, {
                    opacity: "0%",
                    duration: TL_DURATION/2,
                })
            })
            tl.to(menuRef.current,{
                height: "0vh",
                duration: TL_DURATION
            })
        }
        setIsDisabled(false)
    }

    const handleMenuClick = async () => {
        animationProcess()
        setIsDisplay(!isDisplay)
    }

    return (
        <>
            <button className="bar-box" onClick={() => handleMenuClick()} disabled={isDisabled}>
                <img src={isDisplay ? Close : Open} alt="bars"/>
            </button>
            <div ref={menuRef} className="menu">
                <h1>Section 1</h1>
                <h1>Section 2</h1>
                <h1>Section 3</h1>
            </div>
        </>
    )
}

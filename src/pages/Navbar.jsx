import React, { useEffect, useRef, useState } from 'react'
import './Navbar.scss'
import Open from '../icons/open.png'
import Close from '../icons/close.png'
import gsap from 'gsap'

export default function Navbar() {
    const [isDisplay,setIsDisplay] = useState(false)
    // const [isDisabled,setIsDisabled] = useState(false)
    const menuRef = useRef(null)
    const tl = useRef(gsap.timeline({paused: true}));

    useEffect(() => {
        const menuChildren = [].slice.call(menuRef.current.children)
        tl.current.to(menuRef.current,{
            height: "100vh",
            duration: TL_DURATION
        })
        menuChildren.forEach(child => {
            tl.current.to(child, {
                x: 0,
                opacity: "100%",
                duration: TL_DURATION,
            })
        })
    },[])

    const TL_DURATION = 0.2

    const animationProcess = () => {
        if (!isDisplay){
            tl.current.play()
        }
        else {
            tl.current.reverse()
        }
    }

    const handleMenuClick = async () => {
        animationProcess()
        setIsDisplay(!isDisplay)
    }

    return (
        <>
            <button className="bar-box" onClick={() => handleMenuClick()}>
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

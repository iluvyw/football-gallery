import './Gallery.scss';
import gsap from 'gsap';
import { useEffect, useRef, React } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {imageList} from '../data/images'
gsap.registerPlugin(ScrollTrigger)

export default function Gallery() {
  const introRef = useRef(null)
  const mainRef = useRef(null)

  useEffect(() => {
    gsap.to(introRef.current.firstChild, {
      opacity: 1,
      duration: 1,
      x: 0
    })
    gsap.to(introRef.current.lastChild, {
      opacity: 1,
      duration: 1,
      x: 0
    })
    const children = [].slice.call(mainRef.current.children)
    children.forEach(child => {
      const tl = gsap.timeline({ 
        scrollTrigger: {
          trigger: child,
          start: "top 90%",
          end: "bottom 100%",
          scrub: true
        },
      })
      const grandchildren = [].slice.call(child.children)
      tl.to(grandchildren[0], {
        opacity: "100%", 
        duration: 1, 
        x: 0,
      })
      tl.to(grandchildren[1], {
        opacity: 1,
        x: "50vw",
      })
      tl.to(grandchildren[2], {
        opacity: 1,
        x: "50vw"
      })
    })
  },[])

  return (
    <>
      <div className="intro" ref={introRef}>
        <h1>Gallery</h1>
        <h2>Scroll down to view</h2>
      </div>
      <div className="main" ref={mainRef}>
        {imageList.map((image,index) => 
          <div key={index}>
            <img src={image.src} alt="mcfc"/>
            <h1>{image.title}</h1>
            <h2>{image.description}</h2>
          </div>
        )}
      </div>
    </>
  );
}

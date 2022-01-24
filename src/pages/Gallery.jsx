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
    // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    // const totalHeight = mainRef !== null ? mainRef.current.offsetHeight : 0
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".main",
    //     markers: true,
    //     scrub: true,
    //     start: `top ${parseInt(vh/2)}`,
    //     end: `${totalHeight - vh}px 0%`,
    //   }
    // })
    console.log(introRef.current)
    gsap.to(introRef.current.firstChild, {
      opacity: 1,
      duration: 2,
      x: 0
    })
    const children = [].slice.call(mainRef.current.children)
    children.forEach(child => {
      // console.log(child.firstChild)
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

    // gsap.to(boxRef.current,{x: `${vw - 50}px`, duration: 4, scrollTrigger: {
    //   trigger: mainRef.current,
    //   scrub: true,
    //   // markers: {
    //   //   indent: 200,
    //   //   fontSize: "3rem"
    //   // },
    //   start: "top top",
    //   end: `${totalHeight - vh}px 0%`
    // }})
  },[])

  return (
    <>
      <div className="intro" ref={introRef}>
        <h1>Gallery</h1>
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

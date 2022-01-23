import './Gallery.scss';
import gsap from 'gsap';
import { useEffect, useRef, React } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {imageList} from '../data/images'
gsap.registerPlugin(ScrollTrigger)

export default function Gallery() {
  // const boxRef = useRef(null)
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
    const children = [].slice.call(mainRef.current.children);
    children.forEach(child => {
      console.log(child)
      gsap.to(child, {
        opacity: "100%", 
        duration: 1, 
        x: 0,
        scrollTrigger: {
          trigger: child,
          end: "bottom center",
          scrub: true
        },
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
    <div className="main" ref={mainRef}>
      {imageList.map((image,index) => <img key={index} src={image} alt="mcfc"/>)}
    </div>
  );
}

import React from 'react'
import './hero.css'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import DesktopPCCanvas from '../../common/DesktopPC';



const Hero = () => {

    useGSAP(() => {
        gsap.to(".heroImg", {
            y: -30,
            duration: 2,        
            repeat: -1,         
            yoyo: true, 
            ease: "power1.inOut"
        })

        gsap.from(".heroTextContent h1", {
            opacity: 0,
            y: 20,
            duration: 1,  
            delay: 0.5, 
            ease: "power3.out"
        })

        gsap.from(".heroTextContent h4", {
            opacity: 0,
            y: 20,
            duration: 1,  
            delay: 1,
            ease: "power3.out"
        })

        gsap.from(".desktopModal", {
            opacity: 0,
            y: 20,
            duration: 1,  
            delay: 1,
            ease: "power3.out"
        })
    },[])

  return (
    <>
    <div className='heroRoot'>
        <div className='heroTextContent'>
            <h1>Hi I'am Siddhant Deshmukh</h1>
            <h4>Frontend Developer</h4>
        </div>
        <div className='desktopModal'>
            <DesktopPCCanvas />
        </div>
    </div>
    </>
  )
}

export default Hero
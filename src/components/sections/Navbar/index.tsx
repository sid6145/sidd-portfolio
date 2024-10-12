import React from 'react'
import "./navbar.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
    const linksArr = [
        {
            label: "About",
            id: "about"
        },
        {
            label: "Skills",
            id: "skills"
        },
        {
            label: "Projects",
            id: "projects"
        },
        {
            label: "Contact",
            id: "contact"
        },
    ]

    useGSAP(() => {
        gsap.to(".logo", {
            duration: 2, 
            repeat: -1,
            yoyoEase: true,
            color : gsap.utils.wrap(["red", "green", "black", "orange"])
        })

        gsap.from(".logo", {
            opacity: 0,
            y: -10,
            duration: 1,
            ease: "sine"
        })

        gsap.from(".navlink", {
            opacity: 0,
            x: 50,
            duration: 1,
            stagger: 0.4,
            ease: "sine"
        })
    },[])

  return (
    <div className='navbarRoot'>
        <h4 className='logo'>Siddhant</h4>

          <div className='navLinksContainer'>
              {linksArr.map((item) => (
                  <h4 key={item.id} className='navlink'>
                    {item.label}
                  </h4>
              ))}
          </div>
    </div>
  )
}

export default Navbar
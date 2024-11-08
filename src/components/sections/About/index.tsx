import React from 'react'
import "./about.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Card = ({title}) => {

    return (
        <div className='cardRoot'>
            <h4>{title}</h4>
        </div>

    )
}

const About = () => {

    useGSAP(() => {
        gsap.from(
            '.introductionHeader',
            {
                opacity: 0,
                y: 20,
                duration: 1,  
                delay: 0.5, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top 100%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        gsap.from('.introductionText',{
            opacity: 0,
            y: 20,
            duration: 1,  
            delay: 1, 
            ease: "power3.out",
            scrollTrigger: {
                trigger: '#about',
                start: 'top 100%',
                toggleActions: 'play none none reverse',
            },
        })

        gsap.from('.expertise',{
            opacity: 0,
            y: 20,
            duration: 1,  
            delay: 1.5, 
            ease: "power3.out",
            scrollTrigger: {
                trigger: '#about',
                start: 'top 100%',
                toggleActions: 'play none none reverse',
            },
        })

        gsap.fromTo('.cardRoot', 
            { y: 0 }, 
            {
              y: -20, 
              duration: 1.5,
              ease: 'power1.inOut',
              stagger: 0.9
            }
          );
    });

    return (
        <section id='about' className='aboutRoot'>
            <h4 className='introductionHeader'>Introduction</h4>
            <p className='introductionText'>As a Frontend Developer with over two years of experience, I specialize in crafting beautiful and intuitive web applications that prioritize user experience and functionality. My journey in web development has equipped me with a robust skill set that encompasses a variety of modern technologies and frameworks.
               <br /> I am adept at writing clean, scalable, and maintainable code, ensuring that the applications I develop are not only aesthetically pleasing but also efficient and easy to manage. My approach involves following best practices in software development, including modular design and responsive layouts, which allow for seamless performance across different devices and screen sizes.</p>
               <div className='expertise'>
                    <Card title={"FrontEnd Developer"} />
                    {/* <Card title={"BackEnd Developer"} /> */}
                    <Card title={"React Native Developer"} />
               </div>
        </section>
    )
}

export default About
import React, { useEffect } from 'react'
import pdf from '../pdf/Resume_2023.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'
import { useRef } from 'react'

export default function Home() {
    const typedRef = useRef(null);
    useEffect(() => {
        const options = {
            strings: ["Welcome to my profile",
                "My name is Ashtik prajapati",
                "I'm full stack developer",
                "Backend developer (Java)"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        };
        const typed = new Typed(typedRef.current, options);
        return () => {
            typed.destroy();
        }
    }, [])

    return (
        <>
            <div className="container home" id="home">
                <div className="left"
                    data-aos="fade-up-right"
                    data-aos-duration="1000">

                    <h1 ref={typedRef}></h1>

                    <a href={pdf} download="Ashtik_SoftwareDev_resume.pdf" className="btn my-3" style={{ border: "3px solid #D9B08c", background: "#ffcb9a" }}>Download Resume</a>
                </div>

                <div className="right"
                    data-aos="fade-up-left"
                    data-aos-duration="1000">

                    <div className="img">
                        <img src={`/assets/${hero.imgSrc}`} alt="hero" />
                    </div>

                </div>
            </div >
        </>
    )
}

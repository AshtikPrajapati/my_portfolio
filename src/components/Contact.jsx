import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
    return (
        <>
            <div className="container contact" id="contact">
                <h1>CONTACT ME</h1>
                <div className="contact-icon"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                >
                    <a href="https://www.instagram.com/__ashhu__06/" target="_blank" className="items">
                        <FaInstagram className="icons" />
                    </a>
                    <a href="https://www.linkedin.com/in/ashtik-prajapati/" target="_blank" className="items">
                        <CiLinkedin className="icons" />
                    </a>
                    <a href="https://github.com/AshtikPrajapati" target="_blank" className="items">
                        <FaGithub className="icons" />
                    </a>
                    <a href="mailto:ashtikbhilai06@gmail.com" target="_blank" className="items">
                        <IoIosMail className="icons" />
                    </a>
                </div>
            </div>
        </>
    )
}

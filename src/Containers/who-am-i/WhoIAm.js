import React, { useState, useEffect } from 'react'
import './WhoIAm.css'

import { useInView } from "react-intersection-observer"
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedinIn } from 'react-icons/fa'

import avatar from './avatar_hd_small.png'
// import cv from './New_CV_Mike_Eng_05_2023.pdf'

export default function WhoIAm() {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    const [cl1, setClass1] = useState("out_of_screen");
    const [cl2, setClass2] = useState("out_of_screen");
    const [cl3, setClass3] = useState("out_of_screen");

    useEffect(() => {
        console.log(inView);
        if (inView) {
            setClass1("in_screen_1");
            setClass2("in_screen_2");
            setClass3("in_screen_3");
        }
        if (!inView) {
            setClass1("out_of_screen");
            setClass2("out_of_screen");
            setClass3("out_of_screen");
        }
    }, [inView])

    // useEffect(() => {
    //     console.log(inView2);
    //     if (inView2) {
    //         setClass("slide-right-later");
    //     }
    //     if (!inView2) {
    //         setClass();
    //     }
    // }, [inView2]) 

    return (
        <div className='WhoIAm'>
            <div className="avatar2">
                <img src={avatar} alt='avatar2'></img>
            </div>
            <div ref={ref} className={`whoIamdiv`}>
                <div className={`${cl1}`}>
                    <h1>Hello There &#128075;&#127996;</h1>
                </div>
                <div className={`${cl2}`}>
                    <h2>I'm <span className="my_name">Michael Dessena</span></h2>
                </div>
                <div className={`${cl3}`}>
                    <p >Nuclear and Subnuclear Physicist, Software Developer & Data Scientist</p>
                    <div className='icon__div'>
                        <a href="mailto:michael.dessena97@gmail.com" target="_blank" rel="noreferrer">
                            <button className='icon__button' title='Email'>
                                <FaEnvelope color='#E2E2E2' />
                            </button>
                        </a>
                        <a href="cv/curriculum.pdf" target="_blank" rel="noreferrer">
                            <button className='icon__button' title='Curriculum'>
                                <FaFileAlt color='#E2E2E2' />
                            </button>
                        </a>
                        <a href='https://www.linkedin.com/in/michael-dessena-a07a431ba/' target="_blank" rel="noreferrer">
                            <button className='icon__button' title='LinkedIn'>
                                <FaLinkedinIn color='#E2E2E2' />
                            </button>
                        </a>
                        <a href='https://github.com/michaeldessena' target="_blank" rel="noreferrer">
                            <button className='icon__button' title='GitHub'>
                                <FaGithub color='#E2E2E2' />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="avatar">
                <img src={avatar} alt='avatar'></img>
            </div>
        </div>
    );
}
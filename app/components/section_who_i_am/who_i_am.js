import React, {useState, useRef} from 'react'
import styles from './who_i_am.css'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';

export default function WhoIAm () {
    
    const {ref, inView} = useInView({
        threshold: 0.5,
    }); // inView = False: if ref not in view True: if it's in view

    const animationTitle = useAnimation();
    const animationPar = useAnimation();
    const animationHelloDear = useAnimation();

    useEffect(() => {
        console.log(inView)
        if (inView) {
            animationTitle.start({
                //x: "calc(100vw - 50%)"
                x: 0,
                transition: {
                    type: "spring", duration: 1.2, bounce: 0.3,
                }
            });
        }
        if (!inView) {
            animationTitle.start({
                x: "-100vw",
            })
        }
        // Hello dear
        if (inView) {
            animationHelloDear.start({
                x: 0,
                transition: {
                    type: "spring", duration: 1.2, bounce: 0.2, delay: 0.5,
                }
            });
        }
        if (!inView) {
            animationHelloDear.start({
                x: '-100vw',
            })
        }
        // PAR
        if (inView) {
            animationPar.start({
                x: 0,
                transition: {
                    type: "spring", duration: 1.2, bounce: 0.2, delay: 1,
                }
            });
        }
        if (!inView) {
            animationPar.start({
                x: '-100vw',
            })
        }
    }, [inView]); // it apply only when inView state change

    return (
            <>
            <div
                ref={ref}
                className={`whoIamdiv`} 
                >
                	<motion.div 
                        animate={animationTitle}
                    >
                            <h1>Hello There 👋</h1>
                    </motion.div>
                    <motion.div animate={animationHelloDear}>
                            <h2>I'm Michael Dessena</h2>
                    </motion.div>
                    <motion.div 
                        animate={animationPar}
                    >
                        <p >Nuclear and Subnuclear Physicist & Data Scientist</p> 
                        {/* <p>with a strong background in data analysis and computer science.
                        I'm graduated from University of Turin with a Master Thesis on the parameters tuning for Monte Carlo simulation of soft QCD events using a neural-network-based approach.
                        <br />
                        I'm currently working as a software developer in Luxoft company (DXC group). Since you are here maybe you want to know more about me: I really interesting in a lot of scientific fields in particular

                        the ones that give me the opportunity of applying my strong propension to problem solving. TODO rileggere
                        Keep scrolling to know me better ;-) */}
                    {/* </p> */}
                    <div className='icon__div'>
                    <button className='icon__button'>
                        <FaEnvelope/>
                    </button>
                    <button className='icon__button'>
                        <FaFileAlt/>
                    </button>
                    <button className='icon__button'>
                        <FaLinkedinIn/>
                    </button>
                    <button className='icon__button'>
                        <FaGithub/>
                    </button>
                    </div>
                    </motion.div>
            </div>
            <div className = "avatar">
                avatar
            </div>
            </>
        );
    }
// See: https://nextjs.org/docs/getting-started/react-essentials

import React, { useEffect } from 'react';

import styles from './name.css'
import { motion, useAnimate, usePresence } from 'framer-motion';

export default function BigName() {

    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()

    useEffect(() => {
        if (isPresent) {
          const enterAnimation = async () => {
            await animate({ opacity: 1 })
            // await animate("li", { opacity: 1, x: 0 })
          }
          enterAnimation()
   
        } else {
          const exitAnimation = async () => {
            // await animate("li", { opacity: 0, x: -100 })
            await animate({ opacity: 0 })
            safeToRemove()
          }
          
          exitAnimation()
        }
     }, [isPresent])

    //useEffect(() => {} [])

    return (
        <div
        ref = {scope}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 1.6, ease: "easeOut" }}
        >
            <p className={`BigName`}
            >
                Michael Dessena
            </p>
        </div>
    );
}

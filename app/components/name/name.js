'use client';
// See: https://nextjs.org/docs/getting-started/react-essentials

import React from 'react';

import styles from './name.css'

import JumpingLetter from './jumpingLetter.js'


export default function Name(props) {
    return (
        <p className="name" style={props.style}><JumpingLetter text={"Michael"}/> <JumpingLetter text={"Dessena"}/></p>
      );
  }



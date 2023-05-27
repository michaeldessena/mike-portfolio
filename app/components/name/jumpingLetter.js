'use client';
// See: https://nextjs.org/docs/getting-started/react-essentials

import React from 'react';

import styles from './name.css'

export default function JumpingLetter ({text}) {
  
    var input = text.split('');
    const letters = input.map((letter, index) => 
    <span 
    key={index.toString()} 
    className="nameJumping"
    >{letter}
    </span>);
    return (
        letters
      );
  }
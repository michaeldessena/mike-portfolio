import React from 'react'
import { ReactDOM } from 'react'

import Image from 'next/image'

import './assets/css/fonts.css'

import collision from 'app/assets/images/collision.jpg' 

import styles from './page.module.css'

import Name from './components/name/name.js'

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}


export default function MyApp() {
  return (
    <main className={styles.main}>
      {/* <Image src={collision} alt="Collision" className='collision'/> */}
      <Name />
    </main>
  );
}
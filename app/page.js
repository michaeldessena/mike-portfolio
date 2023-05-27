'use client';
import React from 'react'
import { ReactDOM } from 'react'

import './assets/css/fonts.css'

import styles from './page.module.css'

import NavBar from './components/navbar/navbar';

import WhoIAm from './components/section_who_i_am/who_i_am.js'


export default class MyApp extends React.Component {
  render() {
    return (
      <main className={styles.main}>
        <NavBar />
        <section className={styles.sectionScrollable} id="section1">
          <WhoIAm />
        </section>
        <section className={styles.sectionScrollable} id="section2">
          Education
        </section>
        <section className={styles.sectionScrollable} id="section3">
          Work
        </section>
        <section className={styles.sectionScrollable} id="section4">
          Skills
        </section>
      </main>
    );
  }
}


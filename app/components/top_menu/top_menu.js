'use client';
// See: https://nextjs.org/docs/getting-started/react-essentials

import React from 'react';

/* Import style */
import styles from './top_menu.css'

/* Import costum component*/
import Name from '../name/name.js'

// export default function TopMenu(props) {

//     return (
//       <header props = {props.style}>
//         <Name style={{}}/>
//       </header>
//       );
// }

export default class TopMenu extends React.Component {
    state = { isHide: true };

    hideBar = () => {
        const threshold_lower = 100;
        const threshold_upper = 400;
        const { isHide } = this.state

        window.scrollY < threshold_lower ? //|| window.scrollY > threshold_upper ?
        !isHide && this.setState({ isHide: true })
        :
        isHide && this.setState({ isHide: false });

        this.prev = window.scrollY;
    }

    componentDidMount(){
        window.addEventListener('scroll', this.hideBar);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.hideBar);
    }

    render(){
        const classHide = this.state.isHide ? 'hide' : '';
        return (<header className={`topbar ${classHide}`}>
        <Name style={{}}/>
    </header>);
    }
}

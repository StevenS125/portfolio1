import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from "./Contact.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';



class Contact extends Component {
    constructor(props) {
            super(props);
            this.state = {}
    }


render() {
    return (
        <div>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} animatePreScroll={false}>
            <div className={styles.contactTitle}>CONTACT</div>
          </ScrollAnimation>

                    </div>
    )
}}

export default Contact
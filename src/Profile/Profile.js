import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from "./Profile.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';


class Profile extends Component {
    constructor(props) {
            super(props);
            this.state = {}
    }


render() {
    return (
<div>
        <div className={styles.profileContainer}>
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} animatePreScroll={false}>
                <div className={styles.profileLeft}>
                    <img className={styles.profImg} src="./profilepic.jpg" alt="Steve Snyder"></img>
                        <div className={styles.profHead}>Who Am I?</div>
                        <div className={styles.profDesc}>I have anchor arms</div>
                        <div className={styles.profDesc}>I have anchor arms</div>
                        <div className={styles.profDesc}>I have anchor arms</div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true} animatePreScroll={false}>
        <div className={styles.profRight}>
        <div className={styles.bar + " " + styles.bar1}>60%</div>
        <div className={styles.bar}>60%</div>
        <div className={styles.bar}>60%</div>
        <div className={styles.bar}>60%</div>
        <div className={styles.bar}>60%</div>
        <div className={styles.bar}>60%</div>
        <div className={styles.bar}>60%</div>
        <div className={styles.bar}>60%</div>
        <div className={styles.bar}>60%</div>
        <div className={styles.bar}>60%</div>
        </div>
        </ScrollAnimation>
        </div>
</div>
    )
}
}

export default Profile
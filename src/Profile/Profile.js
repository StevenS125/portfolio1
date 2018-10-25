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
                        <div className={styles.profDesc}>I am a Front End Developer based out of Charlotte, NC</div>
                        <div className={styles.profDesc}>with a drive to create UI effects, animations</div>
                        <div className={styles.profDesc}>and applications that reach out and get your users exicted!</div>
                        <div className={styles.profDesc}>Lets make something truly exceptional</div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true} animatePreScroll={false}>
        <div className={styles.profRight}>
        <div className={styles.bar + " " + styles.bar1}><span className={styles.barText}>85%</span><span className={styles.barName}>JavaScript</span></div>
        <div className={styles.bar + " " + styles.bar2}><span className={styles.barText}>90%</span><span className={styles.barName}>CSS</span></div>
        <div className={styles.bar + " " + styles.bar3}><span className={styles.barText}>90%</span><span className={styles.barName}>HTML</span></div>
        <div className={styles.bar + " " + styles.bar4}><span className={styles.barText}>85%</span><span className={styles.barName}>React</span></div>
        <div className={styles.bar + " " + styles.bar5}><span className={styles.barText}>80%</span><span className={styles.barName}>Node.js</span></div>
        <div className={styles.bar + " " + styles.bar6}><span className={styles.barText}>70%</span><span className={styles.barName}>UI/UX</span></div>
        <div className={styles.bar + " " + styles.bar7}><span className={styles.barText}>60%</span><span className={styles.barName}>Angular</span></div>
        <div className={styles.bar + " " + styles.bar8}><span className={styles.barText}>75%</span><span className={styles.barName}>SASS</span></div>
        <div className={styles.bar + " " + styles.bar9}><span className={styles.barText}>85%</span><span className={styles.barName}>Bootstrap</span></div>
        <div className={styles.bar + " " + styles.bar10}><span className={styles.barText}>60%</span><span className={styles.barName}>SQL/MySQL</span></div>
        </div>
        </ScrollAnimation>
        </div>
</div>
    )
}
}

export default Profile
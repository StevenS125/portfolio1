import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from "./Landing.module.scss";
import Typing from 'react-typing-animation';
import {Animated} from "react-animated-css";
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Landing extends Component {
    constructor(props) {
            super(props);
            this.state = {}
    }


render() {
    return (
             <div>
                 <div className={styles.container} id="#">
                 <div>
                     <div className={styles.ball}></div>
                     <div className={styles.ball2}></div>
                <div className={styles.heroTop}>
                   <Typing>
                <div>Hello, I'm <span className={styles.name}>Steven Snyder</span></div>
                <div>I'm a Full-Stack Web Developer</div>
                </Typing>
                <div>
                <Animated animationIn="fadeIn" animationInDelay={2000} isVisible={true} >
                <button className={styles.heroButton}>View my work <span className={styles.arrow}><FontAwesomeIcon icon={faArrowAltCircleRight} size="1x" /></span></button>
                </Animated>
                </div>
                </div>
                </div>
                </div>
                </div>
          )
          }
        }

        export default Landing
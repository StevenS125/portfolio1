import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from "./About.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare} from '@fortawesome/free-brands-svg-icons';


class About extends Component {
    constructor(props) {
            super(props);
            this.state = {}
    }


render() {
    return (
        <div>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} animatePreScroll={false}>
            <div className={styles.aboutTitle}>ABOUT</div>
          </ScrollAnimation>


        <div className={styles.aboutContainer}>

            <div className={styles.feature}>
            <ScrollAnimation animateIn="flipInX" animateOnce={true} delay={200} animatePreScroll={false}>
              <FontAwesomeIcon icon="code" size="5x" color="#bf0154" />
      <h4>Responsive</h4>
        <p>
       I work to provide solutions that look clean and work on all devices.
        </p>
        </ScrollAnimation>
            </div>

            <div className={styles.feature}>
            <ScrollAnimation animateIn="flipInX" animateOnce={true} delay={400} animatePreScroll={false}>
            <FontAwesomeIcon icon="user-check" size="5x" color="#bf0154" />
            
                <h4>Intuitive</h4>
                <p>
                My mission is for every page to be as easy to use and interactive as possible. 
                </p>
                </ScrollAnimation>
                </div>

                      <div className={styles.feature}>
                      <ScrollAnimation animateIn="flipInX" animateOnce={true} delay={600} animatePreScroll={false}>
                      <FontAwesomeIcon icon={faJsSquare} size="5x" color="#bf0154" /> &nbsp;
      
              <h4>Dynamic</h4>
              <p>
              I love making web pages come to life with the latest animations and eye catching designs. 
              </p>
        </ScrollAnimation>
        </div>
        <div className={styles.feature}>
        <ScrollAnimation animateIn="flipInX" animateOnce={true} delay={800} animatePreScroll={false}>
         
          <FontAwesomeIcon icon="tachometer-alt" size="5x" color="#bf0154"/>
              <h4>Fast</h4>
                 <p>In our fast paced world I work to provide solutions that don't keep your users waiting.</p>
                </ScrollAnimation>
                </div>
                  </div>
                    </div>
    )
}}

export default About
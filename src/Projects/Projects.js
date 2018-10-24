import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from "./Projects.module.scss";
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';


class Projects extends Component {
    constructor(props) {
            super(props);
            this.state = {
                boxOpen: false
            }
    }


// creates feature box div 

    openBox = () => {
        console.log("cheerios");
        return (
          <Animated animationIn="fadeIn" animationInDelay={0} isVisible={true}>
                <div className={styles.featureBox}>
                     Hello I am the feature box
                </div>
          </Animated>
               );
                    }

    //   sets state to open the featured profile box

      toggleBox = () => {
          console.log("hello");
          this.setState({
            boxOpen: true
          })
      }

//  sets state to close the currently open box

      closeBox = () => {
        this.setState({
          boxOpen: false
        })
    }



render() {
    return (
<div>
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} animatePreScroll={false} >
                <div className={styles.projHead}>Projects</div>
            </ScrollAnimation>
            { this.state.boxOpen ? this.openBox() : false }
                <div className={styles.projContainer}>
                <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} animatePreScroll={false} delay={200}>
                        <div className={styles.projBox}>
                            <img className={styles.projImg} src="./profilepic.jpg" alt="Steve Snyder"></img>
                                <div className={styles.middle}>
                                    <button className={styles.btnOverlay} onClick={this.toggleBox}>Click Me</button>
                                </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} animatePreScroll={false} delay={400}>
                        <div className={styles.projBox}>
                            <img className={styles.projImg} src="./profilepic.jpg" alt="Steve Snyder"></img>
                                <div className={styles.middle}>
                                    <button className={styles.btnOverlay}>Click Me</button>
                                </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} animatePreScroll={false} delay={300}>
                        <div className={styles.projBox}>
                             <img className={styles.projImg} src="./profilepic.jpg" alt="Steve Snyder"></img>
                                <div className={styles.middle}>
                                    <button className={styles.btnOverlay} onClick={this.toggleBox}>Click Me</button>
                                </div>
                        </div>
                        </ScrollAnimation>
                </div>
</div>
    )
}
}

export default Projects
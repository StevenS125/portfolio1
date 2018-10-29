import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from "./Projects.module.scss";
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';


class Projects extends Component {
    constructor(props) {
            super(props);
            this.state = {
                boxOpen: false,
                hide: styles.projBox,
                hideProj: styles.projHead


            }
    }


// creates feature box div 

    openBox = () => {
 
        console.log("cheerios");
        return (
          <Animated animationIn="fadeIn" animationInDelay={0} isVisible={true}>
                <div className={styles.featureBox} onClick={this.toggleBox} >
                <div className={styles.boxDesc}>
                hey man I am the description
                <button className={styles.btnOverlay} onClick={this.toggleBox}>Click Me</button>
                </div>
                     
                </div>
          </Animated>
               ); 
                    }

    //   sets state to open/close the featured profile box

      toggleBox = e => {
          console.log(e.currentTarget);
        if (!this.state.boxOpen) {
          this.setState({
            boxOpen: true,
            hide: styles.hidden,
            hideProj: styles.hidden
          })
        } else {
            this.setState({
                boxOpen: false,
                hide: styles.projBox,
                hideProj: styles.projHead

            })
        }
      }



render() {
    return (
<div>
    <div className={styles.projOuter}>
{ this.state.boxOpen ? this.openBox() : false }
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} animatePreScroll={false} >
                <div className={this.state.hideProj}>Projects</div>
            </ScrollAnimation>
                <div className={styles.projContainer}>
                <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} animatePreScroll={false} delay={0}>
                        <div className={this.state.hide}>
                                <img className={styles.projImg} src="./Ptech.png" alt="Steve Snyder"></img>
                                <div className={styles.middle}>
                                <div className={styles.middleText}>PIRANHA TECH</div>
                                    <button className={styles.btnOverlay} onClick={this.toggleBox}>Click Me</button>
                                </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} animatePreScroll={false} delay={200}>
                        <div className={this.state.hide}>
                                <img className={styles.projImg} src="./STT.png" alt="Steve Snyder"></img>
                                <div className={styles.middle}>
                                    <button className={styles.btnOverlay} onClick={this.toggleBox}>Click Me</button>
                                </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} animatePreScroll={false} delay={100}>
                        <div className={this.state.hide}>
                                <img className={styles.projImg} src="./Contact.png" alt="Steve Snyder"></img>
                                <div className={styles.middle}>
                                    <button className={styles.btnOverlay} onClick={this.toggleBox}>Click Me</button>
                                </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} animatePreScroll={false} delay={100}>
                        <div className={this.state.hide}>
                                <img className={styles.projImg} src="./forex.png" alt="Steve Snyder"></img>
                                <div className={styles.middle}>
                                    <button className={styles.btnOverlay} onClick={this.toggleBox}>Click Me</button>
                                </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} animatePreScroll={false} delay={300}>
                        <div className={this.state.hide}>
                                <img className={styles.projImg} src="./College.png" alt="Steve Snyder"></img>
                                <div className={styles.middle}>
                                    <button className={styles.btnOverlay} onClick={this.toggleBox}>Click Me</button>
                                </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} animatePreScroll={false} delay={300}>
                        <div className={this.state.hide}>
                                <img className={styles.projImg} src="./KKustoms.png" alt="Steve Snyder"></img>
                                <div className={styles.middle}>
                                    <button className={styles.btnOverlay} onClick={this.toggleBox}>Click Me</button>
                                </div>
                        </div>
                        </ScrollAnimation>
                </div>
    </div>
</div>
    )
}
}

export default Projects
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
                hideProj: styles.projHead,
                projImg: "",
                projDesc: "",
                projTitle: "",
                altTitle: ""
            }
    }


// creates feature box div 
    openBox = () => {
        return (
          <Animated animationIn="fadeIn" animationInDelay={0} isVisible={true}>
                <div className={styles.featureBox}>
                <div className={styles.boxDesc}>
                <div className={styles.projTop}>{this.state.projTitle}</div>
                <img src={this.state.projImg} className={styles.dispImg} alt={this.state.altTitle}></img>
                <div className={styles.projDescript}>{this.state.projDesc}</div>
                <div className={styles.btnBox}>
                <div className={styles.projBottom}><button className={styles.projBtn}>View Site</button></div> 
                <div className={styles.projBottom}><button className={styles.projBtn}>Github</button></div>
                </div>
                </div>
                     
                </div>
          </Animated>
               ); 
                    }

    //   sets state to open/close the featured profile box

      toggleBox = () => {
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


    handlePtech = () => {
          this.setState({
            projImg: "./PTechDisplay.png",
            projDesc: "Piranha Technologies was built with React for our FrontEnd and runs with" 
            + "a Node engine. The basis for this project was a marketing site to attract external"
            + "businesses and show the services Piranha Technologies offers",
            projTitle: "Piranha Technologies",
            altTitle: "Piranha Technologies Image"
          })
      }


    handleSTT = () => {
        this.setState({
          projImg: "./STTDisplay.png",
          projDesc: "Straight Talk Today is built with a React Front End and a Node/Python Backend. This sites purpose was to promote Kevin Holmes Motivational Speaking Brand and announce his upcoming events to the world",
          projTitle: "Straight Talk Today",
          altTitle: "Straight Talk Today Display Image"
        })
    }

    handleCM = () => {
        this.setState({
          projImg: "./contactDisplay.png",
          projDesc: "This CRM application was built with the MEAN Stack also know as MongoDB, Express and Node to manage our backened and Angular for the Front End Architecture. The purpose of this application is a Contact Management system that could be implemented in many devices",
          projTitle: "Contact Manager",
          altTitle: "Contact Manager Display Image"
        })
    }

    handleForex = () => {
        this.setState({
          projImg: "./forexDisplay.png",
          projDesc: "This application was made to handle currency trades to measure exchange rates and profit/loss overtime to keep track of accounts for foreign currency trading. It is built with MongoDB, Express, React and Node.JS",
          projTitle: "Foreign Exchange Trading App",
          altTitle: "Foreign Exchange Application Display"
        })
    }

    handleCollege = () => {
        this.setState({
          projImg: "./PTechDisplay.png",
          projDesc: "Selecting a college can be difficult, with this application the goal was to provide your preferences and search our database based on ranking to pick the perfect school. It is built with Express, JavaScript and SQL",
          projTitle: "College Selection Application",
          altTitle: "College Selection Application Display Image"
        })
    }

    handleKK = () => {
        this.setState({
          projImg: "./KKDisplay.png",
          projDesc: "Kim's Kustom's is a full service furniture repair business that needed help with a marketing site. It was created with a create-react-app format with a Node backend",
          projTitle: "Kim's Kustoms",
          altTitle: "Kim's Customs Display Image"
        })
    }



render() {
    return (
<div>
    <div className={styles.projOuter}>
 { this.state.boxOpen ? this.openBox() : false }
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} animatePreScroll={false} >
                <div className={this.state.hideProj} id="gotanid">Projects</div>
            </ScrollAnimation>
                <div className={styles.projContainer}>
                <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} animatePreScroll={false} delay={0}>
                        <div className={this.state.hide}>
                                <img className={styles.projImg} src="./Ptech.png" alt="Steve Snyder"></img>
                                <div className={styles.middle}>
                                <div className={styles.middleText}>PIRANHA TECH</div>
                                    <button className={styles.btnOverlay} 
                                    // Opens display box and updates state for current display box
                                                     onClick={() => {
                                                     this.toggleBox()
                                                     this.handlePtech()}}>
                                                     Click Me</button>
                                </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} animatePreScroll={false} delay={200}>
                        <div className={this.state.hide}>
                                <img className={styles.projImg} src="./STT.png" alt="Steve Snyder"></img>
                                <div className={styles.middle}>
                                <div className={styles.middleText}>Straight Talk Today</div>
                                <button className={styles.btnOverlay} 
                                    // Opens display box and updates state for current display box
                                                     onClick={() => {
                                                     this.toggleBox()
                                                     this.handleSTT()}}>
                                                     Click Me</button>
                                
                                </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} animatePreScroll={false} delay={100}>
                        <div className={this.state.hide}>
                                <img className={styles.projImg} src="./Contact.png" alt="Steve Snyder"></img>
                                <div className={styles.middle}>
                                <div className={styles.middleText}>Contact Manager</div>
                                    <button className={styles.btnOverlay} 
                                    // Opens display box and updates state for current display box
                                                     onClick={() => {
                                                     this.toggleBox()
                                                     this.handleCM()}}>
                                                     Click Me</button>
                                </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} animatePreScroll={false} delay={100}>
                        <div className={this.state.hide}>
                                <img className={styles.projImg} src="./forex.png" alt="Steve Snyder"></img>
                                <div className={styles.middle}>
                                <div className={styles.middleText}>Forex Trading App</div>
                                <button className={styles.btnOverlay} 
                                    // Opens display box and updates state for current display box
                                                     onClick={() => {
                                                     this.toggleBox()
                                                     this.handleForex()}}>
                                                     Click Me</button>

                                </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} animatePreScroll={false} delay={300}>
                        <div className={this.state.hide}>
                                <img className={styles.projImg} src="./College.png" alt="Steve Snyder"></img>
                                <div className={styles.middle}>
                                <div className={styles.middleText}>College Selection</div>
                                <button className={styles.btnOverlay} 
                                    // Opens display box and updates state for current display box
                                                     onClick={() => {
                                                     this.toggleBox()
                                                     this.handleCollege()}}>
                                                     Click Me</button>
                                </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true} animatePreScroll={false} delay={300}>
                        <div className={this.state.hide}>
                                <img className={styles.projImg} src="./KKustoms.png" alt="Steve Snyder"></img>
                                <div className={styles.middle}>
                                <div className={styles.middleText}>KIM'S KUSTOMS</div>
                                <button className={styles.btnOverlay} 
                                    // Opens display box and updates state for current display box
                                                     onClick={() => {
                                                     this.toggleBox()
                                                     this.handleKK()}}>
                                                     Click Me</button>
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
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from "./About.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';


class About extends Component {
    constructor(props) {
            super(props);
            this.state = {}
    }


render() {
    return (
        <div>
              <ScrollAnimation animateIn="fadeIn" animateOnce={true} animatePreScroll={false}></ScrollAnimation>
            <div className={styles.aboutTitle}>About</div>
          <div>
            <div className={styles.servicesHead}>
            Some of our Services
            </div>
            <div className={styles.feature}>
              <FontAwesomeIcon icon="code" size="5x" color="green" />
              
      <h4>Web Design</h4>
        <p>
        We sketch and wireframe interfaces focusing on content structure, intuitive UI patterns and simple interactions. We are minimalistic and truly believe that less is more.
        </p>
            </div>

        <div className={styles.feature}>
          <FontAwesomeIcon icon="palette" size="5x" color="green" />
            
            <h4>Logo Design</h4>
              <p>
                Need a new or updated logo? You've come to the right place with thousands of logos to choose from and have us customize to fit your business brand.
              </p>
        </div>

                        <div className={styles.feature}>
              <FontAwesomeIcon icon={faTwitter} size="5x" color="green" /> &nbsp;
              <FontAwesomeIcon icon={faFacebook} size="5x" color="green" /> &nbsp;
              <FontAwesomeIcon icon={faLinkedin} size="5x" color="green" />
      
      <h4>Social Media Management</h4>
        <p>
Let us help you design your Social Media Pages, Marketing Campaigns or just plain setting up your social media to reach your desired demographic of clients. 
        </p>
            </div>
            <div className={styles.feature}>
          <FontAwesomeIcon icon="laptop" size="5x" color="green"/>
           
              <h4>Client Support</h4>
                 <p>Errors on your site or Application? We have exeprtise in debugging software and helping to get you up and running again quickly </p>
                
                     </div>
                 </div>
                </ScrollAnimation>
        </div>
    )

}}

export default About
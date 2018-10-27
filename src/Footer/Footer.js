import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
// import ScrollAnimation from 'react-animate-on-scroll';


class Footer extends Component {
    constructor(props) {
            super(props);
            this.state = {}
    }


render() {
    return (
<div>
    <div className={styles.footContainer}>
<div className={styles.socialLinks}>
<div><a className={styles.icons} href="https://facebook.com/piranhatechnologies" target="blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></div>
<div><a className={styles.icons} href="https://twitter.com/thepiranhatech" target="blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a></div>  
<div><a className={styles.icons} href="https://linkedin.com/company/piranha-tech/" target="blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></div> 
</div>
<div className={styles.footName}>Steve Snyder &copy; 2018</div>
</div>
</div>
    )
}
}

export default Footer
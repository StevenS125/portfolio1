import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from "./Footer.module.scss";
// import ScrollAnimation from 'react-animate-on-scroll';


class Footer extends Component {
    constructor(props) {
            super(props);
            this.state = {}
    }


render() {
    return (
<div>

<a className={styles.icons} href="https://facebook.com/piranhatechnologies" target="blank"><FontAwesomeIcon icon={faFacebook} size="xs" /></a>
<a className={styles.icons} href="https://twitter.com/thepiranhatech" target="blank"><FontAwesomeIcon icon={faTwitter} size="xs" /></a>  
<a className={styles.icons} href="https://linkedin.com/company/piranha-tech/" target="blank"><FontAwesomeIcon icon={faLinkedin} size="xs" /></a> 
</div>
    )
}
}

export default Footer
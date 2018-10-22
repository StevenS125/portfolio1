import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Nav.module.scss";
import {Animated} from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
      


class Nav extends Component {
        constructor(props) {
                super(props);
                this.state = {
                  listopen: false,
                  bar1: styles.bar1,
                  bar2: styles.bar2,
                  bar3: styles.bar3
                };
}




openList = () => {
  return (
    <Animated animationIn="fadeInDown" animationInDelay={0} isVisible={true}>
          <div className={styles.mobileDrop}>
                <div><Link onClick={ this.closeList } className={styles.linksMobile} to="/">Home</Link></div>
                <div><Link onClick={ this.closeList } className={styles.linksMobile} to="/Services">Services</Link></div>    
                <div><Link onClick={ this.closeList } className={styles.linksMobile} to="/Contact">Contact Us</Link></div>
    </div>
    </Animated>
  );
}

closeList = () => {
  this.setState({
    listopen: false,
    bar1: styles.bar1,
    bar2: styles.bar2,
    bar3: styles.bar3
});
}




toggleList = () => {
if (!this.state.listopen) {
  this.setState({
    listopen: true,
    bar1: styles.barChange1,
    bar2: styles.barChange2,
    bar3: styles.barChange3
  });
} else {
  this.setState({
    listopen: false,
    bar1: styles.bar1,
    bar2: styles.bar2,
    bar3: styles.bar3
  })
}
  }



render() {



        return (
          <div>
              <div className={styles.navbar}>
              <div className={styles.navTitle}>
                     <div className={styles.navbarTitle}>Steve Snyder</div>
                        </div>
                        <div className={styles.navBarLinks}>
                          <div className={styles.linkContainer}>
                         <Link className={styles.links} to="/">Home</Link>
                         <Link className={styles.links} to="/Services">Services</Link>   
                         <Link className={styles.links} to="/Contact">Contact Us</Link>
                            <a className={styles.icons} href="https://facebook.com/piranhatechnologies" target="blank"><FontAwesomeIcon icon={faFacebook} size="xs" /></a>
                            <a className={styles.icons} href="https://twitter.com/thepiranhatech" target="blank"><FontAwesomeIcon icon={faTwitter} size="xs" /></a>  
                            <a className={styles.icons} href="https://linkedin.com/company/piranha-tech/" target="blank"><FontAwesomeIcon icon={faLinkedin} size="xs" /></a>  
                          </div>
                          
                         </div>
          </div>
          <div className={styles.navbarMobile}>
                         <div className={styles.burger} onClick={this.toggleList}>
                                <div className={this.state.bar1}></div>
                                <div className={this.state.bar2}></div>
                                <div className={this.state.bar3}></div>
                              </div>
                          <div className={styles.mobileHead}>Piranha Technologies</div>
                        
                      </div>        
          <div className={styles.mobileRow}>
      { this.state.listopen ? this.openList() : false }
              </div>
        </div>
        
          

);
}
}
export default Nav
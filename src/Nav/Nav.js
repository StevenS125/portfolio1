import React, { Component } from 'react';
import styles from "./Nav.module.scss";
import ScrollIntoView from 'react-scroll-into-view'
      


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
<div></div>
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
              <div className={styles.navbar} id="homeid">
              <div className={styleMedia.linkBox}>
              <ScrollIntoView selector="#homeid" alignToTop={true}>
              <div className={styles.link}>Home</div>
                </ScrollIntoView>
                <ScrollIntoView selector="#aboutId" alignToTop={true}>
                <div className={styles.link}>About</div>
                </ScrollIntoView>
                <ScrollIntoView selector="#gotanid" alignToTop={true}>
                <div className={styles.link}>Portfolio</div>
                </ScrollIntoView>
                <ScrollIntoView selector="#contactId" alignToTop={true}>
               <div className={styles.link}>Contact</div>
                </ScrollIntoView>
</div>

          </div>
          {/* <div className={styles.navbarMobile}>
                         <div className={styles.burger} onClick={this.toggleList}>
                                <div className={this.state.bar1}></div>
                                <div className={this.state.bar2}></div>
                                <div className={this.state.bar3}></div>
                              </div>
                          <div className={styles.mobileHead}>Piranha Technologies</div>
                        
                      </div>         */}
          <div className={styles.mobileRow}>
      { this.state.listopen ? this.openList() : false }
              </div>
        </div>
);
}
}
export default Nav
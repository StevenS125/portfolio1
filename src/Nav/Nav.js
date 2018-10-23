import React, { Component } from 'react';
import styles from "./Nav.module.scss";
      


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
              <div className={styles.navbar}>
              <div className={styleMedia.linkBox}>
<div className={styles.link}><a href="hello">Home</a></div>
<div className={styles.link}><a href="buy">About</a></div>
<div className={styles.link}><a href="eltonjohn">Portfolio</a></div>
<div className={styles.link}><a href="pdiddy">Contact</a></div>
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
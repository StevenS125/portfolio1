import React, { Component } from 'react';
// import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// Animate.css import for scrollAnimation
import "animate.css/animate.min.css";


//components
import Nav from './Nav/Nav';
import Landing from './Landing/Landing';
import About from './About/About';
//modules


// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPalette, faCode, faLaptop, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faPalette, faCode, faLaptop, faFacebook, faTwitter, faLinkedin, faArrowCircleRight )



class App extends Component {
  render() {
    return (
      <div>
<Landing />
<Nav />  
<About />
</div>
    //   <Router>
    //     <div >
    //       <Switch>
    //     <Route exact path="/" component={Landing}/>
    //     </Switch>
    // </div>
    // </Router>
    );
  }
}

export default App;

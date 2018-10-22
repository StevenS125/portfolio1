import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';


//components
import Nav from './Nav/Nav.js';
//modules


// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPalette, faCode, faLaptop } from '@fortawesome/free-solid-svg-icons'

library.add(faPalette, faCode, faLaptop, faFacebook, faTwitter, faLinkedin )



class App extends Component {
  render() {
    return (
  
      <Router>
        <div >
          <Switch>
        <Route exact path="/" component={Nav}/>
        </Switch>
    </div>
    </Router>
    );
  }
}

export default App;

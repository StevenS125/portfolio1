import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from "./Contact.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';



class Contact extends Component {
    constructor(props) {
            super(props);
            this.state = {}
    }


    handleChange(event) {
        this.setState({value: event.target.value});
      }

render() {
    return (
        <div>
          <div className={styles.contactForm}>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} animatePreScroll={false}>
            <div className={styles.contactTitle}>CONTACT</div>
          </ScrollAnimation>
        

   <div className={styles.forming}>
      
      <div className={styles.head}>
      <div className={styles.contactRight}>LET'S GET IN TOUCH</div>
      </div>

        <form id='form' onSubmit= {this.onSubmit}>

<div>
  <input onChange={this.onChange} type="text" id="first_name" name="fname" required placeholder=" " />
  <label htmlFor="first_name">Name</label>
</div>


<div>
  <input onChange={this.onChange} type="email" id="email" name="email" required placeholder=" " />
  <label htmlFor="email">Email Address</label>
  <div className={styles.requirements}>
    Must be a valid email address.
  </div>
</div>

<div>
  <textarea onChange={this.onChange} type="text" id="password" name="msg" required placeholder=" " pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{100,}" />
  <label htmlFor="text">Message</label>
  <div className={styles.requirements}>
    Your Message must be atleast 100 characters in length
  </div>
</div>

<input type="submit" value="Contact Us!" />

</form>
        </div>


          </div>

                    </div>
    )
}}

export default Contact
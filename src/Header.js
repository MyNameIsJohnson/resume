import React, { Component } from "react";

class Header extends Component {
   
  render() {
    return (
      <header className="resume-header container">
        <img className="headshot" alt="headshot" src="src/headshot.png"/>
        <h1 className="resume-title">Johnson Le Thieu</h1>
        <h2><i>Full-Stack Software Engineer</i></h2>
        <p>(626) 346-4095 | johnsonle2929@gmail.com</p>
        <p><i><a href="https://www.linkedin.com/in/johnson-thieu/">linkedin.com/in/johnson-thieu</a> | <a href="">github.com/MyNameIsJohnson</a></i></p>
        <p>San Francisco Bay Area, California</p>
      </header>
    );
  }
}

export default Header;

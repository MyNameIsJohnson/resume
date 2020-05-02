import React, { Component } from "react";

class Projects extends Component {
  
  
  render() {

    return(
      <div className="projects container">
        <h3><b>PROJECTS:</b></h3> 
        {/* add link to projects */}
          <h4><a href="https://pikatsume.herokuapp.com/" >Pikatsume</a></h4> 
            <ul> 
              <li>Built using HTML, CSS and Javascript, Python, Django that allows the user to create a profile, catch pikachus’, and purchase poffins to catch pikachus.</li>
              <li>Features include visual effects to heighten user experience.</li>
              <li>I developed team collaboration and work delegation and best practices of utilizing callback functions and routing </li>                   
            </ul>
            
          <h4><a href="https://club-hoppin.herokuapp.com/" >Club-Hoppin’</a></h4>             
          <ul> 
            <li>Built using HTML, CSS and Javascript, Node, Express, MongoDb</li>
            <li>Allows the user to view top 10 clubs of the week in San Francisco and reviews</li>
            <li>Features include an adding reviews of each club</li>
          </ul>
      </div>
    );
  }
}



export default Projects;
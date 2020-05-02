import React from "react";

class Summary extends React.Component {
  
  state = {
    count : 0
  }
  
  increament = () => {
    this.setState({
      count:this.state.count+1
    })  
  }
  
  decrement = () => {
    this.setState({
      count:this.state.count-1
    })
  }
  
  render() {
    return (
      <div className="summary container">
        <h3><b>TECHNICAL SUMMARY:</b></h3>
          <ul>
            <li>Solutions Engineer with a successful background in consumer facing roles with a 90%+ quality rating.</li>
            <li>Languages & Frameworks: Javascript, HTML, CSS, Node, Express, Python, Django, MongoDb, and libraries such as React, Jquery and Bootstrap technologies.
            Version Control & Workflow Management: Git, Github, Command Line</li>
            <li>Team Projects: Collaborator and developer on multiple projects successfully delivering requested features and MVP. </li>
          </ul>
      </div>
    );
  }
}

export default Summary;
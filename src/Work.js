import React, { Component } from "react";

class Work extends Component{

  render(){
    return(
      <div className="work container">
        <h3><b>WORK EXPERIENCE</b></h3>
        <h4>Product Engineering Intern, <a href="https://www.frontdoorhome.com/"></a> Denver, CO, June 2020 - September 2020</h4>
          <ul>
            <li>Collaborating with colleagues from multidisciplinary science and engineering</li>
            <li>Building components for company component-library using React.js</li>
            <li>Writing documents of component design and dashboard to analyze key inputs to internal systems</li>
          </ul>
          <h4>Candidate Experience Representative, <a href="www.checker.com">Checkr Inc.</a> San Francisco, February 2018 - January 2020 </h4>
          <h4>Candidate Experience Representative, <a href="">Checkr Inc.</a> San Francisco, February 2018 - January 2020 </h4>
          <ul>
            <li>Utilized Checkr Dashboard, Zendesk, and Looker providing a 90% above quality average. Assist candidate callers with their background check reports, to produce a “5 star candidate experience”.</li>
            <li>Answered 400 email inquiries a week addressing candidates concerns  regarding their background check reports</li>
            <li>Lead on a project that targeted 4,000+ potential candidates by collaborating with the engineering team. Making 165 contacts within a month and successfully expunging/seal and destroy grants of records for 164 of these contacts.</li>
          </ul>        
      </div>     
    );
  }
}

export default Work; 
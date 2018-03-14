import React from 'react';

export default class TechStack extends React.Component {

  render() {
    return (
      <React.Fragment>
      <section className="tech-stack">
      <h1>My Tech Stack</h1>
        <div className="tech-stack-text">
          <p>The main area of my expertise is full stack development and everything related with the web. HTML,CSS, JS (ES6, ES7), building small & medium SPA (Single Page Applications) with React.js or JQuery as front-end libraries and with Node.js and Express as back-end engine with MySQL or MongoDB for storing data.</p>
          <p>Often I work with open source CMS’s like WordPress and editing tools like Photoshop</p>
          <p> I have also several years of experience as QA Analyst. Working on small and big teams where I learned to work with SCRUM teams and continuous integration.</p>
        </div>
        <iframe title="NachoMerino Tech Stack" frameBorder="0" src="https://embed.stackshare.io/stacks/embed/2212298ecc0978918b08f9b047a80e" ></iframe>
      </section>
      </React.Fragment>
      );
  }
}

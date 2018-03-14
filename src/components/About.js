import React from 'react';

export default class About extends React.Component {


  render() {
    return (
      <React.Fragment>
      <section className="about">
        <h1>Who am I?</h1>
        <div className="social-icons">
          <div className="pict-wrapper">
            <img className="github-picture" src={this.props.githubPict} alt={this.props.githubName + '-GitHub'}/>
          </div>
          {this.props.socialMedia.map((social, index)=> <a key={index} href={social[1]} target="_blank"><i className={`fab ${social[2]}`}></i> </a>)}
        </div>
        <div className="aboutme-text">
        <p>I'm Ignacio Merino Arnaiz, a Spanish Full Stack web developer living in Berlin, with knowledge in JavaScript and working with technologies such as React.js, JQuery, Node.js, Express, MySQL and MongoDB. If you have a project that needs a developer, then that's where I come in!</p>
        <p>My job is to build your website so that it is functional and user-friendly but at the same time attractive.</p>
        <p>I also teach both online and face-to-face JavaScript classes, you can find my online courses on Youtube (in Spanish) and I teach as a tutor at DCI (Digital Career Institute).</p>
        <p>I studied network administration, and had my first real working experience as QA analyst, where I got experience improving and developing projects with an established enterprise and a start-up as well.</p>
        <p>With my new skills as a developer I now have a wide range of knowledge about software, hardware and the inner connections of computers.</p>
        <p>I have great customer service skills, confortable working as part of a team or by myself, capable of adjusting of changing circumstances and a fast paced environment.</p>
        <br />
        <p className="personal-phrase">{this.props.bio}</p>
        <br />
        <a href={this.props.nachoMerinoCV} target="_blank">Click to view my Curriculum</a>        
        <h3>Want to know more? <a href={`mailto:${this.props.email}`}>Email me</a>.</h3>
        </div>
      </section>
      </React.Fragment>
      );
  }
}
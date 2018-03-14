import React from 'react';

export default class Contact extends React.Component {
  render() {


    return (
      <React.Fragment>
      <div className="fourZeroFour">
        <p className="four">4</p>
        <p className="zero">0</p>
        <p className="for">4</p>
      </div>
      <section className="not-found">
          <h1>Oops!</h1>
          <h3>This is embarrased, you discover a junior 404 developer page.</h3>
          <hr/>
          <h6>You can go back the de <a href="/">Main</a> page If you wanna hire Nacho</h6>
          <div className="social-icons">
          {this.props.socialMedia.map((social, index)=> <a key={index} href={social[1]} target="_blank"><i className={`fab ${social[2]}`}></i> </a>)}
          </div>
      </section>
      </React.Fragment>
      );
  }
}


import React from 'react';

export default class Footer extends React.Component {

  render() {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <footer>
        <p>Handmade by <a href="https://github.com/NachoMerino" rel="noopener noreferrer" target="_blank">me </a> &copy; {year}</p> 
      </footer>
      );
  }
}
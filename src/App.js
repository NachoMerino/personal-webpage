import React, { Component } from 'react';
import Routes from './routes';
import Menu from './components/Menu';
import Footer from './components/Footer';


import './App.css';

class App extends Component {

  state = {
    name: 'Ignacio Merino Arnaiz',
    nickname : 'NachoMerino',
    job: 'Full Stack Developer | React.js | Node.js',
    email: 'nacho@nachomerino.com',
    menuBar: ['Home', 'About', 'Tech Stack', 'Work', 'Contact'],
    socialMedia : [
      ['GitHub', 'https://github.com/NachoMerino','fa-github-square'],
      ['Linkedin', 'https://www.linkedin.com/in/ignaciomerinoarnaiz/','fa-linkedin'],
      ['YouTube', 'https://www.youtube.com/c/desarrolladorweb','fa-youtube-square'],
    ],
    githubData: {
      githubName: 'NachoMerino',
      githubPict : null,
      bio: null,
    }
  }

  fetchAsync = async () => {
  try {
    const result = await fetch(`https://api.github.com/users/${this.state.githubData.githubName}?client_id=a12b6d5ca6b666061f3a&client_secret=4d8bbe0423b48bf1394b5b4194138302ceadc6f1`);
    const data = await result.json();
      this.setState(
        { 
          githubData: {
            githubPict : data.avatar_url,
            bio: data.bio,
          }
        }
      )
      } catch (error) {
        console.log('Error', error);
      }
    }

  // this will execute before render()
  componentDidMount(){
     this.fetchAsync();
  }

  render() {
    return (
      <React.Fragment>
        <Menu 
          nickname={this.state.nickname}
          menuBar={[...this.state.menuBar]}
          activateHome={this.activateHome}
          activateAbout={this.activateAbout}
          activateTechStack={this.activateTechStack}
          activateWork={this.activateWork}
          activateContact={this.activateContact}
        />
        <Routes {...this.state}/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;


    
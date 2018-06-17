import React, { Component } from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import TechStack from './components/TechStack';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import nachoMerinoCV from './images/nachomerinoCV.pdf';
import './App.css';

const key = process.env.REACT_APP_GitHubKey

class App extends Component {

  state = {
    name: 'Ignacio Merino Arnaiz',
    nickname : 'NachoMerino',
    homeName: 'Nacho',
    job: 'Full Stack Web Developer | React.js | Node.js',
    email: 'nacho@nachomerino.com',
    menuBar: [
      {endPoint:'Home', faIcon:'fas fa-home'},
      {endPoint:'About', faIcon:'fas fa-user'},
      {endPoint:'Tech Stack', faIcon:'fas fa-cogs'},
      {endPoint:'Projects', faIcon:'fas fa-eye'},
      {endPoint:'Contact', faIcon:'fas fa-envelope-open'},
    ],
    socialMedia : [
      {url:'https://github.com/NachoMerino', faIcon:'fab fa-github-square'},
      {url:'https://www.linkedin.com/in/ignaciomerinoarnaiz/', faIcon:'fab fa-linkedin'},
      {url:'https://www.youtube.com/c/desarrolladorweb', faIcon:'fab fa-youtube-square'},
    ],
    enterpriseGitHub:'devugees',
    githubData: {
      githubName: 'NachoMerino',
      githubPict : null,
      bio: null, 
    },
    projectsID:[137656942, 124655277, 137643304, 121787405, 117601468, 128185808],
    menu: 'Home',
    width: null,
  }

  fetchAsync = async () => {
  try {
    const result = await fetch(`https://api.github.com/users/${this.state.githubData.githubName}?client_id=a12b6d5ca6b666061f3a&client_secret=${key}`);
    const data = await result.json();
      this.setState(
        { 
          githubData: {
            githubPict : data.avatar_url,
            bio: data.bio,
            githubName: data.login,
          }
        }
      )
      } catch (error) {
        console.log('Error', error);
      }
    }

  whatToRender = () => {
      let whatToRender
      switch(this.state.menu)
      {
        case('About'):
        whatToRender = (
          <About
            githubName={this.state.githubData.githubName}
            githubPict={this.state.githubData.githubPict}
            bio={this.state.githubData.bio}
            socialMedia={[...this.state.socialMedia]}
            email={this.state.email}
            nachoMerinoCV={nachoMerinoCV}
          />)
          break;
        case('Tech Stack'):
        whatToRender = (<TechStack />)
          break;
        case('Projects'):
        whatToRender = (
          <Work
            githubName={this.state.githubData.githubName}
            enterpriseGitHub={this.state.enterpriseGitHub}
            projectsID={this.state.projectsID}
          />)
          break;
        case('Contact'):
        whatToRender = (<Contact email={this.state.email}/>)
          break;
        default:
          whatToRender = (
            <Home
              job={this.state.job}
              name={this.state.homeName}
              changeMenu={this.changeMenu}
              socialMedia={[...this.state.socialMedia]}
            />)
      }
    return whatToRender
  }

  // this will execute before render()
  componentDidMount(){
     this.fetchAsync();
     this.setState({width: window.innerWidth});
  }

  changeMenu = selected => {
    this.setState({ menu: selected })
  }

  render() {
    return (
      <React.Fragment>
        <Menu 
          nickname={this.state.nickname}
          width={this.state.width}
          menuBar={[...this.state.menuBar]}
          changeMenu={this.changeMenu}
        />
        {this.whatToRender()}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

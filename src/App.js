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
    menuBar: ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'],
    socialMedia : [
      ['GitHub', 'https://github.com/NachoMerino','fa-github-square'],
      ['Linkedin', 'https://www.linkedin.com/in/ignaciomerinoarnaiz/','fa-linkedin'],
      ['YouTube', 'https://www.youtube.com/c/desarrolladorweb','fa-youtube-square'],
    ],
    githubData: {
      githubName: 'NachoMerino',
      githubPict : null,
      bio: null, 
    },
    menu: { home: true },
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
    if(this.state.menu.home){
      return (<Home
              job={this.state.job}
              name={this.state.homeName}
              changeToContact={this.changeToContact}
              socialMedia={[...this.state.socialMedia]}/>)
    } else if (this.state.menu.about){
      return (<About
              githubName={this.state.githubData.githubName}
              githubPict={this.state.githubData.githubPict}
              bio={this.state.githubData.bio}
              socialMedia={[...this.state.socialMedia]}
              email={this.state.email}
              nachoMerinoCV={nachoMerinoCV}/>)
      } else if (this.state.menu.techStack) {
        return (<TechStack />)
      } else if (this.state.menu.work){
        return (<Work githubName={this.state.githubData.githubName}/>)
      } else if (this.state.menu.contact){
        return (<Contact email={this.state.email}/>)
      }
  }

  // this will execute before render()
  componentDidMount(){
     this.fetchAsync();
     this.setState({width: window.innerWidth});
  }

  changeToHome = (e) => {
    e.preventDefault();
    this.setState({ menu: { home: true }})
  }

  changeToAbout = (e) => {
    e.preventDefault();
    this.setState({menu: {about: true }})
  }

  changeToTechStack = (e) => {
    e.preventDefault();
    this.setState({menu: {techStack: true }})
  }

  changeToWork = (e) => {
    e.preventDefault();
    this.setState({menu: {work: true }})
  }

  changeToContact = (e) => {
    e.preventDefault();
    this.setState({menu: {contact: true }})
  }

  render() {
    return (
      <React.Fragment>
        <Menu 
          nickname={this.state.nickname}
          width={this.state.width}
          menuBar={[...this.state.menuBar]}
          changeToHome={this.changeToHome}
          changeToAbout={this.changeToAbout}
          changeToTechStack={this.changeToTechStack}
          changeToWork={this.changeToWork}
          changeToContact={this.changeToContact}
        />
        {this.whatToRender()}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;


    
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

class App extends Component {

  state = {
    menu: { home: true },
    width: null,
    name: 'Ignacio Merino Arnaiz',
    nickname : 'NachoMerino',
    job: 'Full Stack Web Developer | React.js | Node.js',
    email: 'nacho@nachomerino.com',
    menuBar: ['Home', 'About', 'Tech Stack', 'Work', 'Contact'],
    socialMedia : [
      ['GitHub', 'https://github.com/NachoMerino','fa-github-square'],
      ['Linkedin', 'https://www.linkedin.com/in/ignaciomerinoarnaiz/','fa-linkedin'],
      ['YouTube', 'https://www.youtube.com/c/desarrolladorweb','fa-youtube-square'],
    ],
    githubData: {
      githubPict : null,
      bio: null,
      githubName: 'NachoMerino',
    }
  }

  fetchAsync = async () => {
  try {
    const result = await fetch('https://api.github.com/users/nachomerino?client_id=a12b6d5ca6b666061f3a&client_secret=4d8bbe0423b48bf1394b5b4194138302ceadc6f1');
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

  loadLocalStorage = () => {
    const menu = JSON.parse(localStorage.getItem('menu'))
    if(menu){
      this.setState({ menu })
    }
  }

  whatToRender = () => {
    if(this.state.menu.home){
      return (<Home
              job={this.state.job}
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
        return (<Work />)
      } else if (this.state.menu.contact){
        return (<Contact email={this.state.email}/>)
      }
  }

  // this will execute before render()
  componentDidMount(){
     this.fetchAsync();
     this.loadLocalStorage();
     this.setState({width: window.innerWidth});
  }

  // triger when render() finished
  componentDidUpdate = () => localStorage.setItem('menu', JSON.stringify(this.state.menu))

  changeToHome = (e) => {
    e.preventDefault();
    this.setState({ menu: { home: true }})
    window.location.hash = '/';
  }

  changeToAbout = (e) => {
    e.preventDefault();
    this.setState({menu: {about: true }})
    window.location.hash = '/about';
  }

  changeToTechStack = (e) => {
    e.preventDefault();
    this.setState({menu: {techStack: true }})
    window.location.hash = '/techStack';
  }

  changeToWork = (e) => {
    e.preventDefault();
    this.setState({menu: {work: true }})
    window.location.hash = '/work';
  }

  changeToContact = (e) => {
    e.preventDefault();
    this.setState({menu: {contact: true }})
    window.location.hash = '/contact';
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


    
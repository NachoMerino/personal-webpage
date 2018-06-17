import React from 'react';
import { RenderWork} from './RenderWork';

const key = process.env.REACT_APP_GitHubKey

export default class Work extends React.Component {
  constructor(props){
    super()
    this.state = {
      githubName: props.githubName,
      data:null,
      projectsID:[123416192, 121787405, 124967684, 117601468, 118780202, 123272357],
      projects:[],
    }
  }


  fetchAsync = async () => {
    try {
      const result = await fetch(`https://api.github.com/users/${this.state.githubName}/repos?sort=updated?client_id=a12b6d5ca6b666061f3a&client_secret=${key}`);
      const data = await result.json();
        this.setState({ data });
        this.state.projectsID.map(id => this.findProjects(this.state.data, id))
        } catch (error) {
          console.log('Error', error);
        }
      }

  findProjects = (data, id) => {
    data.map( repo => {
      if(id === repo.id){
        this.setState( prevState => {return {projects: [...prevState.projects, {name:repo.name, repoURL:repo.html_url, description:repo.description, homepage:repo.homepage, owner:repo.owner.login, ownerURL:repo.owner.html_url}]}})
      }
    })
  }

  componentDidMount(){
     this.fetchAsync();
  }

  shouldComponentUpdate(prevState,nextState){
    if(nextState.projects.length === nextState.projectsID.length){
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <React.Fragment>
      <section className="work">
      <h1>My Expertise</h1>
        <div className="work-text">
          <p>In my sort carreer as full stack JS developer I build some SPA (Single Page Applications) using HTML5,CSS3+, JS (ES6, ES7) with React or JQuery as front-end libraries and with Node.js and Express as back-end engine with MySQL or MongoDB for storing data.</p>
        </div>
          {this.state.projects.map((project, index) => <RenderWork  key={index} index={index}name={project.name} link={project.repoURL} description={project.description} liveURL={project.homepage} owner={project.owner} ownerURL={project.ownerURL}/>)}
      </section>
      </React.Fragment>
      );
  }
}

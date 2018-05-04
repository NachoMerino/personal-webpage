import React from 'react';
import { RenderWork} from './RenderWork';

export default class Work extends React.Component {

  state = {
    data:null,
    projectsID:[123416192, 121787405, 124967684, 117601468, 118780202, 123272357],
    projects:[],
  }

  fetchAsync = async () => {
    try {
      const result = await fetch('https://api.github.com/users/NachoMerino/repos?sort=updated?client_id=a12b6d5ca6b666061f3a&client_secret=4d8bbe0423b48bf1394b5b4194138302ceadc6f1');
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
        this.setState( prevState => {return {projects: [...prevState.projects, [repo.name, repo.html_url, repo.description, repo.homepage, repo.owner.login, repo.owner.html_url]]}})
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
          {this.state.projects.map((project, index) => <RenderWork  key={index} index={index}name={project[0]} link={project[1]} description={project[2]} liveURL={project[3]} owner={project[4]} ownerURL={project[5]}/>)}
      </section>
      </React.Fragment>
      );
  }
}

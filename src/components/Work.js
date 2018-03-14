import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardText } from 'reactstrap';

class RenderWork extends React.Component {

  render() {
    let liveDemo;
    if(this.props.liveURL){
      liveDemo = (<Button href={this.props.liveURL} target="_blank">Live Demo</Button>)
    }
    return (
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className={`work-${this.props.index}`}>
        <CardHeader tag="h3">{this.props.name}</CardHeader>
        <CardBody>
          <CardText>{this.props.description}</CardText>
          <Button href={this.props.link} target="_blank">Repository</Button>
          {liveDemo}
        </CardBody>
        <CardFooter className="text-muted">Owner: <a href={this.props.ownerURL} target="_blank">{this.props.owner}</a></CardFooter>
      </Card>
    );
  }
}

export default class Work extends React.Component {

  state = {
    githubName:'NachoMerino',
    data:null,
    projectsID:[123416192, 121787405, 124967684, 117601468, 118780202, 123272357],
    projects:[],
  }

  fetchAsync = async () => {
    try {
      const result = await fetch(`https://api.github.com/users/${this.state.githubName}/repos?sort=updated?client_id=a12b6d5ca6b666061f3a&client_secret=4d8bbe0423b48bf1394b5b4194138302ceadc6f1`);
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

  render() {
    return (
      <React.Fragment>
      <section className="work">
      <h1>My Expertise</h1>
        <div className="work-text">
          <p>In my sort carreer as full stack JS developer I build some SPA (Single Page Applications) using HTML5,CSS3+, JS (ES6, ES7) with React or JQuery as front-end libraries and with Node.js and Express as back-end engine with MySQL or MongoDB for storing data.</p>
        </div>
          {this.state.projects.map((project, index) => <RenderWork key={index} index={index} name={project[0]} link={project[1]} description={project[2]} liveURL={project[3]} owner={project[4]} ownerURL={project[5]}/>)}
      </section>
      </React.Fragment>
      );
  }
}


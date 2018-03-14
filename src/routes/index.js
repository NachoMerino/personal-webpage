import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Work from '../components/Work';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';
import nachoMerinoCV from '../images/nachomerinoCV.pdf';

export default (props) => (

   <BrowserRouter>
   <Switch>
      <Route path="/" exact render={()=> <Home
        job={props.job}
        socialMedia={[...props.socialMedia]}
        hoverSkills={this.hoverSkills}/>} />
      <Route path="/home" exact component={()=> <Home
        job={props.job}
        socialMedia={[...props.socialMedia]}
        hoverSkills={this.hoverSkills}/>} />
      <Route path="/about" exact component={()=> <About
        githubName={props.githubData.githubName}
        githubPict={props.githubData.githubPict}
        bio={props.githubData.bio}
        socialMedia={[...props.socialMedia]}
        email={props.email}
        nachoMerinoCV={nachoMerinoCV}/>} />
      <Route path="/techstack" exact component={()=> <TechStack />} />
      <Route path="/work" exact component={()=> <Work githubName={props.githubData.githubName}/>} />
      <Route path="/contact" exact component={()=> <Contact email={props.email}/>} />
      <Route component={()=> <NotFound socialMedia={[...props.socialMedia]}/>} />
   </Switch>
   </BrowserRouter> 
  );

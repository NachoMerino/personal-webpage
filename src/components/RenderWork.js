import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardText } from 'reactstrap';

export const RenderWork = props => {
  let liveDemo;
  if(props.liveURL){
    liveDemo = (<Button href={props.liveURL} target="_blank">Live Demo</Button>)
  }
  return (
    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className={`work-${props.index}`}>
      <CardHeader tag="h3">{props.name}</CardHeader>
      <CardBody>
        <CardText>{props.description}</CardText>
        <Button href={props.link} target="_blank">Repository</Button>
        {liveDemo}
      </CardBody>
      <CardFooter className="text-muted">Owner: <a href={props.ownerURL} target="_blank">{props.owner}</a></CardFooter>
    </Card>
  );
}
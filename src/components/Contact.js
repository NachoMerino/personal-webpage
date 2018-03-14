import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import GoogleMaps from './GoogleMaps';

export default class Contact extends React.Component {

  render() {
    const style = {
      height:'200px'
    }
    return (
      <React.Fragment>
      <section className="contact">
        <div className="contact-text">
        <h1>Contact me</h1>
        <p>I currently live in Berlin and am free to be hired.</p>
        <p>If you have any questions, please don’t hesitate to contact me using the form below…</p>
        <h3>Want to know more? <a href={`mailto:${this.props.email}`}>Email me</a>.</h3>
        <h3>{this.props.email}</h3>
        <Form action={`mailto:${this.props.email}`} method="GET">
          <FormGroup>
            <Label>Subject</Label>
            <Input type="text" name="subject" id="form-subject" placeholder="Subject" />
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <Input style={style} type="textarea" name="body" id="form-text" placeholder="Write me something..."/>
          </FormGroup>
          <Button type="submit" value="Send">Submit</Button>
        </Form>
        </div>
        <GoogleMaps />
      </section>
      </React.Fragment>
    );
  }
}

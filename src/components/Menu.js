import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="faded" dark expand="md">
          <NavbarBrand href="/" onClick={this.props.activateHome}>{this.props.nickname}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem onClick={this.toggle}><NavLink href="/"><i className="fas fa-home"></i> {this.props.menuBar[0]}</NavLink></NavItem>
              <NavItem onClick={this.toggle}><NavLink href={`/about`}><i className="fas fa-user"></i> {this.props.menuBar[1]}</NavLink></NavItem>
              <NavItem onClick={this.toggle}><NavLink href="/techstack"><i className="fas fa-cogs"></i> {this.props.menuBar[2]}</NavLink></NavItem>
              <NavItem onClick={this.toggle}><NavLink href="/work"><i className="fas fa-eye"></i> {this.props.menuBar[3]}</NavLink></NavItem>
              <NavItem onClick={this.toggle}><NavLink href="/contact"><i className="fas fa-envelope-open"></i> {this.props.menuBar[4]}</NavLink></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
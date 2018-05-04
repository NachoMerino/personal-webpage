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

  closeMenu = () => {
    if(this.props.width < 766){
      this.toggle()
    }
  }

  render() {

    return (
      <React.Fragment>
        <Navbar color="faded" dark expand="md">
          <NavbarBrand href="/" onClick={this.props.changeToHome}>{this.props.nickname}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem onClick={this.closeMenu}><NavLink href="/" onClick={this.props.changeToHome}><i className="fas fa-home"></i> {this.props.menuBar[0]}</NavLink></NavItem>
              <NavItem onClick={this.closeMenu}><NavLink href="/about" onClick={this.props.changeToAbout}><i className="fas fa-user"></i> {this.props.menuBar[1]}</NavLink></NavItem>
              <NavItem onClick={this.closeMenu}><NavLink href="/techstack" onClick={this.props.changeToTechStack}><i className="fas fa-cogs"></i> {this.props.menuBar[2]}</NavLink></NavItem>
              <NavItem onClick={this.closeMenu}><NavLink href="/work" onClick={this.props.changeToWork}><i className="fas fa-eye"></i> {this.props.menuBar[3]}</NavLink></NavItem>
              <NavItem onClick={this.closeMenu}><NavLink href="/contact" onClick={this.props.changeToContact}><i className="fas fa-envelope-open"></i> {this.props.menuBar[4]}</NavLink></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
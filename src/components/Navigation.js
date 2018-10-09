import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <header className="Navigation">
        <Navbar id="nav" color="indigo" dark expand="md" scrolling>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarBrand>
              <NavLink  id="color" to="/">Logo</NavLink>
            </NavbarBrand>
            <NavbarNav right>
              <NavItem id="indogo" active>
                <NavLink className="color" to="/">Accueil</NavLink>
              </NavItem>
              <NavItem active>
                <NavLink id="color" to="/programme">Programme</NavLink>
              </NavItem>{" "}
              <NavItem active>
                <NavLink id="color" to="/A-propos">À propos</NavLink>
              </NavItem>{" "}
              <NavItem active>
                <NavLink id="color" to="/contact">Contact</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Navigation;

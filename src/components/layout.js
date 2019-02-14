import React, { Component } from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import styles from "./navbar.module.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default class Layout extends Component {
  state = {
    isOpen: false
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        <Navbar light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav  navbar>
              <NavItem>
                <NavLink>
                  <Link to={`/`}>HOME</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to={`/about`}>ABOUT</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to={`/posts`}>BLOG</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {children}
      </div>
    );
  }
}

import React, { Component } from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import styles from './layout.module.css'

export default class Layout extends Component {
  state = {
    isOpen: false
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { children } = this.props;
    return (
      <React.Fragment >
        <div className={styles.navContainer}>
        <Navbar light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav  navbar>
              <NavItem>
                <NavLink>
                  <Link className={styles.navLink} to={`/`}>HOME</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className={styles.navLink} to={`/about`}>ABOUT</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className={styles.navLink} to={`/posts`}>BLOG</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
        <hr className={styles.hr}/>
        <div className={styles.contentContainer}> 
        {children}

        </div>
      </React.Fragment>
    );
  }
}

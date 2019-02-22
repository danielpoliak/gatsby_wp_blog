import React, { Component } from "react";
import { Link } from "gatsby";
import styles from "./layout.module.css";

import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav
} from "reactstrap";
import HeaderImage from "./HeaderImage";



export default class Layout extends Component {
  state = {
    isOpen: false
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        {this.props.isIndex && (
          <div className={styles.header}>
            <HeaderImage />
          </div>
        )}
        <Container>
          <Navbar
            className={styles.navbar}
            fixed="top"
            color="white"
            light
            expand="md"
          >
            <NavbarToggler onClick={this.toggle} className="mr-2" />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Container>
                <Nav navbar>
                  <Link className={styles.navLink} to={`/`}>
                    HOME
                  </Link>
                  <Link className={styles.navLink} to={`/about`}>
                    ABOUT
                  </Link>
                  <Link className={styles.navLink} to={`/posts`}>
                    BLOG
                  </Link>
                </Nav>
              </Container>
            </Collapse>
          </Navbar>
          <Row className={styles.content}>
            <Col>{children}</Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

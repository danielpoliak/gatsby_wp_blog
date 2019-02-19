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
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Layout extends Component {
  state = {
    isOpen: false
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-left" navbar>
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
          </Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col className={styles.header}>
              <h2 className={styles.title}>Jadventure</h2>
              <h4 className={styles.description}>When you love your life, everything else falls into place</h4>
            </Col>
          </Row>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

import React, { Component } from "react";
import { Link } from "gatsby";
import styles from "./layout.module.css";
import Img from "gatsby-image";
import logo from "../img/Jadventure.png";
import { StaticQuery, graphql } from "gatsby";
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Jumbotron,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Header = () => (
  <StaticQuery
    query={graphql`
      {
        allFile(filter: { sourceInstanceName: { eq: "img" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.allFile.edges[1].node.childImageSharp.fluid}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "500px"
        }}
      />
    )}
  />
);

export default class Layout extends Component {
  state = {
    isOpen: false
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        {this.props.isIndex && 
        <div className={styles.header}>
          <Header />
        </div>
      }
        <Navbar sticky='top' expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="auto" navbar>
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
            <Col>{children}</Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

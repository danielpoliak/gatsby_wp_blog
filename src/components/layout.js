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
                fluid(maxWidth: 1500) {
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
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "60%"
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
      <div className={styles.header}>
        <Header />
        <Navbar light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
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
          </Collapse>
        </Navbar>
      </div>

        <Container>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "src/assets/Jadventure.png" }) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `

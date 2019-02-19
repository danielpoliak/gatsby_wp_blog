import React, { Component } from "react";
import { Link } from "gatsby";
import styles from "./layout.module.css";
import { Container, Row, Col } from "reactstrap";

export default class Layout extends Component {
  state = {
    isOpen: false
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <div className={styles.navContainer}>
          <Link className={styles.navLink} to={`/`}>
            HOME
          </Link>
          <Link className={styles.navLink} to={`/about`}>
            ABOUT
          </Link>
          <Link className={styles.navLink} to={`/posts`}>
            BLOG
          </Link>
        </div>
        <Container>
        <Row>
          <Col className={styles.header}>
          <h1 >
            Jadventure
          </h1>
          <h4>
          When you love your life, everything else falls into place
          </h4>
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

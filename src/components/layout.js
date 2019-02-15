import React, { Component } from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

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
                  <Link className={styles.navLink} to={`/`}>HOME</Link>
                  <Link className={styles.navLink} to={`/about`}>ABOUT</Link>
                  <Link className={styles.navLink} to={`/posts`}>BLOG</Link>
        </div>
        <hr className={styles.hr}/>
        <div className={styles.contentContainer}> 
        {children}

        </div>
      </React.Fragment>
    );
  }
}

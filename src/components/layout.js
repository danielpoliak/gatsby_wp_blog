import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import styles from "./navbar.module.css";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

export default ({ children }) => (
  <div className={styles.container}>
    <Navbar color="light" light expand="md">
      <NavbarToggler onClick={() => {}} />
      <Collapse isOpen={() => {}} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to={`/`}>HOME</Link>
          </NavItem>
          <NavItem>
            <Link to={`/about`}>ABOUT</Link>
          </NavItem>
          <NavItem>
            <Link to={`/posts`}>BLOG</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    <hr />
    {children}
  </div>
);

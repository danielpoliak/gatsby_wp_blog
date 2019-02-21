import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import styles from "./blogPosts.module.css";
import {
  Container,
  Row,
  Col
} from "reactstrap";

export default ({ pageContext }) => (
  <React.Fragment>
    {pageContext.group.map(({ node }, index) => (
      <div className={styles.container} key={index}>
        <Container>
          <Row>
            <Col xs="" lg="5">
              {node.featured_media.localFile && (
                <Link to={"post/" + node.slug}>
                  <Img
                    resolutions={
                      node.featured_media.localFile.childImageSharp.resolutions
                    }
                  />
                </Link>
              )}
            </Col>
            <Col xs="12" xs="auto" lg="7">
              <Link className={styles.h3} to={"post/" + node.slug}>
                <h3>{node.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              {node.date}
            </Col>
            <Col xs="" />
          </Row>
          <hr className={styles.hr} />
        </Container>
      </div>
    ))}
  </React.Fragment>
);

import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import styles from "./blogPosts.module.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

export default ({ pageContext }) => (
  <React.Fragment>
    {pageContext.group.map(({ node }) => (
      <Container>
        <Row>
          <Col xs="12" lg="5">
            {node.featured_media.localFile && (
              <Img
                resolutions={
                  node.featured_media.localFile.childImageSharp.resolutions
                }
              />
            )}
          </Col>
          <Col xs="12" xs='auto' lg="7">
            <Link className={styles.h3} to={"post/" + node.slug}>
              <h3>{node.title}</h3>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            {node.date}
          </Col>
        </Row>
      </Container>
    ))}
  </React.Fragment>
);

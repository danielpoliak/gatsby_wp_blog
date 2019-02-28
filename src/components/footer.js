import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import styles from "./footer.module.css";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allInstaNode {
          edges {
            node {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.container}>
        <a href={'https://www.instagram.com/little_travel_big/'} className={styles.linkWrapper}>
          <p className={styles.link}>Instagram @little_travel_big</p>
        </a>
        <div className={styles.imageWrapper}>
          {data.allInstaNode.edges.map(
            ({ node }, index) =>
              // {console.log(node, ' nodis')}
              index < 6 && (
                <Img
                  fluid={node.localFile.childImageSharp.fluid}
                  style={{
                    width: "250px",
                    height: "240px"
                  }}
                />
              )
          )}
        </div>
      </div>
    )}
  />
);

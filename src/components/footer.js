import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import styles from "./footer.module.css";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allInstagramContent {
          edges {
            node {
              link
              localImage {
                childImageSharp {
                  fluid(maxHeight: 250, maxWidth: 250, quality: 90) {
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
        <a
          href={"https://www.instagram.com/little_travel_big/"}
          className={styles.linkWrapper}
        >
          <p className={styles.link}>Instagram @little_travel_big</p>
        </a>
        <div className={styles.imageWrapper}>
          {data.allInstagramContent.edges.map(({ node }, index) => {
            {
              console.log(node, " nodis");
            }
            return (
              index < 5 && (
                <div key={index}>
                  <Img
                    fluid={node.localImage.childImageSharp.fluid}
                    style={{
                      width: "245px",
                      height: "240px",
                      margin: "1px"
                    }}
                  />
                </div>
              )
            );
          })}
        </div>
      </div>
    )}
  />
);

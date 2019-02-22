import React from 'react'
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

export default () => (
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
          top: 45,
          width: "100%",
          height: "500px"
        }}
      />
    )}
  />
);

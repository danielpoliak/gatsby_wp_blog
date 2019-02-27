import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allInstaNode {
          edges {
            node {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 200) {
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
      <div>
        {console.log(data.allInstaNode.edges, " data in footer are ")}
        {data.allInstaNode.edges.map(({ node }) => (
          // {console.log(node, ' nodis')}
          <Img
            fluid={node.localFile.childImageSharp.fluid}
            style={{
              
              width: "10%",
              height: "300px"
            }}
          />
        ))}
      </div>
    )}
  />
);

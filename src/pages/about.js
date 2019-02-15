import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";

export default ({ data }) => (
    <Layout>
      <h1>{`${JSON.stringify(data.allWordpressPost.edges[0].node.title)}`}</h1> 
      {`${JSON.stringify(data.allWordpressPost.edges[0].node.excerpt)}`}
      {console.log('show mi data: ', data.allWordpressPost.edges)}
    </Layout>
  )
  
  export const query = graphql`
  {
    allWordpressPost(sort: { fields: [date], order:DESC }) {
      edges {
        node {
          date(formatString: "DD, MMM YYYY")
          title
          excerpt
          slug
        }
      }
    }
  }
  `
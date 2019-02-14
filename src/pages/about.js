import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => (
    <div>
      <h1>{`${JSON.stringify(data.allWordpressPost.edges[0].node.title)}`}</h1> 
      {`${JSON.stringify(data.allWordpressPost.edges[0].node.excerpt)}`}
      {console.log('show mi data: ', data.allWordpressPost.edges)}
    </div>
  )
  
  export const query = graphql`
  {
    allWordpressPost(sort: { fields: [date], order:DESC }) {
      edges {
        node {
          date(formatString: "DD, MMM YYYY")
          title
          excerpt
          author{
            name
          }
          categories {
            id
            name
          }
          slug
        }
      }
    }
  }
  `
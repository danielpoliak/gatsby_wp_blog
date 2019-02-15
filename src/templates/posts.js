import React, { Component } from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";
import Layout from "../components/layout";

class Posts extends Component {
  render() {
    const data = this.props.data;

    return (
      <Layout>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug} style={{ marginBottom: 50 }}>
            <Link to={"post/" + node.slug}>
              <h3>{node.title}</h3>
            </Link>
            {console.log(data, " data")}
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            {node.date}
          </div>
        ))}
      </Layout>
    );
  }
}

export default Posts;

export const pageQuery = graphql`
  query postsQuery {
    allWordpressPost {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;

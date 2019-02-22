import React, { Component } from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";

const PostTemplate = props => {
  const post = props.data.wordpressPost;

  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      {console.log(post.title, ' title is')}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      {console.log(post.content, ' content')}
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

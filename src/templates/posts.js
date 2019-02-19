import React from "react";
import BlogPosts from '../components/blogPosts'
import Layout from "../components/layout";

export default ({pageContext}) => {

  return (
    <Layout>
      <BlogPosts pageContext={pageContext} />
    </Layout>
  );
}

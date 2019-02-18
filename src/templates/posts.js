import React, { Component } from "react";
import BlogPosts from '../components/blogPosts'
import Layout from "../components/layout";

export default ({pageContext}) => {

  return (
    <Layout>
      {console.log(pageContext)}
      <BlogPosts pageContext={pageContext} />
    </Layout>
  );
}

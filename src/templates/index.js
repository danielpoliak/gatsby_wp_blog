import React from "react";
import Layout from "../components/layout";
import styles from "./index.module.css";
import BlogPosts from '../components/blogPosts'
import 'bootstrap/dist/css/bootstrap.min.css';

export default ({ pageContext }) => (
  <Layout>
    <BlogPosts pageContext={pageContext} />
  </Layout>
);

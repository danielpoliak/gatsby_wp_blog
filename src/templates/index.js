import React from "react";
import Layout from "../components/layout";
import styles from "./index.module.css";
import BlogPosts from '../components/blogPosts'
import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) => (
  <Layout isIndex>
    <BlogPosts pageContext={props.pageContext} />
    {console.log(props, ' props in index')}
  </Layout>
);


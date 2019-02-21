import React from "react";
import Layout from "../components/layout";
import styles from "./index.module.css";
import BlogPosts from '../components/blogPosts'
import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) => (
  <Layout>
    <BlogPosts pageContext={props.pageContext} />
    {console.log(props, ' props in index')}
  </Layout>
);

export const query = graphql`
{
  allWordpressPost {
    edges {
      node {
       
        featured_media {
          localFile {
            childImageSharp {
              resolutions(width:350, height:250) {
                height
              }
            }
          }
        }
      }
    }
  }
  
}
`
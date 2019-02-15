import React from "react";
import Link from "gatsby-link";
import Layout from "../components/layout";
import Img from "gatsby-image";
import styles from "./index.module.css";

export default ({ pageContext }) => (
  <Layout>
    {pageContext.group.map(({ node }) => (
      <div key={node.slug} style={{ marginBottom: 50 }}>
      {console.log(node)}

        <div className={styles.postContainer}>
        {
          node.featured_media.localFile && 
          <Img
            className={styles.image}
            resolutions={
              node.featured_media.localFile.childImageSharp.resolutions
            }
          />
        }
          <Link to={"post/" + node.slug}>
            <h3 className={styles.h3}>{node.title}</h3>
          </Link>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: node.excerpt }}
          />
          {node.date}
        </div>
      </div>
    ))}
  </Layout>
);

import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const AboutPage = props => {
  const post = props.data.wordpressPage;

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  );
};

export default AboutPage;

export const aboutQuery = graphql`
  {
    wordpressPage(slug: { eq: "about" }) {
      title
      content
    }
  }
`;

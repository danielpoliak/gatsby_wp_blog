import React from "react";
import BlogPosts from '../components/blogPosts'
import Layout from "../components/layout";

export default ({data}) => {
  console.log('show mi dddd data ', data)
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      {/* <BlogPosts pageContext={pageContext} />
     */}
      <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      {console.log('consolis')}
    </div>
    </Layout>
  );
}


export const mdQuery = graphql`
query($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
    }
  }
}
`
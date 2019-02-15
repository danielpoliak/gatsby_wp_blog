import React from "react"
import Link from 'gatsby-link'
import Layout from '../components/layout'

export default ({ pageContext }) => (
  <Layout>
    <h1>Hello World</h1>
    {console.log(pageContext)}
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)
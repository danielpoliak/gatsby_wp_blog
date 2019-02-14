import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'gatsby-link'
import Layout from '../components/layout'
import { Button } from 'reactstrap';

export default () => (
  <Layout>
    <h1>Hello World</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button color="danger">Danger!</Button>
    <Link to="/about/">Go to about</Link>
  </Layout>
)
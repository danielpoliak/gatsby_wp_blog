import React, { Component } from "react"
import Img from "gatsby-image"
import Link from "gatsby-link"
import Layout from "../components/layout";

class Posts extends Component {
    render() {
        const data = this.props.data

        return (
            <Layout>
            <h1>Posts</h1>
            {data.allWordpressPost.edges.map(({node}) => (
                <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                    <Link to={'post/' + node.slug}>
                        <h3>{node.title}</h3>
                    </Link>

                    <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                    {node.date}
                </div>
            ))}
        </Layout>
        )
    }
}


export default Posts

export const pageQuery = graphql`
    query postsQuery{
        allWordpressPost{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`
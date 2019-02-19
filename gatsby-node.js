const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const createPaginatedPages = require('gatsby-paginate')


const pageQuery = `
{
  allWordpressPage {
    edges {
      node {
        id
        slug
        status
        template
      }
    }
  }
}
`


const postsQuery = `
{
  allWordpressPost {
    edges {
      node {
        id
        title
        excerpt
        slug
        date(formatString: "MMMM DD, YYYY")
        featured_media {
          localFile {
            childImageSharp {
              resolutions(width:350, height:250) {
                src,
                width,
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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    //  PAGES

    graphql(pageQuery)
      .then(result => {
        
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const pageTemplate = path.resolve("./src/templates/page.js")

        _.each(result.data.allWordpressPage.edges, edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })

      .then(() => {
        graphql(postsQuery).then(result => {
          createPaginatedPages({
            edges: result.data.allWordpressPost.edges,
            createPage: createPage,
            pageTemplate: 'src/templates/index.js',
            pageLength: 5, // This is optional and defaults to 10 if not used
            pathPrefix: '', // This is optional and defaults to an empty string if not used
            context: {}, // This is optional and defaults to an empty object if not used
          })
          createPaginatedPages({
            edges: result.data.allWordpressPost.edges,
            createPage: createPage,
            pageTemplate: 'src/templates/posts.js',
            pageLength: 5, // This is optional and defaults to 10 if not used
            pathPrefix: '/posts', // This is optional and defaults to an empty string if not used
            context: {}, // This is optional and defaults to an empty object if not used
          })

          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const postTemplate = path.resolve("./src/templates/post.js")
          const postsTemplate = path.resolve("./src/templates/posts.js");

          // Create Posts
        //   createPage({
        //     path: `/posts/`,
        //     component: slash(postsTemplate)
        // });

          _.each(result.data.allWordpressPost.edges, edge => {
            createPage({
              path: `/post/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: {
                id: edge.node.id,
              },
            })
          })
          resolve()
        })
      })
  })
}
let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
    siteMetadata: {
        title: `Title from siteMetadata`,
      },
    plugins: [
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          useMozJpeg: false,
          stripMetadata: true,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/posts/`,
          name: "markdown-pages",
        },
      },
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `img`,
          path: `${__dirname}/src/img/`,
        },
      },
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
      {
        resolve: `gatsby-source-instagram-all`,
        options: {
          access_token: "6215424489.1677ed0.ea9c1db18d524cc2a762331a9b6e6e8d"
        }
      },
      {
        resolve: "gatsby-source-wordpress",
        options: {
          baseUrl: "jadventure.net",
          protocol: "https",
          hostingWPCOM: false,
          useACF: true,
          acfOptionPageIds: [],
          auth: {
            htaccess_sendImmediately: false,
            jwt_user: process.env.JWT_USER,
            jwt_pass: process.env.JWT_PASSWORD,
          },
          includedRoutes: [
            "**/*/*/categories",
            "**/*/*/posts",
            "**/*/*/pages",
            "**/*/*/media",
            "**/*/*/tags",
            "**/*/*/taxonomies",
            "**/*/*/users",
          ],
        },
      },
      "gatsby-plugin-react-helmet",
      "gatsby-transformer-sharp",
      "gatsby-plugin-sharp",
      
    ],
  }
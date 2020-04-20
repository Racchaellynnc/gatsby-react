/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby",
    description: "Our blog is focused on JavaScript topics and how to get started.",
    keywords: "Coderality, Coder Blog, Code Blog, JavaScript, Learning JavaScript",
    image: "./static/vrimage.png",
    url: "coderality.com"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/`,
      },
    },
     {resolve: `gatsby-transformer-remark`},
     {resolve: `gatsby-source-wordpress`, options:{
      baseUrl: `https://practice.codingsrc.com/`,
      protocol: `http`,
      hostingWPCOM: false,
      },
    },
      `gatsby-plugin-react-helmet`
  ],
}
  
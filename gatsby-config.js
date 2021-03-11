module.exports = {
  siteMetadata: {
    title: 'Portfolio Website',
    titleTemplate: '%s | Devesh Mhatre',
    description:
      'Portfolio website of Devesh Mhatre to showcase his skills as a front-end web developer. Made with GatsbyJS.',
    url: 'devesh-mhatre.netlify.app',
    image: '/favicon.ico',
    twitterUsername: '@i_am_devesh',
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}

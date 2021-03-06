const path = require("path");

module.exports = {
  siteMetadata: {
    title: `weather-application`,
    description: `weather application based on https://openweathermap.org/api`,
    author: `Ernest Teluk`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
        hoc: path.join(__dirname, "src/hoc"),
        pages: path.join(__dirname, "src/pages"),
        templates: path.join(__dirname, "src/templates"),
        utils: path.join(__dirname, "src/utils"),
        state: path.join(__dirname, "src/state"),
        src: path.join(__dirname, "src"),
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: process.env.NODE_ENV === `development`,
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-stylelint",
      options: { files: ["**/*.js"] },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

module.exports = {
  siteMetadata: {
    title: `Adam McKnight`,
    name: `Adam McKnight`,
    siteUrl: `http://www.blog.mcknight.netlify.com`,
    description: `Adam McKnight, Web Developer, Designer, and Creative Director Blog`,
    hero: {
      heading: `This is the home for my Random Thoughts`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/theadammcknight`,
      },
      {
        name: `github`,
        url: `https://github.com/apmcknight`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/theadammcknight`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};

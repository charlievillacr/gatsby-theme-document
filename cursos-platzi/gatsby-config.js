module.exports = {
  siteMetadata: {
    title: `JS Examples Docs`,
    name: `Carlos Villalobos`,
    siteUrl: `https://codebushi.com`,
    description: `Learning JavaScript`,
    social: [
      {
        name: `github`,
        url: `https://github.com/charlievillacr`
      },
      {
        name: `twitter`,
        url: `https://carlosvillalobos.design`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ['/introduction', '/codeblock'],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document`, options: {} }]
};

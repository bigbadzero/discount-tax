import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `discount-tax`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // GraphQL IntelliSense and type generation
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        // Replace with your actual Google Analytics tracking ID
        trackingIds: ["G-XXXXXXXXXX"], 
        pluginConfig: {
          head: true, // Add the tracking script to the head
          respectDNT: true, // Respect Do Not Track settings in the browser
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

export default config;

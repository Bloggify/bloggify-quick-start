"use strict";

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    metadata: {
        siteTitle: "Ionică Bizău"
      , description: "Web Developer, <i class=\"fa fa-linux\"></i> Linux geek and <i class=\"fa fa-music\"></i> Musician"
      , domain: isProduction ? "https://ionicabizau.net" : "http://localhost:8080"
      , twitter: "IonicaBizau"
    }
  , theme: {
        path: "/node_modules/bloggify-theme-light/"
    }
  , pluginConfigs: {
        "bloggify-plugin-manager": {
            plugins: [
                "bloggify-router",
                "bloggify-ajs-renderer",
                "bloggify-viewer"
            ]
        }
    }
};

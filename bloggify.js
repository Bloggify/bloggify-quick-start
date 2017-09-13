"use strict";

module.exports = {
    title: "Bloggify Starter"
  , description: "Welcome to Bloggify Starter!"
  , domain: "https://example.com"
  , plugins: [
      "emoji"
    , ["markdown-highlight", { theme: "ascetic" }]
    ]
    // This will enable the Articles/Pages APIs
  , adapter: ["bloggify-markdown-adapter", {
        theme: ["theme-light", {
            options: {
                social: {
                    twitter: "Bloggify"
                }
            }
        }]
    }]
}

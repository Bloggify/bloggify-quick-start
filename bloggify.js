"use strict";

const conf = require("bloggify-config");

module.exports = conf({
    title: "Bloggify Starter"
  , description: "Welcome to <strong>Bloggify Starter</strong>!"
  , domain: "https://example.com"
  , theme: "bloggify-theme-light"
}, {
    theme: {
        social: {
            github: "Bloggify",
            twitter: "Bloggify"
        }
    }
});

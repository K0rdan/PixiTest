const path = require("path");

module.exports = {
  extends: "airbnb-base",
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  plugins: ["react", "prettier"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
};

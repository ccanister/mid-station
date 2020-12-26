const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  configureWebpack() {
    return {
      resolve: {
        alias: {
          "@": resolve("src"),
          "*": resolve("")
        }
      }
    };
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [resolve("src/assets/style/global.less")]
    }
  },
  devServer: {}
};

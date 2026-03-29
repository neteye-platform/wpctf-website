module.exports = {
  publicPath: "./",
  devServer: {
    https: true,
    disableHostCheck: true,
    // port: 80,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "src/assets/scss/main.scss";`,
      },
    },
  },
};

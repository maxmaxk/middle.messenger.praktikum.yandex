const devConfig = {
  devServer: {
    port: 3000,
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: "/" },
      ],
    },
  },
  mode: "development",
};

module.exports = devConfig;

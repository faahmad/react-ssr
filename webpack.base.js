module.exports = {
  // Tell webpack to automatically resolve these extensions
  // so that we don't need to include in import path
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};

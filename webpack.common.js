const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  optimization: {
    minimize: false,
  },
  entry: {
    index: "./src/index.js",
    "index.min": "./src/index.js",
    demo: "./demo/index.js",
    "index.css": "./demo/index.css"
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "[name].js",
    library: "lib",
    libraryTarget: "umd",
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      exclude: /index.js/,
      include: /index.min.js/,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader',],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader']
      }
    ]
  },
};

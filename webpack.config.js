const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry:'./src/index.js',
  mode: 'development',
  devtool: "source-map",
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
    },
    { 
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
      loader: "url-loader?limit=10000&mimetype=application/font-woff" 
    },
    { 
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
      loader: "file-loader" 
    },
  ]
  },
  plugins: [
    // Re-generate index.html with injected script tag.
    // The injected script tag contains a src value of the
    // filename output defined above.
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
    // new CopyPlugin({
    //     patterns: [
    //       { from: "source", to: "dest" },
    //       //{ from: "other", to: "public" },
    //     ],
    //   }),

  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 3000
  }
};
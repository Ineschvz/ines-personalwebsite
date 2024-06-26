const path = require("path");
// const HTMLWebpackPlugin = require("html-webpack-plugin"); 

module.exports ={
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname,"./client/index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
      },
      
      module: {
        rules: [
          {
            // test: /\.(js|js)$/,
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          },
          {
            test: /\.(css|scss)$/,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    
      
}
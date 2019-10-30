const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
let firebaseConfig = {
  apiKey: "AIzaSyAiAlWjq2VdmC76M0SOUkP2XjfFlYkAm3c",
  authDomain: "rpgchar-coble.firebaseapp.com",
  databaseURL: "https://rpgchar-coble.firebaseio.com",
  projectId: "rpgchar-coble",
  storageBucket: "",
  messagingSenderId: "1059731447068",
  appId: "1:1059731447068:web:2d5840297d6f5b9f6f2ed9"
};

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
  console.log('XXXXXXXXXXXXXXXXXXXXXX test mode');
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
  console.log('XXXXXXXXXXXXXXXXXXXXXX dev mode');
}

module.exports.debug = true;
module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
        rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': firebaseConfig.apiKey,
        'process.env.FIREBASE_AUTH_DOMAIN': firebaseConfig.authDomain,
        'process.env.FIREBASE_DATABASE_URL': firebaseConfig.databaseURL,
        'process.env.FIREBASE_PROJECT_ID': firebaseConfig.projectId,
        'process.env.FIREBASE_STORAGE_BUCKET': firebaseConfig.storageBucket,
        'process.env.FIREBASE_MESSAGING_SENDER_ID': firebaseConfig.messagingSenderId
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};

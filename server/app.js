//  CONSTANTS
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/appdb';

//  PACKAGE REQUIRES
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect(MONGODB_URI, (err) => {
  console.log(err || `Mongo connected to ${MONGODB_URI}`);
});


//  APP DECLARATION
const app = express();
const server = http.createServer(app);

//  WEBPACK CONFIG
const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));
app.use(require('webpack-hot-middleware')(compiler));

//  GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
//  ROUTES
app.use('/api', require('./routes/api'));

// app.get('*', (req, res) => {
//   const indexPath = path.join(__dirname, '../src/index.html');
//   res.sendFile(indexPath);
// });
//  SERVER LISTEN
server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server listening at http://localhost:${PORT}`);
});

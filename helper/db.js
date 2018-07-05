const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://revjov:2486rj@ds227481.mlab.com:27481/movie-api');
  mongoose.connection.on('open', () => {
    console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', () => {
    console.log('MongoDB: Error', error);
  });

  mongoose.Promise = global.Promise;
  
};

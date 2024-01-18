//Import the mongoose module

var mongoose = require('mongoose');

//Set up default mongoose connection

var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);

// Get Mongoose to use the global promise library
mongoose. Promise = global.Promise;

//Get the default connection

var db = mongoose.connection;


// CONNECTION EVENTS

// When successfully connected
db.on('connected', function() {
console.log('Mongoose default connection done');
});

// If the connection throws an error

db.on('error', function(err) {
console.log('Mongoose default connection error:' + err);
});
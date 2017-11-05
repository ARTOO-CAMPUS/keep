var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var uri = `mongodb://${process.env.user}:${process.env.password}@ds243085.mlab.com:43085`;
mongoose.connect(`${uri}/memos`, { useMongoClient: true }, function (err) {
    if (err) { throw err; }
    console.info('Connection to the database was successfull');
});
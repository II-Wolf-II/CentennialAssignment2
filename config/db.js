//appuser
//jVyGcz5am9az7xsV

let atlasDB = "mongodb+srv://appuser:jVyGcz5am9az7xsV@cluster004assignment2.hbywg.mongodb.net/test"

let mongoose = require ('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB, {useNewUrlParser: true});

    let mongoDb = mongoose.connection;

    mongoDb.on('connected', function() {
        console.log('database is connected successfully');
    });
    mongoDb.on('disconnected',function(){
        console.log('database is disconnected successfully');
    })
    mongoDb.on('error', console.error.bind(console, 'connection error:'));
    module.exports = mongoDb;
    mongoDb.on('error', console.error.bind(console, 'Connection Error: '));
    
    return mongoDb;
}

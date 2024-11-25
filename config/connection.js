var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

var state ={
    db:null
}

MongoClient.connect(url, function(err, data) {
  if (err) throw err;
    state.db= data.db(dbname)
});

module.exports.get=function (){
    return state.db
}
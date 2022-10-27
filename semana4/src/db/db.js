var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

//conectar con la db
mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ciclo4");
    dbo.createCollection("productos", function(err, res) {
      if (err) throw err; //si hay error
      console.log("Collection created!");
      db.close(); //cerrar la conexión con la db
    });
});
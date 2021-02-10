require('dotenv');
const mongoose = require("mongoose");
const db = require("./models");

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/datanexus';

const dataAPIs = require(`./data/dataAPIs/${process.argv[2]}`);
const manifest = require(`./data/manifests/${process.argv[3]}`);

mongoose.connect(
    MONGODB_URI,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);

//EXAMPLE

const collectionName = 'dataAPI';

console.log(collectionName);

db[collectionName].remove()
  .then(() => 
      db.tileLayer
        .insertMany(tileLayers))
        .then(data => {
            // console.log('DB seeded');
            console.log(data);
            process.exit(0);
        })
        .catch(err => {
            console.log(err);
            process.exit(1);
        });


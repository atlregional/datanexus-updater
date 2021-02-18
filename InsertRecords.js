require("dotenv");
const mongoose = require("mongoose");
const db = require("./models");
const handleNoArgs = require("./utils/handleNoArgs");
const csvToJSON = require("csvtojson");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/datanexus";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("\nConnected to DB."))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

const addData = async (collection, directory, file) => {
  const newData =
    directory === "manifests"
      ? await csvToJSON().fromFile(`./data/${directory}/${file}`)
      : require(`./data/${directory}/${file}`);
  db[collection]
    .insertMany(newData)
    .then(() => {
      console.log(`${directory} records succesfully updated`);
      process.exit(1);
    })
    .catch((err) => {
      throw err;
      process.exit(1);
    });
};

// arg2: collection to update, arg3: directory, arg4: file
process.argv[2] && process.argv[3] && process.argv[4]
  ? addData(process.argv[2], process.argv[3], process.argv[4])
  : handleNoArgs();

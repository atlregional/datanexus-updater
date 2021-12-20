require("dotenv").config();
const mongoose = require("mongoose");
const db = require("./models");
const handleNoArgs = require("./utils/handleNoArgs");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/datanexus";

const [ collection, queryField, queryValue] = process.argv.filter((item, i) => i > 1)

console.log(collection, queryField, queryValue)

const findAndDelete = (collection, queryField, queryValue) => {
  db[collection]
    .deleteMany({[queryField] : queryValue})
    .then(res => {
      console.log('Successful delete', res);
      process.exit(0);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });}

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("\nConnected to DB.")
    collection && queryField && queryValue
      ? findAndDelete(collection, queryField, queryValue)
      : handleNoArgs();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
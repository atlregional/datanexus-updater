require("dotenv");
const mongoose = require("mongoose");
const db = require("./models");
const csvToJSON = require("csvtojson");
const handleNoArgs = require("./utils/handleNoArgs");

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

const insertDataAPIs = async (data) => {
  await db.dataAPI
    .insertMany(data)
    .then(() => console.log("\nSuccessfully Inserted: DataAPIs\n"))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

const updateGeoAPIsDataAPI = async (newDataAPIKeys, geoAPIsToUpdate) => {
  console.log("Updating geoAPIs...\n");
  await geoAPIsToUpdate.forEach((updateId) => {
    db.geoAPI
      .updateOne({ _id: updateId }, { $push: { dataAPIs: newDataAPIKeys } })
      .then((res) =>
        res.ok === 1 ? console.log(`Successfully Updated: ${updateId}`) : null
      )
      .catch((err) => console.log(err));
  });
};

const insertManifest = async (data) => {
  await db.dataManifest
    .insertMany(data)
    .then(() => console.log("\nSuccessfully Inserted: Manifest"))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

const updateDefaultConfig = async (newDataAPIKeys) => {
  await db.defaultConfig
    .updateOne({ name: "default" }, { $push: { dataAPIs: newDataAPIKeys } })
    .then((res) => {
      res.ok === 1
        ? console.log("\nSuccessfully Updated: defaultConfig.dataAPIs")
        : null;

      console.log("\nNew Data Set Added\n");
      process.exit(0);
    });
};

const init = async (dataAPIsFile, manifestCSV, geosArr) => {
  try {
    const newDataAPIs = require(`./data/dataAPIs/${dataAPIsFile}`);
    const manifestPath = `./data/manifests/${manifestCSV}`;
    const geoAPIsToUpdate = require(`./update/${geosArr}`);

    const newDataAPIKeys = newDataAPIs.map((api) => api._id);
    const newManifestJSON = await csvToJSON().fromFile(manifestPath);

    await insertDataAPIs(newDataAPIs);

    await updateGeoAPIsDataAPI(newDataAPIKeys, geoAPIsToUpdate);

    await insertManifest(newManifestJSON);

    await updateDefaultConfig(newDataAPIKeys);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

// arg2: New DataAPI File, arg3: Manifest CSV, arg4: Array of GeoAPIs to update with newly added DataAPIs
// arg4 should be an exported array located in the 'update' directory
process.argv[2] && process.argv[3] && process.argv[4]
  ? init(process.argv[2], process.argv[3], process.argv[4])
  : handleNoArgs();

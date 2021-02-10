const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stringAttributes = [
    "_id",
    "url",
    "type",
    "source",
    "geoField",
    "joinField"
];

const dataAPISchemaObj = new Object;

stringAttributes.forEach(attribute => 
    dataAPISchemaObj[attribute] = {type: String});

const dataAPISchema = new Schema(dataAPISchemaObj)

const dataAPI = mongoose.model('dataapi', dataAPISchema);

module.exports = dataAPI;
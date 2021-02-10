const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stringAttributes = [
    '_id',
    'url',
    'source',
    'currentAsOf',
    'geoField',
    'geoQuery',
    'geoQueryForDataAPI',
    'joinField',
    'type',
    'boundingGEO',
    'label'
];

const booleanAttributes = [
    'constructedURL',
]

const arrayAttributes = [
    'otherFields',
    'dataAPIs',
    'preFilters'
];

const objectAttributes = [
    'filter'
]
 
const geoAPISchemaObj = new Object;

stringAttributes.forEach(attribute => 
    geoAPISchemaObj[attribute] = {type: String});

arrayAttributes.forEach(attribute => 
    geoAPISchemaObj[attribute] = {type: Array});

objectAttributes.forEach(attribute => 
    geoAPISchemaObj[attribute] = {type: Object});

booleanAttributes.forEach(attribute => 
    geoAPISchemaObj[attribute] = {type: Boolean});

const geoAPISchema = new Schema(geoAPISchemaObj)

const geoAPI = mongoose.model('geoapi', geoAPISchema);

module.exports = geoAPI;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const queryableAttributes = [
    'Variable', 
    'Description',
    'Type',
    'API',
    'Category',
    'Topic',
    'Long'
];

const otherAttributes = [
    'ESTMOE',
    'Source',
    'Release',
    'Table',
    'Table2',
    'Years',
    'API',
]

const dataManifestSchemaObj = {};

queryableAttributes.forEach(attribute => 
    dataManifestSchemaObj[attribute] = {type: String || Array});

otherAttributes.forEach(attribute => 
        dataManifestSchemaObj[attribute] = {type: String});
    

const dataManifestSchema = new Schema (dataManifestSchemaObj);


const dataManifest = mongoose.model('dataManifest', dataManifestSchema);

module.exports = dataManifest;
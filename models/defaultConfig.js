const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const defaultConfigSchema = new Schema ({
    style: {type: Object, required: true},
    states: {type: Object, required: true},
    name: {type: String, required: true},
    geoAPIs: [{type: Schema.Types.String, ref: 'geoapi'}],
    dataAPIs: [{type: Schema.Types.String, ref: 'dataapi'}],
    tileLayers: [{type: Schema.Types.String, ref: 'tilelayer'}]
});

const defaultConfig = mongoose.model('defaultConfig', defaultConfigSchema);

module.exports = defaultConfig;
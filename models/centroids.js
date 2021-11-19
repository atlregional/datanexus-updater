const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const centroidsSchema = new Schema({
	_id: { type: String },
	centroids: { type: Object }
});

const centroids = mongoose.model('centroid', centroidsSchema);

module.exports = centroids;
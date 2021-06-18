const {Schema, model} = require('mongoose');

const pokemonSchema = new Schema({
	name: {type: String, required: true},
	img: {type: String, required: true}
})

const Pokemon = model('Pokemon', pokemonSchema);

module.exports = Pokemon;

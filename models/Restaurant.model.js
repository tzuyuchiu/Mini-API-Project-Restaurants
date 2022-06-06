const { Schema, SchemaTypes, model } = require('mongoose');

const restaurantSchema = new Schema({
  name: String,
  genre: String,
  address: String,
  zipcode: String,
  numberOfRestaurantInParis: Number,
});

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;

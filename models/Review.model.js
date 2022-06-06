const { Schema, SchemaTypes, model } = require('mongoose');

const reviewSchema = new Schema({
  restaurant: {
    type: SchemaTypes.ObjectId,
    ref: 'Restaurant',
  },
  rate: { type: Number, min: 0, max: 5 },
});

const Review = model('Review', reviewSchema);

module.exports = Review;

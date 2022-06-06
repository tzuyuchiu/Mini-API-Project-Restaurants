const router = require('express').Router();
const Review = require('../models/Review.model.js');
const Restaurant = require('../models/Restaurant.model.js');
const { default: mongoose } = require('mongoose');

router.post('/', async (req, res, next) => {
  try {
    const createOneReview = await Review.create(req.body);

    res.status(201).json({
      message: 'created',
      restaurant: createOneReview,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const findListOfReview = await Review.find().populate('restaurant');
    res.json(findListOfReview);
  } catch (error) {
    next(error);
  }
});
module.exports = router;

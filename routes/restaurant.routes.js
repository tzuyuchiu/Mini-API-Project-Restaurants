const router = require('express').Router();
const Restaurant = require('../models/Restaurant.model.js');
// const restaurants = [
//   {
//     name: 'Le_37m2',
//     genre: 'Taiwanese',
//     adress: '64 Rue Sainte-Anne, 75002 Paris',
//   },
//   {
//     name: 'Udon_Jubey',
//     genre: 'Japanese',
//     adress: ' 39 Rue Sainte-Anne, 75001 Paris',
//   },

//   {
//     name: 'Fondue9',
//     genre: 'Chinese',
//     adress: ' 93 Rue Baudricourt, 75013 Paris',
//   },
// ];
router.post('/', async (req, res, next) => {
  try {
    const restaurant = req.body;
    if (!restaurant.name) {
      res.status(400).json({
        message: 'Restaurant name not provided',
      });
      return;
    }

    const addOneRestaurant = await Restaurant.create(restaurant);

    res.status(201).json({
      message: 'created',
      restaurant: addOneRestaurant,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const findListOfRestaurant = await Restaurant.find();
    res.json(findListOfRestaurant);
  } catch (error) {
    next(error);
  }
});

// route parameters
// GET /restaurants/:name
// router.get('/:name', (req, res, next) => {
//   const resName = req.params.name;
//   const restaurant = Restaurant.find((x) => x.name === resName);
//   if (!restaurant) {
//     next();

//     return;
//   }
//   res.json(restaurant);
// });

// POST /restaurants
// router.post('/', (req, res, next) => {
//   const restaurant = req.body;
//   restaurants.push(req.body);
//   if (!restaurant.name || typeof restaurant.name !== 'string') {
//     res.status(400).json({
//       message: 'Restaurant name not provided',
//     });
//     return;
//   }

//   res.status(201).json({
//     message: 'received',
//     body: req.body,
//   });
// });

module.exports = router;

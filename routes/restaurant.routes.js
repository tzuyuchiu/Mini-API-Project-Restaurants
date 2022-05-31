const router = require('express').Router();

const restaurants = [
  {
    name: 'Le 37m2',
    genre: 'Taiwanese',
    adress: '64 Rue Sainte-Anne, 75002 Paris',
  },
  {
    name: 'Udon Jubey',
    genre: 'Japanese',
    adress: ' 39 Rue Sainte-Anne, 75001 Paris',
  },

  {
    name: 'Fondue 9',
    genre: 'Chinese',
    adress: ' 93 Rue Baudricourt, 75013 Paris',
  },
];

// GET /
// return a list of all restaurants
router.get('/restaurants', (request, response) => {
  response.json({
    restaurants: restaurants,
  });
});

module.exports = router;

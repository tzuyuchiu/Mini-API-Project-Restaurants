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
    name: 'Fondue',
    genre: 'Chinese',
    adress: ' 93 Rue Baudricourt, 75013 Paris',
  },
];

// GET /
// return a list of all restaurants
router.get('/', (request, response) => {
  response.json({
    restaurants: restaurants,
  });
});

// route parameters
// GET /restaurants/:name
router.get('/:name', (request, response) => {
  const resName = request.params.name;
  const restaurant = restaurants.find((x) => x.name === resName);
  response.json(restaurant);
});

// POST /restaurants
router.post('/', (request, response) => {
  const restaurant = request.body;
  restaurants.push(request.body);
  response.status(201).json({
    message: 'received',
    body: request.body,
  });
});

module.exports = router;

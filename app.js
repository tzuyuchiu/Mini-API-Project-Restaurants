const express = require('express');
const app = express();
require('./db');

app.use(express.json());

const restaurantRoute = require('./routes/restaurant.routes');
app.use('/restaurants', restaurantRoute);
const reviewRoute = require('./routes/review.routes');
app.use('/reviews', reviewRoute);
const addErrorHandling = require('./error-handling.js');
addErrorHandling(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

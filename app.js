const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const restaurantRouter = require('./routes/restaurant.routes');
app.use('/restaurants', restaurantRouter);

const addErrorHandling = require('./error-handling.js');
addErrorHandling(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

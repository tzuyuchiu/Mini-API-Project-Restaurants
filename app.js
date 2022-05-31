const express = require('express');
const app = express();
const port = 3000;

// configuration
// use a JSON middleware parser
app.use(express.json());

const restaurantRouter = require('./routes/restaurant.routes');
app.use('/', restaurantRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

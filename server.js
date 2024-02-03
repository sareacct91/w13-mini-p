const express = require('express');
const sequelize = require('./config/connection');
require('express-async-errors');
const morgan = require('morgan');

const mainRoute = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT;

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(mainRoute);
app.use(errorHandler);

(async function () {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}\n`));
  }
  catch (error) {
    console.log(error);
  }
})();
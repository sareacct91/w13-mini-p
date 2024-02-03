const express = require('express');
require('express-async-errors');
const morgan = require('morgan');

const sequelize = require('./config/connection');
const mainRoute = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const loginValidate = require('./middlewares/auth');

const app = express();
const PORT = process.env.PORT;

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(loginValidate);

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
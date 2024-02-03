module.exports = function (err, req, res, next) {
  console.log(err.name, '\n');
  console.log(err);

  const errResponse = {
    status: err.statusCode || 500,
    message: err.message || 'Something went wrong. Try again later'
  };

  if (err.name === 'SequelizeValidationError') {
    errResponse.message = 'Something went wrong. Try again later'
  }

  res.status(errResponse.status).json({msg: errResponse.message});
};
module.exports = function (err, req, res, next) {
  console.log(err);

  const response = {
    status: 500,
    message: 'Try again later'
  };

  if (err.message === 'bad request' || err.statusCode === 400) {
    response.status = 400;
    response.message = 'Missing data';
  }

  res.status(response.status).json({msg: response.message});
};
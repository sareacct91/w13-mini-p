const { Traveller } = require("../models");
const auth = require('basic-auth');
const bcrypt = require('bcrypt');
const { UnauthorizedError } = require("../errors");


async function loginValidate(req,res,next) {

  if (!req.authentication) {
    throw new UnauthorizedError('Bad credential');
  }

  const { name, pass } = auth(req);
  console.log(name, '\n', pass);

  const { password } = await Traveller.findOne({
    where: {
      email: name
    }
  })

  if (!password) {
    throw new UnauthorizedError('Bad credential');
  }

  if (await bcrypt.compare(pass, password)) {
    next();
  } else {
    throw new UnauthorizedError('Bad credential');
  }
}

module.exports = loginValidate;
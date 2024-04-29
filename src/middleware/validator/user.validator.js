const Joi = require('joi');

const updateUserSchemaValidator = Joi.object({
	bio: Joi.string().max(1000),
})

module.exports.updateUserValidator = (req, res, next) => {
	const { error } = updateUserSchemaValidator.validate(req.body);
  if (error) {
    res.status(400).json(error);
  } else {
    next();
  }
}

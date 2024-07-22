const yup = require('yup');

const updateUserSchemaValidator = yup.object().shape({
	lastname: yup.string().max(50),
	firstname: yup.string().max(50),
	bio: yup.string().max(1000),
	birthday: yup.date().max(new Date(new Date().setFullYear(new Date().getFullYear() - 18))),
});

module.exports.updateUserSchemaValidator = updateUserSchemaValidator;
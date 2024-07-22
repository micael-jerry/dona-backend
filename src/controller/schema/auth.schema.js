const yup = require('yup');

const signUpValidatorSchema = yup.object().shape({
	pseudo: yup.string().min(3).max(50).required(),
	email: yup.string().email().required(),
	password: yup.string().min(6).required(),
	lastname: yup.string().max(50).required(),
	firstname: yup.string().max(50).required(),
	bio: yup.string().max(1000),
	birthday: yup
		.date()
		.max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)))
		.required(),
});

const loginValidatorSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(6).required(),
});

module.exports.signUpValidatorSchema = signUpValidatorSchema;
module.exports.loginValidatorSchema = loginValidatorSchema;

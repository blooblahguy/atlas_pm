const Joi = require('@hapi/joi')

module.exports = {
	register (req, res, next) {
		const schema = {
			email: Joi.string().email(),
			password: Joi.string().regex(
				new RegExp('^[a-zA-Z-0-9]{6,32}$')
			)
		}

		const {error, vaule} = Joi.validate(req.body, schema)

		if (error) {
			switch (error.details[0].context.key) {
				case 'email': 
					res.status(400).send({
						error: 'Invliad email address'
					})
					break; 
				case 'password':
					res.status(400).send({
						error: 'Password must be alphanumeric and between 6 and 32 characters'
					})
					break; 
				case 'default': 
				res.status(400).send({
					error: "Invalid or failed registration"
				})
			}
		} else {
			next()
		}
	}
}
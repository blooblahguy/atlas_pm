const {User} = require('../models')
const jwt = require("jsonwebtoken")
const config = require("../config/config")

function jwtSignUser (user) {
	const ONE_WEEK = 60 * 60 * 24 * 7
	return jwt.sign (user, config.authentication.jwtSecret, {
		expiresIn: ONE_WEEK
	})
}

module.exports = {
	async register (req, res) {
		try {
			const user = await User.create(req.body)
			const userJson = user.toJSON()
			res.send({
				user: user.toJSON(),
				token: jwtSignUser(userJson)
			})
		} catch (err) {
			// email already exists
			res.status(400).send({
				error: "This email account is already in use."
			})
		}
	},
	async login (req, res) {
		try {
			const {email, password} = req.body
			const user = await User.findOne({
				where: {
					email: email
				}
			})
			if (! user) {
				res.status(403).send({
					error: 'The login information provided is incorrect.'
				})
			}

			const isPasswordValid = await user.comparePassword(password)
			if ( ! isPasswordValid ) {
				res.status(403).send({
					error: 'The login information provided is incorrect.'
				})
			}

			const userJson = user.toJSON()
			res.send({
				user: user.toJSON(),
				token: jwtSignUser(userJson)
			})
		} catch (err) {
			// email already exists
			res.status(500).send({
				error: 'There was an error authenticating credentials.'
			})
		}
	}
}
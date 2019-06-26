module.exports = {
	port: process.env.PORT || 8081,
	db: {
		database: process.env.DB_NAME || "atlas_pm",
		user: process.env.DB_USER || "atlas_pm",
		password: process.env.DB_PASS || "atlas_pm",
		options: {
			dialect: process.env.DIALECT || 'sqlite',
			host: process.env.HOST || 'localhost',
			storage: "./atlas_pm.sqlite"
		}
	}
}
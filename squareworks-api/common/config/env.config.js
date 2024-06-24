export default {
	"port": 3600,
	"db": {
		"host"     : process.env.DB_HOST,
		"user"     : process.env.DB_USER,
		"password" : process.env.DB_PASSWD,
		"database" : process.env.DB_SCHEMA,
		"connectionLimit": process.env.CONNECTION_LIMIT
	},
	"api": {
		"route": "/sw-api",
		"weather":{
			"route":"/weather"
		}
	}
}
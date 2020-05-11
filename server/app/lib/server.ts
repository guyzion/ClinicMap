// lib/server.ts
const sql = require('mssql')

import app from "./app";
const PORT = 3000;

app.listen(PORT, () => {
	console.log('Express server listening on port ' + PORT);
	async () => {
		try {
			// make sure that any items are correctly URL encoded in the connection string
			// await sql.connect('mssql://username:password@localhost/database?encrypt=true')
			// const result = await sql.query`select * from mytable where id = ${value}`
			// console.dir(result)
		} catch (err) {
			// ... error checks
		}
	}
})
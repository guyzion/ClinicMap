// lib/app.ts
import express = require('express');
// Create a new express application instance
class App {
	public app: express.Application;

	constructor(){
		this.app = express();
	}
}


export default new App().app;
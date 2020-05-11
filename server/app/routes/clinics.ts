import app from "../lib/app";
import Clinic from "../models/clinic.model";

app.get('/clinics', function (req, res) {
	const clinics = [new Clinic()];
	res.send(clinics);
});
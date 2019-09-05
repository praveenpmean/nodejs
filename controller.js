const fs = require('fs');
const envfile = require('envfile');
const path = require('path');

// Get list of Env variables
exports.index = function(req, res) {
	var filePath = path.join(__dirname, req.params.folder, '.env');
	if (fs.existsSync(filePath)) {
		var result = envfile.parseFileSync(filePath);
		return res.status(200).send(result);
	}else res.status(404).send("Process not found")
}
// Update Env variable
exports.update = function(req, res) {
	var filePath = path.join(__dirname, req.params.folder, '.env');
	if (fs.existsSync(filePath)) {
		let envData = envfile.parseFileSync(filePath);
		envData[req.params.key] = req.params.value;
		fs.writeFileSync(filePath, envfile.stringifySync(envData));
		var result = envfile.parseFileSync(filePath);
		return res.status(200).send(result);
	}else res.status(404).send("Process not found")
};
const express = require('express')
const app = express()
const server = require('http').createServer(app);
const controller = require("./controller.js"); // Custome Funtions 
const cors = require('cors');
const path = require('path');
app.use(cors());

app.get('/api/:folder', controller.index);
app.post('/api/:folder/:key/:value', controller.update);
app.use('/', express.static(path.join(__dirname, 'public')))
// Start server
server.listen(8002, function (req, res) {
  console.log('Express server listening on %d', 8002 );
});
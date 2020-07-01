const express = require('express');
const http = require('http');
const path = require('path');

let app = express();

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`running on localhost`));
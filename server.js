const express = require('express');
// const http = require('http');
// const path = require('path');

const app = express();
const PORT = process.env.PORT || '8080';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("./build"));
  }

// app.set('port', port);

// const server = http.createServer(app);
// server.listen(port, () => console.log(`running on localhost`));
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
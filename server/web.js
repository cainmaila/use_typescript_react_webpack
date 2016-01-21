"use strict";
var express = require('express');
var path = require('path');
var port = process.env.PORT || 8080;
var app = express();
app.use(express.static('dist'));
app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../', 'dist/index.html'));
});
app.listen(port, function () {
    console.log("server in " + port + " port");
});

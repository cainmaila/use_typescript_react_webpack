/// <reference path="../typings/express/express.d.ts" />
import * as express from 'express';
import * as path from 'path';
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static('dist'));
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'dist/index.html'));
});
app.listen(port, () => {
    console.log("server in " + port + " port");
});

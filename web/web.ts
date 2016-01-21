
var express = require('express');
var path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static('dist'));
app.get('*', (req: any, res) => { //
    console.log(req.session);
    res.sendFile(path.join(__dirname, '../','/dist/index.html'));
});
app.listen(port, () => {
    console.log("server in " + port + " port");
});

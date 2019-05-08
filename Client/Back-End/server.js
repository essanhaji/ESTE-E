const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require("cors");

var users = require ("./route/users");

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/api', users);


app.listen(port, () => console.log(`listening on http://localhost:${port}`));

const http = require('http');

const express = require('express');

const bodyParser = require("body-parser");

const app = express();

// app.use((req, res, next) => {
//     res.send('<h1>Chat app</h1>');
// })

const adminRoutes = require("./routes/admin");

const loginRoutes = require("./routes/login");

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);

app.use('/login', loginRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);
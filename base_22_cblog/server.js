/**
 * Created by easterCat on 2017/10/18.
 */
const path = require('path');
const express = require('express');
const indexRouter = require('./routes/index');
const app = express();

app.use(express.static(path.join(__dirname, "./public/dist")));

app.use('/', indexRouter);

app.listen(3000, () => {
    console.log('server running in localhost:3000');
});
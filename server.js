const express = require("express");
const app = require('./src/app');

app.use(express.static("uploads"));

app.listen(5000, () => {
    console.log("App is listening on port 5000");

});


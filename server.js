const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = 4000;
const app = express()
app.listen(port, (res) => {
    console.log('Listening on port ', port)
})

app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

//Database connectivity
const url = 'mongodb://localhost:27017/orders'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.once("open", (_) => {
    console.log("Database connected:", url);
});
db.on("error", (err) => {
    console.error("connection error:", err);
});

// Imports routes for the products
const ordersDetails = require("./routes/serviceOrders");
app.use("/api/v1", ordersDetails);


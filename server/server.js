/**
 * @file server.js
 * @author Annie Tiet
 */

 const { application } = require('express');
 const express = require('express');
 const mongoose = require('mongoose');
 const cors = require('cors');
 const helmet = require('helmet');
 require('dotenv/config')

 const app = express();
 const PORT = process.env.PORT || 8080;

 const pictureRoute = require("./routes/pictureRoute")
 
 // connect to mongoDB
 mongoose.connect(process.env.MONGODB_URI, 
     { useNewUrlParser: true, useUnifiedTopology: true },
     () => console.log('connected to mongoDB!'));
 
 app.use(cors());
 app.use(helmet());
 app.use(function (err, req, res, next) {
     return res.status(500);
 })
 
// routes
app.use('/pictures', pictureRoute);

 app.get('/', (req, res) => {
     return res.send('home');
 });
 
 const server = app.listen(PORT, function () {
     const port = server.address().port;
     console.log("server listening on ", PORT);
 })
 
 module.exports = app;
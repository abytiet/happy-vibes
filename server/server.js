 const express = require('express');
 const mongoose = require('mongoose');
 const cors = require('cors');
 const helmet = require('helmet');
 const bodyParser = require('body-parser');
 const compression = require('compression');
 require('dotenv/config')

 const app = express();
 const PORT = process.env.PORT || 8080;

 const pictureRoute = require("./routes/pictureRoute")
 const captionRoute = require("./routes/captionRoute");

 // connect to mongoDB
 mongoose.connect(process.env.MONGODB_URI, 
     { useNewUrlParser: true, useUnifiedTopology: true },
     () => console.log('connected to mongoDB!'));
 
 app.use(cors());
 app.use(helmet());
 app.use(bodyParser.json());
 app.use(compression());
 app.use(function (err, req, res, next) {
     return res.status(500);
 })
 
// routes
app.use('/pictures', pictureRoute);
app.use('/captions', captionRoute);

app.get('/', (req, res) => {
    return res.send('happy-vibes content server');
});
 
 const server = app.listen(PORT, function () {
     const port = server.address().port;
     console.log("server listening on ", PORT);
 })
 
 module.exports = app;
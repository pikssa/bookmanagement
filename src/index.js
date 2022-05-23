// const express = require('express');
// const bodyPaser = require('body-parser');
// const route = require('./routes/route.js');
 const { default : mongoose } = require('mongoose');
 //const bodyParser = require('body-parser');
//const app = express();
const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

const multer= require("multer");
const { AppConfig } = require('aws-sdk');

//  app.use(bodyParser.json());
//  app.use(bodyParser.urlencoded({ extended : true }));

 mongoose.connect("mongodb+srv://FunctionUp-cohort-1:TENBQZypGNobyoq3@cluster0.7jbgo.mongodb.net/newPk-DB?retryWrites=true&w=majority", {
   useNewUrlParser: true
})
 .then( () => console.log("MongoDb is connected"))   // it passes the function when the promises gets resolved
 .catch ( err => console.log(err) )

// // app.use (
// //     function (req, res, next) {
// //         console.log ("inside GLOBAL MW");
// //         next();
// //   }
// //   );
// // console.log(5)
// app.use('/', route);


// app.listen(process.env.PORT || 3000, function () {
//     console.log('Express app running on port ' + (process.env.PORT || 3000))
// });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( multer().any())

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
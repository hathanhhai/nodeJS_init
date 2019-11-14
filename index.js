//library
var CONFIG = require('./config');
var express = require('express');
var app = express();
var routers = require('./src/webs/routers')
var cookieParser = require('cookie-parser');
var server = app.listen(CONFIG.PORT,()=>console.log(`Server Listening Port ${CONFIG.PORT}`));
var bodyParser = require('body-parser');
var MONGODB = require('./src/databases/mongodb');

/*----------------MongoDB---------------*/
if(CONFIG.MONGODB){
    var mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb://${MONGODB.DB_USERNAME}:${MONGODB.DB_PASSWORD}@${MONGODB.DB_HOST}:${MONGODB.DB_PORT}/${MONGODB.DB_NAME}`, {useNewUrlParser: true,useUnifiedTopology: true}).then(() =>console.log('connection succesful')).catch((err) => console.error(err));
}
/*----------------END.MongoDB---------------*/


/*----------------SOCKET---------------*/
if(CONFIG.SOCKET)
require('./sockets/io')(require("socket.io")(server))
/*----------------END.SOCKET---------------*/





/*----------------USE---------------*/
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/',routers)
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/*----------------END.USE---------------*/










module.exports = app;
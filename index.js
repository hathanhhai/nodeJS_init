//library
var CONFIG = require('./config');
var express = require('express');
var app = express();
var routers = require('./src/webs/routers')
var cookieParser = require('cookie-parser');
var server = app.listen(CONFIG.PORT,()=>console.log(`Server Listening Port ${CONFIG.PORT}`));


/*----------------SOCKET---------------*/
if(CONFIG.SOCKET)
require('./sockets/io')(require("socket.io")(server))
/*----------------END.SOCKET---------------*/




/*----------------USE---------------*/
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/',routers)
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/*----------------END.USE---------------*/










module.exports = app;
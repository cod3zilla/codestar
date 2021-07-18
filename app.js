require('dotenv').config()
const express=require('express')
const ejs=require('ejs')
const path=require('path')
const session=require('express-session')
const cookieParser=require('cookie-parser')
const nodemailer=require('nodemailer')
const homeRouter=require('./routes/homeRoute')
 

var sessionStore = new session.MemoryStore;
const app=express()
port=process.env.PORT ||5000
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use('/public/', express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));

/// set middle ware for session
app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 60000 },
    store: sessionStore,
    saveUninitialized: true,
    resave: 'true',
    secret: process.env.SECRET
}));

app.use(function(req, res, next){
  // if there's a flash message in the session request, make it available in the response, then delete it
  res.locals.sessionFlash = req.session.sessionFlash;
  delete req.session.sessionFlash;
  next();
});

// Home routes
app.use('/',homeRouter);

  
// listening port
app.listen(port,console.log(`server is available on:${port}`))
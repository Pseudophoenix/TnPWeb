const express=require('express');
const homeRoutes = require('./routes/home');
const path=require('path');
const fs=require('fs');
const formRouter = require('./routes/form');
const app=express();
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,"public")));
app.use(homeRoutes);
app.use(formRouter);
app.set('view engine','ejs');
app.set('views','views');
app.use((req,res,next)=>{
    console.log('Initial Page');
    next();
});

app.listen(3000);

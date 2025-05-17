require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const homeRoutes = require('./routes/home');
const path = require('path');
const fs = require('fs');
const authRoutes = require('./routes/auth');
const formRoutes = require('./routes/form');
const profileRoutes=require('./routes/profile');
const app = express();
// Middleware

const corsOptions = {
    origin: [
        'http://localhost:5000',
        'http://localhost:5173',
        'http://localhost:53589',
        'http://localhost:59458',
        'http://127.0.0.1:5000',
        'http://127.0.0.1:53589',
        'http://127.0.0.1:59458',
        'http://10.0.2.2:5000'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // if you need to support cookies/sessions
};

// Use CORS middleware with options (remove the duplicate app.use(cors()))
app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, "public")));
app.use('/api/auth', authRoutes);
app.use(homeRoutes);
app.use(formRoutes);
app.use('/api',profileRoutes);
app.set('view engine', 'ejs');
app.set('views', 'views');
// app.get('/', () => {
//     return res.json({ msg: "Hey" });
// });
app.use((req, res, next) => {
    console.log('Initial Page');
    next();
});

mongoose.connect(process.env.MONGO_DB_URI).then(
    () => console.log("Connected to MongoDB")
).catch(err => console.log(`MongoDB Error : ${err}`));

const PORT = process.env.PORT || 5000;
app.listen(PORT);

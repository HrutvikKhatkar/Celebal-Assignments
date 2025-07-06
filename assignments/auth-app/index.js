const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const authController = require('./controllers/authController');
const protectedRoutes = require('./routes/protected');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/yourdb');

app.post('/api/register', authController.register);
app.post('/api/login', authController.login);
app.use('/api', protectedRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/products/', productRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(()=>{
    console.log('Connected to MongoDB');

    app.listen(process.env.port, ()=>{
        console.log(`Server running on https://localhost:${process.env.port}`)
    })
})
.catch( (err) => {
    console.log('MongoDB connection error:', err);
})

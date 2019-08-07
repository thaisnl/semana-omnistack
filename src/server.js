const express = require('express'),
    routes = require('./routes'),
    mongoose = require('mongoose'),
    cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ccshb.mongodb.net/omnistack?retryWrites=true&w=majority',
{ useNewUrlParser: true });

app.use(express.json());
app.use(routes);

app.use(cors());

app.listen(3333, () => {
    console.log('Server is running.');
});
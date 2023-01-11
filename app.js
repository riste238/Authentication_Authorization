const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsOptions.js');
const app = express();
const PORT = process.env.PORT || 1100;

// app settings about, cors, json & encoded data
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/register', require('./route/register.js'));
app.use('/auth', require('./route/auth.js'));


app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})

const express     = require('express');
const mongoose    = require('mongoose');

const users       = require('./routes/api/users');
const profile     = require('./routes/api/profiles');
const posts       = require('./routes/api/posts');

const app = express();


//db config
const db  = require('./config/keys').mongoURI;

// connet to mongodb
mongoose.connect(db)
    .then(()=> console.log('Mongodb Connected'))
    .catch(err => console.log('err'));

app.get('/', (req, res)=>
    res.send("Welcome homie!")
);


//use routes
app.use('/api/users', users);
app.use('/api/profiles', profile);
app.use('/api/posts', posts)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
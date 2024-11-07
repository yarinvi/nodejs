const express = require('express');
const routes = require('./routes');
const connectDB = require('./lib/connect');
// const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(routes);

//console.log(bcrypt.hashSync('password',15));
console.log(process.env.DATABASE_URL)

app.listen(3000, () => {
    connectDB();
    console.log('Server is running on http://localhost:3000');
});

const express = require('express')
const app = express()
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('dotenv').config()

const db = require('./configs/mongodb/index');

//Kết nối với mongoDB 
db.connect();

app.get('/', (req, res) => {
  res.send('Hello World')
})

const API_V1 = require('./routes/v1/index');
const errHandler = require('./middlewares/errorHandler');

app.use('/v1', API_V1)
app.use(errHandler)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
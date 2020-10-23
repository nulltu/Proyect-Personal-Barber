const express = require('express')
require('dotenv').config()
const cors = require('cors')
require('./config/db')
const app = express()
const router = require('./routes/routes')
const fileUpload = require('express-fileupload')
const path = require('path')
const port = process.env.PORT
host = process.env.HOST || '0.0.0.0'

app.use(cors())
app.use(express.json())
app.use(fileUpload())
// app.use('/uploads', express.static(`${__dirname}/uploads`))



app.use('/api', router)

app.listen(port, host, ()=> console.log("server listening on port" + port))
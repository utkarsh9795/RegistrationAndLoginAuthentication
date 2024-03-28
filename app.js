import express from 'express'
import connectDB from './db/connectdb.js'
import web from './routes/web.js'
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database connection
connectDB(DATABASE_URL)

// Set Template Engine
app.set('view engine', 'ejs')

// middleware
  app.use(express.urlencoded({extended: true}));

// load routes
app.use('/',web)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
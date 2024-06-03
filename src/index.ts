import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

//app
const app = express()
const port = process.env.PORT || 3000

//middleware
app.use(express.json())

//routes

//mongo

//server start
app.listen(port, () => console.log(`Server is listening on port ${port}`))

const express = require('express')
const app = express()
const userRoute = require('./Routes/userRoute')
const chatRoute = require('./Routes/chatRoute')
const messageRoute = require('./Routes/messageRoute')
const {notFound,errorHandler}=require('./Middleware/errorMiddleware')
const cors = require('cors')
app.use(cors(
  {
    origin: process.env.CORS_URL,
    credentials: true
}
))
app.use(express.json())
app.use("/chatApp/user", userRoute)
app.use("/chatApp/chat", chatRoute)
app.use("/chatApp/message", messageRoute)

app.use(notFound);
app.use(errorHandler);
module.exports = app;

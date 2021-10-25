const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const tasksRouter = require("./routers/taskRouter");
const userRouter = require("./routers/userRouter");

const app = express();

app.use(express.json())
app.use(morgan("combined"));
app.use(cors())
app.use(tasksRouter)
app.use(userRouter)


module.exports = app
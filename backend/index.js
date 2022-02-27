const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors=require('cors')
const userRoute = require("./route/user.router");
app.use(cors())
app.use(express.json());
mongoose
  .connect(
    'mongodb+srv://Admin:Admin%401234@cluster0.d71fi.mongodb.net/PrepareWithUs?retryWrites=true&w=majority'
  )
  .then((res) => {
    console.log("Connected to DB");
  });
app.use("/api/user", userRoute);
const port = 5000;
app.listen(port, () => {
  console.log("Server Started...");
});

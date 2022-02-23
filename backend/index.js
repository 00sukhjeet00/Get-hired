const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./route/user.router");
app.use(express.json());
mongoose
  .connect(
    `mongodb+srv://admin:Admin%401234@cluster0.p26f9.mongodb.net/PrepareWithUs?retryWrites=true&w=majority`,
    // { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then((res) => {
    console.log("Connected to DB");
  });
app.use("/api/user", userRoute);
const port = 5000;
app.listen(port, () => {
  console.log("Server Started...");
});

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(() => {
    console.log("Momgo is runnnning");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

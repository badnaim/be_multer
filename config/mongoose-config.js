import mongoose from "mongoose";

const MONGO_CONNECTION_STRING =
  "mongodb+srv://batnyam17:batnyam17@cluster0.gfvhelw.mongodb.net/ecommerse";

const db = mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then((res) => {
    console.log("mongoose connected");
  })
  .catch(() => {
    console.log(err);
  });

export default db;

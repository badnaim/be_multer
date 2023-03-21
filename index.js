const express = require("express");
const cloudinary = require("./config/cloudinary");
const uploader = require("./multer");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/upload", uploader.single("file"), async (req, res) => {
  const upload = await cloudinary.v2.uploader.upload(req.file);
  return res.json({ success: true, file: upload.secure_url });
});

app.listen(8080);

const express = require("express");
const cors = require("cors");
const multer = require("multer");

const PORT = 8080;
const app = express();
const uploads = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("8080 uploads"));

app.post("/fileUpload", uploads.single("file"), (req, res) => {
  console.log("body", req.body);
  console.log("file", req.file);
});

app.listen(PORT, () => console.log("listening port 8080"));

const express = require("express");
const cors = require("cors");
const multer = require("multer");

const PORT = 8080;
const app = express();
const uploads = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.post("/fileUpload", uploads.single("image"), function (req, res, next) {
  res.send(req.file);
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.listen(PORT, (error) => console.log("listening"));

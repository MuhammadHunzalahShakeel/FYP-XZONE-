const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const shopsRoute = require("./routes/shops");
const advertisementsRoute = require("./routes/advertisements");
const staffRoute = require("./routes/staff");
const parkingRoute = require("./routes/parking");
const dutyRoute = require("./routes/duty");
const FoodCourtRoute = require("./routes/FoodCourt");
const cinemaRoute = require("./routes/Cinema");
const profileRoute = require("./routes/profile");
const multer = require("multer");
const path =require("path");
const cors = require('cors');
app.use(cors());


//storage for images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

//uploading image
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

const sqlScripts = require('./db//sqlscript');
const req = require("express/lib/request");
app.use(express.json());
//app.use(cors);
// app.use("/",(req,res)=>{
//     console.log("hey");
// })
sqlScripts.createAndInsert();
//middleware
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/shops",shopsRoute);
app.use("/api/advertisements",advertisementsRoute);
app.use("/api/staff",staffRoute);
app.use("/api/parking",parkingRoute);
app.use("/api/duty",dutyRoute);
app.use("/api/FoodCourt",FoodCourtRoute);
app.use("/api/cinema",cinemaRoute);
app.use("/api/profile",profileRoute);
app.use("/images",express.static(path.join(__dirname,"/images")))

app.listen("5000", () => {
    console.log("Backend is running.");
  });
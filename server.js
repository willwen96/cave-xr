const express = require("express");
const multer = require("multer");
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

// Create the multer upload middleware
const upload = multer({ storage });

// Enable CORS for all routes
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Define the endpoint for file uploads
app.post("/upload", upload.single("file"), (req, res) => {
    // Access the uploaded file using req.file
    console.log(req.file);
    if (!req.file) {
        throw new Error("No file uploaded");
    }
    res.send("File uploaded successfully.");
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

const express = require("express");
const { animals } = require("./data/animals.json");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());
app.use(express.static("public"));

// use apiRoutes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
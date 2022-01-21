const express = require("express");
const app = express();
const morgan = require("morgan");
const main = require("./views/main.js");
const PORT = 3000;

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send(main());
});

app.listen(PORT, () => {
    console.log("Post is listening.");
});

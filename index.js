const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const parser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000, () => console.log("Server is running in port 3000..."));

var mang = ["NodeJS", "Angular", "ReactJS"];

app.get("/", function (req, res) {
    res.render("trangchu");
});

app.get("/getNotes", (req, res) => {
    res.send(mang);
})

app.post("/add", parser, (req, res) => {
    let newNote = req.body.note;
    mang.push(newNote);
    res.send(mang);
})

app.post("/delete", parser, (req, res) => {
    let id = req.body.idXoa;
    mang.splice(id, 1);
    res.send(mang);
})

app.post("/update", parser, (req, res) => {
    let id = req.body.idSua;
    mang[id] = req.body.noiDung;
    res.send(mang);
})
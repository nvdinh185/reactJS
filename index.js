const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const parser = bodyParser.urlencoded({ extended: false });

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000, () => console.log("Server is running in port 3000..."));


MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("learnJs");
    var mang = [];

    app.get("/", (req, res) => {
        res.render("trangchu");
    });

    app.get("/getNotes", (req, res) => {
        dbo.collection("notes").find({}, { projection: { _id: 0 } }).toArray((err, result) => {
            mang = result;
            // console.log(mang);
            res.send(mang);
        })
    });

    app.post("/add", parser, (req, res) => {
        var note = { id: mang.length, name: req.body.note };
        mang.push(note);
        dbo.collection("notes").insertOne(note, function (err, res) { });
    })

    app.post("/delete", parser, (req, res) => {
        let id = parseInt(req.body.idXoa);
        let myquery = { id: id };
        dbo.collection("notes").deleteOne(myquery, function (err, res) { });
    })

    app.post("/update", parser, (req, res) => {
        let id = parseInt(req.body.idSua);
        let name = req.body.noiDung;
        var myquery = { id: id };
        var newvalues = { $set: { name: name } };
        dbo.collection("notes").updateOne(myquery, newvalues, function (err, res) { });
    })

    // db.close();
});
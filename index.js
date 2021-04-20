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
        dbo.collection("subjects").find({}).toArray((err, result) => {
            if (err) throw err;
            for (let el of result) {
                delete el._id;
            }
            mang = result;
            // console.log(mang);
            res.send(result);
        })
    });

    app.post("/add", parser, (req, res) => {
        let newNote = req.body.note;

        var myobj = { id: mang.length, name: newNote };
        mang.push(myobj);
        dbo.collection("subjects").insertOne(myobj, function (err, res) { });
        res.send(mang);
    })

    app.post("/delete", parser, (req, res) => {
        let id = req.body.idXoa;
        let myquery = { id: parseInt(id) };
        dbo.collection("subjects").deleteOne(myquery, function (err, obj) { });
        let index = -1;
        mang.forEach((el, idx) => {
            if (el.id == id) index = idx;
        });
        if (index > -1) {
            mang.splice(index, 1);
        }
        res.send(mang);
    })

    app.post("/update", parser, (req, res) => {
        let id = req.body.idSua;
        let name = req.body.noiDung;
        var myquery = { id: parseInt(id) };
        var newvalues = { $set: { name: name } };
        dbo.collection("subjects").updateOne(myquery, newvalues, function (err, res) { });
        let index = -1;
        mang.forEach((el, idx) => {
            if (el.id == id) index = idx;
        });
        if (index > -1) {
            mang[index] = { id: parseInt(id), name: name };
        }
        res.send(mang);
    })

    // db.close();
});
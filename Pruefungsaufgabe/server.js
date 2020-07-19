"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pruefungsaufgabe = void 0;
const Http = require("http");
const Url = require("url");
//import { ParsedUrlQuery } from "querystring";
const Mongo = require("mongodb");
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    let orders;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseUrl = "mongodb+srv://Testuser:topsecret@gis-ist-geil.dvjdj.mongodb.net/Eisdiele?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("server starting, port:" + _port);
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Eisdiele").collection("Bestellungen");
        console.log("Database connection" + orders != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let urlWithQuery = Url.parse(_request.url, true);
            console.log("Pathname for this one: " + urlWithQuery.pathname);
            switch (urlWithQuery.pathname) {
                case "/send":
                    orders.insertOne(urlWithQuery.query);
                    break;
                case "/show":
                    _response.write(JSON.stringify(await orders.find().toArray()));
                    break;
                case "/deleteAll":
                    orders.remove({ "anrede": "herr" });
                    orders.remove({ "anrede": "frau" });
                    break;
                case "/addStatusFinished":
                    console.log("Hello, yes. This is: /addStatusFinished");
                    orders.updateOne({ _id: urlWithQuery.query }, { $set: { status: "fertig" } });
                    break;
                case "/addStatusDelivered":
                    console.log("Hello, yes. This is: /addStatusDelivered");
                    orders.updateOne({ _id: urlWithQuery.query }, { $set: { status: "geliefert" } });
                    break;
                case "/removeOne":
                    console.log("Hello, yes. This is: /removeOne");
                    //orders.deleteOne({_id : ObjectId(urlWithQuery.query)});
                    let id = urlWithQuery.query["id"];
                    let objID = new Mongo.ObjectId(id);
                    await orders.deleteOne({ "_id": objID });
                    break;
                default:
                //_response.write(_request.url);
            }
        }
        _response.end();
    }
})(Pruefungsaufgabe = exports.Pruefungsaufgabe || (exports.Pruefungsaufgabe = {}));
//# sourceMappingURL=server.js.map
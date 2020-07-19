import * as Http from "http";
import * as Url from "url";
//import { ParsedUrlQuery } from "querystring";
import * as Mongo from "mongodb";

export namespace Pruefungsaufgabe {

    let orders: Mongo.Collection;

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let databaseUrl: string = "mongodb+srv://Testuser:topsecret@gis-ist-geil.dvjdj.mongodb.net/Eisdiele?retryWrites=true&w=majority";

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        
        let server: Http.Server = Http.createServer();
        console.log("server starting, port:" + _port);
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }

    async function connectToDatabase(_url: string): Promise<void> {

        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Eisdiele").collection("Bestellungen");
        console.log("Database connection" + orders != undefined);
    }

    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        
        if (_request.url) {
            let urlWithQuery: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            console.log("Pathname for this one: " + urlWithQuery.pathname);

            switch (urlWithQuery.pathname) {
                case "/send":
                    orders.insertOne(urlWithQuery.query);
                    break;
                case "/show":
                    _response.write(JSON.stringify(await orders.find().toArray()));
                    break;
                case "/deleteAll":
                    orders.remove({"anrede": "herr"});
                    orders.remove({"anrede": "frau"});
                    break;
                case "/addStatusFinished":
                    console.log("Hello, yes. This is: /addStatusFinished");
                    orders.updateOne({_id: "ObjectId(" + urlWithQuery.query + ")"}, {$set: {status: "fertig"}});
                    break;
                case "/addStatusDelivered":
                    console.log("Hello, yes. This is: /addStatusDelivered");
                    orders.updateOne({"_id": urlWithQuery.query}, {$set: {status: "geliefert"}});
                    break;
                case "/removeOne":
                    console.log("Hello, yes. This is: /removeOne");
                    //orders.deleteOne({_id: urlWithQuery.query});
                    orders.deleteOne({_id : "ObjectId(" + urlWithQuery.query + ")"});
                    break;
                default:
                    //_response.write(_request.url);
            }
        }
        _response.end();
    }

}
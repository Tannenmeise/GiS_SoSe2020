import * as Http from "http";
import * as Url from "url";
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
            //let pfad: string | null = url.pathname;

            switch (urlWithQuery.pathname) {
                case "/send":
                    orders.insertOne(urlWithQuery.query);
                    break;
                case "/deleteAll":
                    orders.remove({"anrede": "herr"});
                    orders.remove({"anrede": "frau"});
                    break;
                case "/addStatusFinished":
                    orders.updateOne({_id: urlWithQuery.query}, {$set: {status: "fertig"}});
                    break;
                case "/addStatusDelivered":
                    orders.updateOne({_id: urlWithQuery.query}, {$set: {status: "geliefert"}});
                    break;
                default:
                    _response.write(_request.url);
            }

            /*
            if (pfad == "/send") {
                orders.insertOne(url.query);
            } else if (pfad == "/show") {
                let number: number = await orders.countDocuments({});
                for (let i: number = 0; i < number; i++) {
                    _response.write(orders.findOne({"anrede": "herr"}));
                }
            } else if (pfad) {

            } else if (pfad == "/deleteAll") {
                orders.remove({"anrede": "herr"});
                orders.remove({"anrede": "frau"});
            }
            */
        }
        _response.end();
    }
}
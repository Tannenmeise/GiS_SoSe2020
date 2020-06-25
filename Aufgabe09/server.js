"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
const url = require("url");
var A08Server;
(function (A08Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        let myData = url.parse(`${_request.url}`, true);
        let myQuery = myData.query;
        let splitThis = _request.url.slice(0, 5);
        let myJsonString = JSON.stringify(myQuery);
        if (splitThis == "/html") {
            _response.setHeader("content-type", "application/json");
            _response.setHeader("Access-Control-Allow-Origin", "*");
        }
        else if (splitThis == "/json") {
            _response.setHeader("content-type", "text/html");
            _response.setHeader("Access-Control-Allow-Origin", "*");
        }
        console.log(myJsonString);
        _response.write(myJsonString);
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map
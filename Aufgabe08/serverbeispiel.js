"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    console.log("Starting server");
    // Port als Variable des Typs 'number'
    let port = Number(process.env.PORT);
    // Wenn kein Port, dann:
    if (!port)
        port = 8100; // -> localhost
    // Server als Variable des Typs "Http.Server"
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    // Server hört Port ab
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        // Header Attriute festlegen
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        // schreibt & gibt "_request.url" aus:
        _response.write(_request.url);
        console.log(_request.url);
        // beendet Vorgang:
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=serverbeispiel.js.map
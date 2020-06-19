import * as Http from "http";

export namespace A08Server {

  console.log("Starting server");
  // Port als Variable des Typs 'number'
  let port: number = Number(process.env.PORT);
  // Wenn kein Port, dann:
  if (!port) 
    port = 8100; // -> localhost
  // Server als Variable des Typs "Http.Server"
  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  // Server hört Port ab
  server.listen(port);

  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
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
}
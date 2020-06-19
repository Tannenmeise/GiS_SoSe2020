import * as Http from "http";

export namespace A08Server {
  // Konsolenausgabe:
  console.log("Starting server");
  
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100; // -> localhost

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  function handleListen(): void {
    // Konsolenausgabe:
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");
    // ändert Header (des HTML Dokuments):
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    // schreibt die Antwort (in HTML Dokument):
    _response.write(_request.url);
    // Konsolenausgabe:
    console.log(_request.url);
    // beendet Vorgang und bringt den Elemente in den vorherigen Zustand zurück:
    _response.end();
  }
}
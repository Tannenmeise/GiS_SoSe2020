import * as Http from "http";
import * as url from "url";
import { ParsedUrlQuery } from "querystring";

export namespace A08Server {

  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port) 
    port = 8100;
  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    
    console.log("I hear voices!");
        
    let urlData: url.UrlWithParsedQuery = url.parse(`${_request.url}`, true);
    let query: ParsedUrlQuery = urlData.query;
    let pathString: string = (<string>_request.url).slice(0 , 5);
    let jsonString: string = JSON.stringify(query);
        
    if (pathString == "/html") {
      _response.setHeader("content-type", "application/json");
      _response.setHeader("Access-Control-Allow-Origin", "*"); 
    } else if (pathString == "/json") {
      _response.setHeader("content-type", "text/html");
      _response.setHeader("Access-Control-Allow-Origin", "*"); 
    }

    _response.write(jsonString);    
    _response.end();                                                                                
    }
}
namespace Aufgabe09 {

  document.getElementById("sendHTML")?.addEventListener("click", handleSendHTML);
  document.getElementById("sendJSON")?.addEventListener("click", handleSendJSON);

  function handleSendHTML(): void {
    communicate("/html");
  }

  function handleSendJSON(): void {
    communicate("/json");
  }

  async function communicate(_path: string): Promise<void> {

    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://gis-sose-2020.herokuapp.com" + _path;
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();

    let response1: Response = await fetch(url);
    let response2: string;

    if (_path == "/html") {
      let response2: string = await response1.text();
      (<HTMLDivElement>document.getElementById("antwort")).innerHTML = " Deine Antwort: " + response2;
    } else if (_path == "/json") {
      response2 = await response1.json();
      console.log(response2);
    }

  }

}
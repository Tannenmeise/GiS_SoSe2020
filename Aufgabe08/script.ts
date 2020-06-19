namespace Aufgabe08 {

  //let url: string = "https://localhost:8100";
  let url: string = "https://gis-sose-2020.herokuapp.com/";
  document.getElementById("send")?.addEventListener("click", handleClickSend);

  async function handleClickSend(): Promise<void> {
    serverCommunicate(url);
  }

  async function serverCommunicate(_url: RequestInfo): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "" + _url;
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url += "?" + query.toString();
    let response1: Response = await fetch(url, { method: "get" });
    let response2: String = await response1.text();
    console.log(response2);
  }

}
namespace Aufgabe08 {

  document.getElementById("send")!.addEventListener("click", handleClickSend);

  async function handleClickSend(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://gis-sose-2020.herokuapp.com/";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();
    await fetch(url);
    serverCommunicate(url);
  }

  async function serverCommunicate(_url: RequestInfo): Promise<void> {
    let response1: Response = await fetch(_url, { method: "get" });
    let response2: String = await response1.text();
    console.log(response2);
  }

}
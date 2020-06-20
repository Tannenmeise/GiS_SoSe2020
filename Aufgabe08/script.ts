namespace Aufgabe08 {

  document.getElementById("send")?.addEventListener("click", handleClickSend);

  async function handleClickSend(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://gis-sose-2020.herokuapp.com/";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();
    
    let response1: Response = await fetch(url);
    let response2: string = response1.url;
    console.log(response2);

    for (let entry of query) {
      console.log(entry);
      console.log("name: " + entry[0]);
      console.log("value: " + entry[1]);
  }
  }

}
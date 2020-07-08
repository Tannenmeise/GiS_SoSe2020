namespace Aufgabe11 {

    let formData: FormData;
    document.getElementById("sendDB")?.addEventListener("click", handleSendDB);
    document.getElementById("showDB")?.addEventListener("click", handleShowDB);

    async function handleSendDB(): Promise<void> {

        formData = new FormData(document.forms[0]);
        let url: string = "https://gis-sose-2020.herokuapp.com/send";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }

    async function handleShowDB(): Promise<void> {

        let url: string = "https://gis-sose-2020.herokuapp.com";
        let response1: Response = await fetch(url);
        let response2: string = await response1.text();
        (<HTMLDivElement>document.getElementById("output")).innerHTML = response2;
    }
}
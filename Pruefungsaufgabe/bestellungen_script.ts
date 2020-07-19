namespace Pruefungsaufgabe {


    document.getElementById("ihrName")!.innerHTML = "" + localStorage.getItem("mitarbeiter");

    document.getElementById("showDB")?.addEventListener("click", handleShowDB);
    document.getElementById("deleteAll")?.addEventListener("click", handleDeleteAll);


    async function handleShowDB(): Promise<void> {

        let url: string = "https://gis-sose-2020.herokuapp.com/show";
        let responseServer: Response = await fetch(url);
        console.log("responseServer: " + responseServer);
        let responseText: string = await responseServer.text();
        console.log("responseText: " + responseText);
        let responseHTML: HTMLElement = <HTMLElement> document.getElementById("ausgabeB");
        console.log("hello?");
        responseHTML.innerHTML = responseText;
        console.log(responseText);
    }


    async function handleDeleteAll(): Promise<void> {

        let url: string = "https://gis-sose-2020.herokuapp.com/deleteAll";
        await fetch(url);
        //location.reload();
    }

}
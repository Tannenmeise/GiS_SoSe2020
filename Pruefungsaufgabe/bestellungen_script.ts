namespace Pruefungsaufgabe {


    document.getElementById("ihrName")!.innerHTML = "" + localStorage.getItem("mitarbeiter");

    document.getElementById("showDB")?.addEventListener("click", handleShowDB);
    document.getElementById("deleteAll")?.addEventListener("click", handleDeleteAll);


    async function handleShowDB(): Promise<void> {

        let url: string = "https://gis-sose-2020.herokuapp.com/show";
        let response1: Response = await fetch(url);
        let response2: string = await response1.text();
        (<HTMLDivElement>document.getElementById("ausgabeB")).innerHTML = response2;
    }


    async function handleDeleteAll(): Promise<void> {

        let url: string = "https://gis-sose-2020.herokuapp.com/deleteAll";
        await fetch(url);
        location.reload();
    }

}
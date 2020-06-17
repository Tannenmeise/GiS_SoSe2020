namespace Aufgabe07 {

    einkaufstascheFuellen();

    if (localStorage.anzahl === undefined) {
        localStorage.anzahl = Number(localStorage.anzahl) * 0;
    }
    document.getElementById("anzahl")!.innerHTML = localStorage.anzahl;

    if (localStorage.summe === undefined) {
        localStorage.summe = Number(localStorage.summe) * 0;
    }
    document.getElementById("summe")!.innerHTML = localStorage.summe;


    async function communicate(_url: RequestInfo): Promise<void> {

        let response1: Response = await fetch(_url);
        let response2: JSON = await response1.json();
        artikelArray = JSON.parse(JSON.stringify(response2));
    }


    async function einkaufstascheFuellen(): Promise<void> {

        await communicate("artikel.json");

        for (let k: number = 0; k < artikelArray.length; k++) {

            if (localStorage.getItem("" + k)! === "true") {
                //div generieren
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.id = artikelArray[k].kategorie + k;
                document.getElementById("inhalt")?.appendChild(newDiv);
                //img
                let bildImg: HTMLImageElement = document.createElement("img");
                bildImg.src = artikelArray[k].bild;
                document.getElementById(artikelArray[k].kategorie + k)?.appendChild(bildImg);
                //name
                let nameP: HTMLParagraphElement = document.createElement("p");
                nameP.innerHTML = artikelArray[k].name;
                document.getElementById(artikelArray[k].kategorie + k)?.appendChild(nameP);
                //preis
                let preisP: HTMLParagraphElement = document.createElement("p");
                preisP.innerHTML = artikelArray[k].preis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
                preisP.className = "preis";
                document.getElementById(artikelArray[k].kategorie + k)?.appendChild(preisP);
                //input
                let loeschen: HTMLInputElement = document.createElement("input");
                loeschen.type = "image";
                loeschen.src = "bild_muelleimer.png";
                loeschen.alt = "löschen";
                document.getElementById(artikelArray[k].kategorie + k)?.appendChild(loeschen);
                loeschen.addEventListener("click", handleDeleteClick);
            }
        }
    }

    let gesamtpreis2: number = 0;
    if (localStorage.help != null) {
        gesamtpreis2 = parseFloat(localStorage.help);
    } 

    // EINZELNER ARTIKEL LÖSCHEN
    function handleDeleteClick(_event: Event): void {

        let clickedObject: HTMLElement = <HTMLElement>_event.target;
        localStorage.anzahl = Number(localStorage.anzahl) - 1;
        // Gesamtpreis:
        localStorage.preis = clickedObject!.previousSibling?.firstChild?.nodeValue!;
        localStorage.preis = localStorage.preis.replace(/,/, ".");
        gesamtpreis2 -= parseFloat(localStorage.preis);
        localStorage.help = gesamtpreis2;
        localStorage.summe = gesamtpreis2.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        // Aus localStorage löschen:
        let artikelPreis: string = "" + clickedObject!.parentNode!.firstChild!.nextSibling!.textContent;
        for (let j: number = 0; j < artikelArray.length; j++) {
            if (artikelArray[j].name === artikelPreis) {
                 localStorage.removeItem(j.toString());
             }
         }
        // div
        location.reload(); 
    }
    // ALLE ARTIKEL LÖSCHEN (aus localStorage)
    document.getElementById("delete")?.addEventListener("click", handleDeleteAll);

    function handleDeleteAll(_event: Event): void {

        for (let i: number = 0; i < artikelArray.length; i++) {
            if (localStorage.getItem(i.toString()) === "true") {
                localStorage.removeItem(i.toString());
             }
         }

        localStorage.anzahl = 0;
        localStorage.help = 0;
        localStorage.summe = "0,00 €";
        location.reload(); 
    }

}

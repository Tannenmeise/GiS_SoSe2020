namespace Aufgabe07 {

    einkaufstascheFuellen();
    document.getElementById("anzahl")!.innerHTML = localStorage.anzahl;
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

    // EINZELNER ARTIKEL LÖSCHEN
    function handleDeleteClick(_event: Event): void {

        let clickedObject: HTMLElement = <HTMLElement>_event.target;
        // localStorage
        let geloeschterArtikel: string = "" + clickedObject!.parentNode!.firstChild!.nextSibling!.textContent;
        for (let j: number = 0; j < artikelArray.length; j++) {
            if (artikelArray[j].name === geloeschterArtikel) {
                 localStorage.removeItem(j.toString());
             }
         }
        localStorage.anzahl = Number(localStorage.anzahl) - 1;
        // Gesamtpreis:
        localStorage.preis = clickedObject!.previousSibling?.firstChild?.nodeValue!;
        localStorage.preis = localStorage.preis.replace(/,/, ".");
        localStorage.summeNumber -= parseFloat(localStorage.preis);
        // Rundungsproblem
        localStorage.summeNumber *= 100;
        localStorage.summeNumber = Math.round(localStorage.summeNumber);
        localStorage.summeNumber /= 100;
        // ???:
        localStorage.summe = localStorage.summeNumber.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        // div
        location.reload(); 
    }
    // ALLE ARTIKEL LÖSCHEN
    document.getElementById("delete")?.addEventListener("click", handleDeleteAll);

    function handleDeleteAll(_event: Event): void {
        // localStorage
        for (let i: number = 0; i < artikelArray.length; i++) {
            if (localStorage.getItem(i.toString()) === "true") {
                localStorage.removeItem(i.toString());
             }
         }
        localStorage.anzahl = Number(localStorage.anzahl) * 0;
        localStorage.summe = "0,00 €";
        // div
        /* Alternative:
        while (document.getElementById("inhalt")!.firstChild) {
            document.getElementById("inhalt")!.removeChild(document.getElementById("inhalt")!.firstChild!);
        } */
        location.reload(); 
    }
}

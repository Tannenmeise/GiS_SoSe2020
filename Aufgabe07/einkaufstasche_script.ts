namespace Aufgabe07 {

    for (let k: number = 0; k < localStorage.length; k++) {

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
            let kaufen: HTMLInputElement = document.createElement("input");
            kaufen.type = "image";
            kaufen.src = "bild_muelleimer.png";
            kaufen.alt = "kaufen";
            document.getElementById(artikelArray[k].kategorie + k)?.appendChild(kaufen);
            kaufen.addEventListener("click", handleLoeschenClick);
        }
    }

    function handleLoeschenClick(_event: Event): void {

        let deletedObject: HTMLElement = <HTMLElement>_event.target;

        document.getElementById("" + deletedObject.parentNode!.nodeValue)!.remove();
    }

}
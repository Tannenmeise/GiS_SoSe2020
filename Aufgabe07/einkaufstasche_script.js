"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    einkaufstascheFuellen();
    if (localStorage.anzahl === undefined) {
        localStorage.anzahl = Number(localStorage.anzahl) * 0;
    }
    document.getElementById("anzahl").innerHTML = localStorage.anzahl;
    if (localStorage.summe === undefined) {
        localStorage.summe = Number(localStorage.summe) * 0;
    }
    document.getElementById("summe").innerHTML = localStorage.summe;
    async function communicate(_url) {
        let response1 = await fetch(_url);
        let response2 = await response1.json();
        Aufgabe07.artikelArray = JSON.parse(JSON.stringify(response2));
    }
    async function einkaufstascheFuellen() {
        await communicate("artikel.json");
        for (let k = 0; k < Aufgabe07.artikelArray.length; k++) {
            if (localStorage.getItem("" + k) === "true") {
                //div generieren
                let newDiv = document.createElement("div");
                newDiv.id = Aufgabe07.artikelArray[k].kategorie + k;
                document.getElementById("inhalt")?.appendChild(newDiv);
                //img
                let bildImg = document.createElement("img");
                bildImg.src = Aufgabe07.artikelArray[k].bild;
                document.getElementById(Aufgabe07.artikelArray[k].kategorie + k)?.appendChild(bildImg);
                //name
                let nameP = document.createElement("p");
                nameP.innerHTML = Aufgabe07.artikelArray[k].name;
                document.getElementById(Aufgabe07.artikelArray[k].kategorie + k)?.appendChild(nameP);
                //preis
                let preisP = document.createElement("p");
                preisP.innerHTML = Aufgabe07.artikelArray[k].preis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
                preisP.className = "preis";
                document.getElementById(Aufgabe07.artikelArray[k].kategorie + k)?.appendChild(preisP);
                //input
                let loeschen = document.createElement("input");
                loeschen.type = "image";
                loeschen.src = "bild_muelleimer.png";
                loeschen.alt = "löschen";
                document.getElementById(Aufgabe07.artikelArray[k].kategorie + k)?.appendChild(loeschen);
                loeschen.addEventListener("click", handleDeleteClick);
            }
        }
    }
    let gesamtpreis2 = 0;
    if (localStorage.help != null) {
        gesamtpreis2 = parseFloat(localStorage.help);
    }
    // EINZELNER ARTIKEL LÖSCHEN
    function handleDeleteClick(_event) {
        let clickedObject = _event.target;
        localStorage.anzahl = Number(localStorage.anzahl) - 1;
        // Gesamtpreis:
        localStorage.preis = clickedObject.previousSibling?.firstChild?.nodeValue;
        localStorage.preis = localStorage.preis.replace(/,/, ".");
        gesamtpreis2 -= parseFloat(localStorage.preis);
        localStorage.help = gesamtpreis2;
        localStorage.summe = gesamtpreis2.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        // Aus localStorage löschen:
        let artikelPreis = "" + clickedObject.parentNode.firstChild.nextSibling.textContent;
        for (let j = 0; j < Aufgabe07.artikelArray.length; j++) {
            if (Aufgabe07.artikelArray[j].name === artikelPreis) {
                localStorage.removeItem(j.toString());
            }
        }
        // div
        location.reload();
    }
    // ALLE ARTIKEL LÖSCHEN (aus localStorage)
    document.getElementById("delete")?.addEventListener("click", handleDeleteAll);
    function handleDeleteAll(_event) {
        for (let i = 0; i < Aufgabe07.artikelArray.length; i++) {
            if (localStorage.getItem(i.toString()) === "true") {
                localStorage.removeItem(i.toString());
            }
        }
        localStorage.anzahl = 0;
        localStorage.help = 0;
        localStorage.summe = "0,00 €";
        location.reload();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=einkaufstasche_script.js.map
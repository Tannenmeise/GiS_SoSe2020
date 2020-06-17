"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    async function communicate(_url) {
        let response1 = await fetch(_url);
        let response2 = await response1.json();
        Aufgabe07.artikelArray = JSON.parse(JSON.stringify(response2));
    }
    artikelErstellen();
    if (localStorage.anzahl === undefined) {
        localStorage.anzahl = Number(localStorage.anzahl) * 0;
    }
    document.getElementById("anzahl").innerHTML = localStorage.anzahl;
    async function artikelErstellen() {
        await communicate("artikel.json");
        for (let i = 0; i < Aufgabe07.artikelArray.length; i++) {
            //div generieren
            let newDiv = document.createElement("div");
            newDiv.id = Aufgabe07.artikelArray[i].kategorie + i;
            document.getElementById(Aufgabe07.artikelArray[i].kategorie)?.appendChild(newDiv);
            //img
            let bildImg = document.createElement("img");
            bildImg.src = Aufgabe07.artikelArray[i].bild;
            document.getElementById(Aufgabe07.artikelArray[i].kategorie + i)?.appendChild(bildImg);
            //name
            let nameP = document.createElement("p");
            nameP.innerHTML = Aufgabe07.artikelArray[i].name;
            document.getElementById(Aufgabe07.artikelArray[i].kategorie + i)?.appendChild(nameP);
            //beschreibung
            let beschreibungP = document.createElement("p");
            beschreibungP.innerHTML = Aufgabe07.artikelArray[i].beschreibung;
            beschreibungP.className = "beschreibung";
            document.getElementById(Aufgabe07.artikelArray[i].kategorie + i)?.appendChild(beschreibungP);
            //preis
            let preisP = document.createElement("p");
            preisP.innerHTML = Aufgabe07.artikelArray[i].preis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            preisP.className = "preis";
            document.getElementById(Aufgabe07.artikelArray[i].kategorie + i)?.appendChild(preisP);
            //input
            let kaufen = document.createElement("input");
            kaufen.type = "image";
            kaufen.src = "4_bild_einkaufstasche_klein.png";
            kaufen.alt = "kaufen";
            document.getElementById(Aufgabe07.artikelArray[i].kategorie + i)?.appendChild(kaufen);
            kaufen.addEventListener("click", handleKaufenClick);
        }
    }
    let gesamtpreis1 = 0;
    if (localStorage.help != null) {
        gesamtpreis1 = parseFloat(localStorage.help);
    }
    // Warenzahl-Counter und Preis-Rechner
    function handleKaufenClick(_event) {
        let clickedObject = _event.target;
        // Anzahl berechnen & anzeigen
        localStorage.anzahl = Number(localStorage.anzahl) + 1;
        document.getElementById("anzahl").innerHTML = localStorage.anzahl;
        // Summe berechnen & ausgeben
        localStorage.preis = clickedObject.previousSibling?.firstChild?.nodeValue;
        localStorage.preis = localStorage.preis.replace(/,/, ".");
        gesamtpreis1 += parseFloat(localStorage.preis);
        localStorage.help = gesamtpreis1;
        localStorage.summe = gesamtpreis1.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        console.log(localStorage.summe);
        // Artikel in localStorage speichern
        let gekaufterArtikel = "" + clickedObject.parentNode.firstChild.nextSibling.textContent;
        for (let j = 0; j < Aufgabe07.artikelArray.length; j++) {
            if (Aufgabe07.artikelArray[j].name === gekaufterArtikel) {
                localStorage.setItem(j.toString(), "true");
            }
        }
    }
    document.getElementById("sortAlles")?.addEventListener("click", handleChooseCategory);
    document.getElementById("sortNeuheiten")?.addEventListener("click", handleChooseCategory);
    document.getElementById("sortAngebote")?.addEventListener("click", handleChooseCategory);
    document.getElementById("sortFiguren")?.addEventListener("click", handleChooseCategory);
    document.getElementById("sortPlueschtiere")?.addEventListener("click", handleChooseCategory);
    document.getElementById("sortSonstiges")?.addEventListener("click", handleChooseCategory);
    function handleChooseCategory(_event) {
        let clickedCategory = _event.target;
        document.getElementById("neuheiten").setAttribute("style", "display: none");
        document.getElementById("angebote").setAttribute("style", "display: none");
        document.getElementById("figuren").setAttribute("style", "display: none");
        document.getElementById("plueschtiere").setAttribute("style", "display: none");
        document.getElementById("sonstiges").setAttribute("style", "display: none");
        if (clickedCategory.id === "sortNeuheiten") {
            document.getElementById("neuheiten").setAttribute("style", "visibility: visible");
        }
        else if (clickedCategory.id === "sortAngebote") {
            document.getElementById("angebote").setAttribute("style", "visibility: visible");
        }
        else if (clickedCategory.id === "sortFiguren") {
            document.getElementById("figuren").setAttribute("style", "visibility: visible");
        }
        else if (clickedCategory.id === "sortPlueschtiere") {
            document.getElementById("plueschtiere").setAttribute("style", "visibility: visible");
        }
        else if (clickedCategory.id === "sortSonstiges") {
            document.getElementById("sonstiges").setAttribute("style", "visibility: visible");
        }
        else if (clickedCategory.id === "sortAlles") {
            document.getElementById("neuheiten").setAttribute("style", "visibility: visible");
            document.getElementById("angebote").setAttribute("style", "visibility: visible");
            document.getElementById("figuren").setAttribute("style", "visibility: visible");
            document.getElementById("plueschtiere").setAttribute("style", "visibility: visible");
            document.getElementById("sonstiges").setAttribute("style", "visibility: visible");
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=shop_script.js.map
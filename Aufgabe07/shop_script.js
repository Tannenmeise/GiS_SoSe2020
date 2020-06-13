"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    // Aufgabe 07-01 Anfang
    // localStorage.clear();
    let artikelArray;
    artikelErstellen();
    async function communicate(_url) {
        let response = await fetch(_url);
        let response2 = await response.json();
        artikelArray = JSON.parse(JSON.stringify(response2));
    }
    async function artikelErstellen() {
        await communicate("artikel.json");
        for (let i = 0; i < artikelArray.length; i++) {
            //div generieren
            let newDiv = document.createElement("div");
            newDiv.id = artikelArray[i].kategorie + i;
            document.getElementById(artikelArray[i].kategorie)?.appendChild(newDiv);
            //img
            let bildImg = document.createElement("img");
            bildImg.src = artikelArray[i].bild;
            document.getElementById(artikelArray[i].kategorie + i)?.appendChild(bildImg);
            //name
            let nameP = document.createElement("p");
            nameP.innerHTML = artikelArray[i].name;
            document.getElementById(artikelArray[i].kategorie + i)?.appendChild(nameP);
            //beschreibung
            let beschreibungP = document.createElement("p");
            beschreibungP.innerHTML = artikelArray[i].beschreibung;
            beschreibungP.className = "beschreibung";
            document.getElementById(artikelArray[i].kategorie + i)?.appendChild(beschreibungP);
            //preis
            let preisP = document.createElement("p");
            preisP.innerHTML = artikelArray[i].preis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            preisP.className = "preis";
            document.getElementById(artikelArray[i].kategorie + i)?.appendChild(preisP);
            //input
            let kaufen = document.createElement("input");
            kaufen.type = "image";
            kaufen.src = "4_bild_einkaufstasche_klein.png";
            kaufen.alt = "kaufen";
            document.getElementById(artikelArray[i].kategorie + i)?.appendChild(kaufen);
            kaufen.addEventListener("click", handleKaufenClick);
        }
    }
    // Aufgabe 07-01 Ende
    // Warenzahl-Counter und Preis-Rechner
    localStorage.anzahl = 0;
    let summeNumber = 0;
    function handleKaufenClick(_event) {
        let clickedObject = _event.target;
        // Anzahl berechnen & anzeigen
        localStorage.anzahl = Number(localStorage.anzahl) + 1;
        document.getElementById("anzahl").innerHTML = localStorage.anzahl;
        document.getElementById("anzahl").setAttribute("style", "visibility: visible");
        // Summe berechnen & ausgeben
        localStorage.summe = clickedObject.previousSibling?.firstChild?.nodeValue;
        localStorage.summe = localStorage.summe.replace(/,/, ".");
        summeNumber += parseFloat(localStorage.summe);
        localStorage.summe = summeNumber.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        console.log(localStorage.summe);
        // Aufgabe 07-02: Gekaufter Artikel speichern
        let gekaufterArtikel = "" + clickedObject.parentNode.firstChild.nextSibling.textContent;
        for (let j = 0; j < artikelArray.length; j++) {
            if (artikelArray[j].name === gekaufterArtikel) {
                localStorage.setItem(j.toString(), "true");
            }
        }
    }
    // Ende
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
    // Ende
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=shop_script.js.map
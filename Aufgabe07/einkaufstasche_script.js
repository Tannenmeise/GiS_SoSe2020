"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    for (let k = 0; k < localStorage.length; k++) {
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
            let kaufen = document.createElement("input");
            kaufen.type = "image";
            kaufen.src = "bild_muelleimer.png";
            kaufen.alt = "kaufen";
            document.getElementById(Aufgabe07.artikelArray[k].kategorie + k)?.appendChild(kaufen);
            kaufen.addEventListener("click", handleLoeschenClick);
        }
    }
    function handleLoeschenClick(_event) {
        let deletedObject = _event.target;
        document.getElementById("" + deletedObject.parentNode.nodeValue).remove();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=einkaufstasche_script.js.map
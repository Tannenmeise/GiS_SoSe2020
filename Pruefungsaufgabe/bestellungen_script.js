"use strict";
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    document.getElementById("ihrName").innerHTML = "" + localStorage.getItem("mitarbeiter");
    document.getElementById("showDB")?.addEventListener("click", handleShowDB);
    document.getElementById("deleteAll")?.addEventListener("click", handleDeleteAll);
    async function handleShowDB(_e) {
        let response = await fetch("https://gis-sose-2020.herokuapp.com/show");
        console.log(response);
        let bestellungen = await response.json();
        let output = document.getElementById("ausgabeB");
        output.innerHTML = "";
        for (let b of bestellungen) {
            output.appendChild(erstelleBestellungBlock(b));
        }
    }
    function erstelleBestellungBlock(_b) {
        let bestellungDiv = document.createElement("div");
        bestellungDiv.classList.add("bestellung");
        bestellungDiv.setAttribute("_id", _b._id);
        let behaelterP = document.createElement("p");
        behaelterP.innerText = "Behälter: " + _b.behaelter;
        bestellungDiv.appendChild(behaelterP);
        let kugel1P = document.createElement("p");
        kugel1P.innerText = "1. Kugel: " + _b.kugel1;
        bestellungDiv.appendChild(kugel1P);
        let kugel2P = document.createElement("p");
        kugel2P.innerText = "2. Kugel: " + _b.kugel2;
        bestellungDiv.appendChild(kugel2P);
        let kugel3P = document.createElement("p");
        kugel3P.innerText = "3. Kugel: " + _b.kugel3;
        bestellungDiv.appendChild(kugel3P);
        let toppingP = document.createElement("p");
        toppingP.innerText = "Topping: " + _b.topping;
        bestellungDiv.appendChild(toppingP);
        let streuselP = document.createElement("p");
        streuselP.innerText = "Streusel: " + _b.streusel;
        bestellungDiv.appendChild(streuselP);
        let beilageP = document.createElement("p");
        beilageP.innerText = "Beilage: " + _b.beilage;
        bestellungDiv.appendChild(beilageP);
        let anredeP = document.createElement("p");
        anredeP.innerText = "Anrede: " + _b.anrede;
        bestellungDiv.appendChild(anredeP);
        let vornameP = document.createElement("p");
        vornameP.innerText = "Vorname: " + _b.vorname;
        bestellungDiv.appendChild(vornameP);
        let nachnameP = document.createElement("p");
        nachnameP.innerText = "Nachname: " + _b.nachname;
        bestellungDiv.appendChild(nachnameP);
        let strasseP = document.createElement("p");
        strasseP.innerText = "Straße: " + _b.strasse;
        bestellungDiv.appendChild(strasseP);
        let hausnummerP = document.createElement("p");
        hausnummerP.innerText = "Hausnummer: " + _b.hausnummer;
        bestellungDiv.appendChild(hausnummerP);
        let postleitzahlP = document.createElement("p");
        postleitzahlP.innerText = "Postleitzahl: " + _b.postleitzahl;
        bestellungDiv.appendChild(postleitzahlP);
        let ortP = document.createElement("p");
        ortP.innerText = "Ort: " + _b.ort;
        bestellungDiv.appendChild(ortP);
        let statusP = document.createElement("p");
        if (_b.status != undefined) {
            statusP.innerText = "Status: " + _b.status;
        }
        else {
            statusP.innerText = "Status: offen";
        }
        bestellungDiv.appendChild(statusP);
        let finishedBtn = document.createElement("button");
        finishedBtn.innerText = "Fertig";
        finishedBtn.setAttribute("id", "finished");
        finishedBtn.addEventListener("click", addStatusFinished);
        bestellungDiv.appendChild(finishedBtn);
        let deliveredBtn = document.createElement("button");
        deliveredBtn.innerText = "Geliefert";
        deliveredBtn.setAttribute("id", "delivered");
        deliveredBtn.addEventListener("click", addStatusDelivered);
        bestellungDiv.appendChild(deliveredBtn);
        let removeBtn = document.createElement("button");
        removeBtn.innerText = "Löschen";
        removeBtn.setAttribute("id", "delete");
        removeBtn.addEventListener("click", removeOne);
        bestellungDiv.appendChild(removeBtn);
        return bestellungDiv;
    }
    // Eine Bestellung löschen
    async function removeOne(_e) {
        let clickedButton = _e.target;
        let parentDiv = clickedButton.parentElement;
        let idToRemove = parentDiv.getAttribute("_id");
        await fetch("https://gis-sose-2020.herokuapp.com/removeOne?id=" + idToRemove);
        handleShowDB(_e);
    }
    // Status einer Bestellung auf "fertig" setzen
    async function addStatusFinished(_e) {
        let clickedButton = _e.target;
        let parentDiv = clickedButton.parentElement;
        let idToChange = parentDiv.getAttribute("_id");
        await fetch("https://gis-sose-2020.herokuapp.com/addStatusFinished?id=" + idToChange);
        handleShowDB(_e);
    }
    // Status einer Bestellung auf "geliefert" setzen
    async function addStatusDelivered(_e) {
        let clickedButton = _e.target;
        let parentDiv = clickedButton.parentElement;
        let idToChange = parentDiv.getAttribute("_id");
        await fetch("https://gis-sose-2020.herokuapp.com/addStatusDelivered?id=" + idToChange);
        handleShowDB(_e);
    }
    // Alle Bestellungen löschen
    async function handleDeleteAll() {
        await fetch("https://gis-sose-2020.herokuapp.com/deleteAll");
        location.reload();
    }
})(Pruefungsaufgabe || (Pruefungsaufgabe = {}));
//# sourceMappingURL=bestellungen_script.js.map
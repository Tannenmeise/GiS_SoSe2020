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
        behaelterP.innerText = _b.behaelter;
        bestellungDiv.appendChild(behaelterP);
        let kugel1P = document.createElement("p");
        kugel1P.innerText = _b.kugel1;
        bestellungDiv.appendChild(kugel1P);
        let kugel2P = document.createElement("p");
        kugel2P.innerText = _b.kugel2;
        bestellungDiv.appendChild(kugel2P);
        let kugel3P = document.createElement("p");
        kugel3P.innerText = _b.kugel3;
        bestellungDiv.appendChild(kugel3P);
        let toppingP = document.createElement("p");
        toppingP.innerText = _b.topping;
        bestellungDiv.appendChild(toppingP);
        let streuselP = document.createElement("p");
        streuselP.innerText = _b.streusel;
        bestellungDiv.appendChild(streuselP);
        let beilageP = document.createElement("p");
        beilageP.innerText = _b.beilage;
        bestellungDiv.appendChild(beilageP);
        let anredeP = document.createElement("p");
        anredeP.innerText = _b.anrede;
        bestellungDiv.appendChild(anredeP);
        let vornameP = document.createElement("p");
        vornameP.innerText = _b.vorname;
        bestellungDiv.appendChild(vornameP);
        let nachnameP = document.createElement("p");
        nachnameP.innerText = _b.nachname;
        bestellungDiv.appendChild(nachnameP);
        let strasseP = document.createElement("p");
        strasseP.innerText = _b.strasse;
        bestellungDiv.appendChild(strasseP);
        let hausnummerP = document.createElement("p");
        hausnummerP.innerText = _b.hausnummer;
        bestellungDiv.appendChild(hausnummerP);
        let postleitzahlP = document.createElement("p");
        postleitzahlP.innerText = _b.postleitzahl;
        bestellungDiv.appendChild(postleitzahlP);
        let ortP = document.createElement("p");
        ortP.innerText = _b.ort;
        bestellungDiv.appendChild(ortP);
        let removeBtn = document.createElement("button");
        removeBtn.innerText = "Löschen";
        removeBtn.addEventListener("click", removeOne);
        bestellungDiv.appendChild(removeBtn);
        let finishedBtn = document.createElement("button");
        finishedBtn.innerText = "Fertig";
        finishedBtn.addEventListener("click", addStatusFinished);
        bestellungDiv.appendChild(finishedBtn);
        let deliveredBtn = document.createElement("button");
        deliveredBtn.innerText = "Geliefert";
        deliveredBtn.addEventListener("click", addStatusDelivered);
        bestellungDiv.appendChild(deliveredBtn);
        return bestellungDiv;
    }
    async function removeOne(_e) {
        let clickedButton = _e.target;
        let parentDiv = clickedButton.parentElement;
        let idToRemove = parentDiv.getAttribute("_id");
        let response = await fetch("https://gis-sose-2020.herokuapp.com/removeOne?id=" + idToRemove);
        handleShowDB(_e);
    }
    async function addStatusFinished(_e) {
        let clickedButton = _e.target;
        let parentDiv = clickedButton.parentElement;
        let idToChange = parentDiv.getAttribute("_id");
        let response = await fetch("https://gis-sose-2020.herokuapp.com/addStatusFinished?id=" + idToChange);
        handleShowDB(_e);
    }
    async function addStatusDelivered(_e) {
        let clickedButton = _e.target;
        let parentDiv = clickedButton.parentElement;
        let idToChange = parentDiv.getAttribute("_id");
        let response = await fetch("https://gis-sose-2020.herokuapp.com/addStatusDelivered?id=" + idToChange);
        handleShowDB(_e);
    }
    async function handleDeleteAll() {
        await fetch("https://gis-sose-2020.herokuapp.com/deleteAll");
        //location.reload();
    }
})(Pruefungsaufgabe || (Pruefungsaufgabe = {}));
//# sourceMappingURL=bestellungen_script.js.map
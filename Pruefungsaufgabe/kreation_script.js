"use strict";
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    // Für Preisberechnung
    document.getElementById("preis").innerHTML = "Preis: 1,10 €";
    let kugel2Bool = false;
    let kugel3Bool = false;
    let toppingBool = false;
    let streuselBool = false;
    let beilageBool = false;
    // Eiskreation: Vorschau
    let behaelter = document.getElementById("behaelter");
    behaelter.addEventListener("click", handleClickedBehaelter);
    function handleClickedBehaelter(_event) {
        let clickedBehaelter = _event.target;
        if (clickedBehaelter.id != "behaelter") {
            let bildSrc = "Vorschau/" + clickedBehaelter.value + ".png";
            let bildImg = document.getElementById("behaelterBild");
            bildImg.src = bildSrc;
        }
    }
    let kugel1 = document.getElementById("kugel1");
    kugel1.addEventListener("click", handleClickedKugel1);
    function handleClickedKugel1(_event) {
        let clickedKugel = _event.target;
        if (clickedKugel.id != "kugel1") {
            let bildSrc = "Vorschau/" + clickedKugel.value + "kugel.png";
            let bildImg = document.getElementById("kugel1Bild");
            bildImg.src = bildSrc;
        }
    }
    let kugel2 = document.getElementById("kugel2");
    kugel2.addEventListener("click", handleClickedKugel2);
    function handleClickedKugel2(_event) {
        let clickedKugel = _event.target;
        if (clickedKugel.id != "kugel2") {
            if (clickedKugel.value == "nichts") {
                let bildImg = document.getElementById("kugel2Bild");
                bildImg.src = "Vorschau/nichts.png";
                kugel2Bool = false;
            }
            else {
                let bildSrc = "Vorschau/" + clickedKugel.value + "kugel.png";
                let bildImg = document.getElementById("kugel2Bild");
                bildImg.src = bildSrc;
                kugel2Bool = true;
            }
            berechnePreis();
        }
    }
    let kugel3 = document.getElementById("kugel3");
    kugel3.addEventListener("click", handleClickedKugel3);
    function handleClickedKugel3(_event) {
        let clickedKugel = _event.target;
        if (clickedKugel.id != "kugel3") {
            if (clickedKugel.value == "nichts") {
                let bildImg = document.getElementById("kugel3Bild");
                bildImg.src = "Vorschau/nichts.png";
                kugel3Bool = false;
            }
            else {
                let bildSrc = "Vorschau/" + clickedKugel.value + "kugel.png";
                let bildImg = document.getElementById("kugel3Bild");
                bildImg.src = bildSrc;
                kugel3Bool = true;
            }
            berechnePreis();
        }
    }
    let topping = document.getElementById("topping");
    topping.addEventListener("click", handleClickedTopping);
    function handleClickedTopping(_event) {
        let clickedTopping = _event.target;
        if (clickedTopping.id != "topping") {
            if (clickedTopping.value == "nichts") {
                let bildImg = document.getElementById("toppingBild");
                bildImg.src = "Vorschau/nichts.png";
                toppingBool = false;
            }
            else {
                let bildSrc = "Vorschau/" + clickedTopping.value + ".png";
                let bildImg = document.getElementById("toppingBild");
                bildImg.src = bildSrc;
                toppingBool = true;
            }
            berechnePreis();
        }
    }
    let streusel = document.getElementById("streusel");
    streusel.addEventListener("click", handleClickedStreusel);
    function handleClickedStreusel(_event) {
        let clickedStreusel = _event.target;
        if (clickedStreusel.id != "streusel") {
            if (clickedStreusel.value == "nichts") {
                let bildImg = document.getElementById("streuselBild");
                bildImg.src = "Vorschau/nichts.png";
                streuselBool = false;
            }
            else {
                let bildSrc = "Vorschau/" + clickedStreusel.value + ".png";
                let bildImg = document.getElementById("streuselBild");
                bildImg.src = bildSrc;
                streuselBool = true;
            }
            berechnePreis();
        }
    }
    let beilage = document.getElementById("beilage");
    beilage.addEventListener("click", handleClickedBeilage);
    function handleClickedBeilage(_event) {
        let clickedBeilage = _event.target;
        if (clickedBeilage.id != "beilage") {
            if (clickedBeilage.value == "nichts") {
                let bildImg = document.getElementById("beilageBild");
                bildImg.src = "Vorschau/nichts.png";
                beilageBool = false;
            }
            else {
                let bildSrc = "Vorschau/" + clickedBeilage.value + ".png";
                let bildImg = document.getElementById("beilageBild");
                bildImg.src = bildSrc;
                beilageBool = true;
            }
            berechnePreis();
        }
    }
    // Preis berechnen:
    function berechnePreis() {
        let preis = 1.10;
        let ausgabePreis;
        if (kugel2Bool) {
            preis += 1.00;
        }
        if (kugel3Bool) {
            preis += 1.00;
        }
        if (toppingBool) {
            preis += 0.10;
        }
        if (streuselBool) {
            preis += 0.10;
        }
        if (beilageBool) {
            preis += 0.10;
        }
        ausgabePreis = "Preis: " + preis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        document.getElementById("preis").innerHTML = ausgabePreis;
    }
    // Speichern der Bestellung in die Datenbank
    let formData;
    document.getElementById("kaufen")?.addEventListener("click", handleSendDB);
    async function handleSendDB() {
        formData = new FormData(document.forms[0]);
        let url = "https://gis-sose-2020.herokuapp.com/send";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }
})(Pruefungsaufgabe || (Pruefungsaufgabe = {}));
//# sourceMappingURL=kreation_script.js.map
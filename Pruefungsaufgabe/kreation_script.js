"use strict";
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    document.getElementById("preis").innerHTML = "Preis: 1,10 €";
    let kugel2Bool = false;
    let kugel3Bool = false;
    let toppingBool = false;
    let streuselBool = false;
    let beilageBool = false;
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
            if (clickedKugel.id == "nichts") {
                let bildImg = document.getElementById("kugel2Bild");
                bildImg.src = "Vorschau/nichts.png";
                localStorage.setItem("kugel2", "0,00€");
                kugel2Bool = false;
            }
            else {
                let bildSrc = "Vorschau/" + clickedKugel.value + "kugel.png";
                let bildImg = document.getElementById("kugel2Bild");
                bildImg.src = bildSrc;
                localStorage.setItem("kugel2", "1,00€");
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
            if (clickedKugel.id == "nichts") {
                let bildImg = document.getElementById("kugel3Bild");
                bildImg.src = "Vorschau/nichts.png";
                localStorage.setItem("kugel3", "0,00€");
                kugel3Bool = false;
            }
            else {
                let bildSrc = "Vorschau/" + clickedKugel.value + "kugel.png";
                let bildImg = document.getElementById("kugel3Bild");
                bildImg.src = bildSrc;
                localStorage.setItem("kugel3", "1,00€");
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
            if (clickedTopping.id == "nichts") {
                let bildImg = document.getElementById("toppingBild");
                bildImg.src = "Vorschau/nichts.png";
                localStorage.setItem("topping", "0,00€");
                toppingBool = false;
            }
            else {
                let bildSrc = "Vorschau/" + clickedTopping.value + ".png";
                let bildImg = document.getElementById("toppingBild");
                bildImg.src = bildSrc;
                localStorage.setItem("topping", "0,10€");
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
            if (clickedStreusel.id == "nichts") {
                let bildImg = document.getElementById("streuselBild");
                bildImg.src = "Vorschau/nichts.png";
                localStorage.setItem("streusel", "0,00€");
                streuselBool = false;
            }
            else {
                let bildSrc = "Vorschau/" + clickedStreusel.value + ".png";
                let bildImg = document.getElementById("streuselBild");
                bildImg.src = bildSrc;
                localStorage.setItem("streusel", "0,10€");
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
            if (clickedBeilage.id == "nichts") {
                let bildImg = document.getElementById("beilageBild");
                bildImg.src = "Vorschau/nichts.png";
                localStorage.setItem("beilage", "0,00€");
                beilageBool = false;
            }
            else {
                let bildSrc = "Vorschau/" + clickedBeilage.value + ".png";
                let bildImg = document.getElementById("beilageBild");
                bildImg.src = bildSrc;
                localStorage.setItem("beilage", "0,10€");
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
    // Ablegen der Bestellung in Datenbank
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
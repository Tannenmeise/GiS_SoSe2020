"use strict";
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    let behaelter = document.getElementById("behaelter");
    behaelter.addEventListener("click", handleClickedBehaelter);
    function handleClickedBehaelter(_event) {
        let clickedBehaelter = _event.target;
        if (clickedBehaelter.id != "behaelter") {
            let bildSrc = "Vorschau/" + clickedBehaelter.id + ".png";
            let bildImg = document.getElementById("behaelterBild");
            bildImg.src = bildSrc;
        }
    }
    let kugel1 = document.getElementById("kugel1");
    kugel1.addEventListener("click", handleClickedKugel1);
    function handleClickedKugel1(_event) {
        let clickedKugel = _event.target;
        if (clickedKugel.id != "kugel1") {
            let bildSrc = "Vorschau/" + clickedKugel.id + "kugel.png";
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
                bildImg.src = "";
                localStorage.setItem("kugel2", "0,00€");
            }
            else {
                let bildSrc = "Vorschau/" + clickedKugel.id + "kugel.png";
                let bildImg = document.getElementById("kugel2Bild");
                bildImg.src = bildSrc;
                localStorage.setItem("kugel2", "1,00€");
            }
        }
    }
    let kugel3 = document.getElementById("kugel3");
    kugel3.addEventListener("click", handleClickedKugel3);
    function handleClickedKugel3(_event) {
        let clickedKugel = _event.target;
        if (clickedKugel.id != "kugel3") {
            if (clickedKugel.id == "nichts") {
                let bildImg = document.getElementById("kugel3Bild");
                bildImg.src = "";
                localStorage.setItem("kugel3", "0,00€");
            }
            else {
                let bildSrc = "Vorschau/" + clickedKugel.id + "kugel.png";
                let bildImg = document.getElementById("kugel3Bild");
                bildImg.src = bildSrc;
                localStorage.setItem("kugel3", "1,00€");
            }
        }
    }
    let topping = document.getElementById("topping");
    topping.addEventListener("click", handleClickedTopping);
    function handleClickedTopping(_event) {
        let clickedTopping = _event.target;
        if (clickedTopping.id != "topping") {
            if (clickedTopping.id == "nichts") {
                let bildImg = document.getElementById("toppingBild");
                bildImg.src = "";
                localStorage.setItem("topping", "0,00€");
            }
            else {
                let bildSrc = "Vorschau/" + clickedTopping.id + ".png";
                let bildImg = document.getElementById("toppingBild");
                bildImg.src = bildSrc;
                localStorage.setItem("topping", "0,10€");
            }
        }
    }
    let streusel = document.getElementById("streusel");
    streusel.addEventListener("click", handleClickedStreusel);
    function handleClickedStreusel(_event) {
        let clickedStreusel = _event.target;
        if (clickedStreusel.id != "streusel") {
            if (clickedStreusel.id == "nichts") {
                let bildImg = document.getElementById("streuselBild");
                bildImg.src = "";
                localStorage.setItem("streusel", "0,00€");
            }
            else {
                let bildSrc = "Vorschau/" + clickedStreusel.id + ".png";
                let bildImg = document.getElementById("streuselBild");
                bildImg.src = bildSrc;
                localStorage.setItem("streusel", "0,10€");
            }
        }
    }
    let beilage = document.getElementById("beilage");
    beilage.addEventListener("click", handleClickedBeilage);
    function handleClickedBeilage(_event) {
        let clickedBeilage = _event.target;
        if (clickedBeilage.id != "beilage") {
            if (clickedBeilage.id == "nichts") {
                let bildImg = document.getElementById("beilageBild");
                bildImg.src = "";
                localStorage.setItem("beilage", "0,00€");
            }
            else {
                let bildSrc = "Vorschau/" + clickedBeilage.id + ".png";
                let bildImg = document.getElementById("beilageBild");
                bildImg.src = bildSrc;
                localStorage.setItem("beilage", "0,10€");
            }
        }
    }
    // Ablegen der Bestellung in Datenbank
    let formData;
    document.getElementById("kaufen")?.addEventListener("click", handleSendDB);
    document.getElementById("showDB")?.addEventListener("click", handleShowDB);
    async function handleSendDB() {
        formData = new FormData(document.forms[0]);
        let url = "https://gis-sose-2020.herokuapp.com/send";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }
    async function handleShowDB() {
        let url = "https://gis-sose-2020.herokuapp.com";
        let response1 = await fetch(url);
        let response2 = await response1.text();
        document.getElementById("output").innerHTML = response2;
    }
})(Pruefungsaufgabe || (Pruefungsaufgabe = {}));
//# sourceMappingURL=script.js.map
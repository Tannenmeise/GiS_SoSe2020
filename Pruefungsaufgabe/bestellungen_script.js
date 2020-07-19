"use strict";
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    document.getElementById("ihrName").innerHTML = "" + localStorage.getItem("mitarbeiter");
    document.getElementById("showDB")?.addEventListener("click", handleShowDB);
    document.getElementById("deleteAll")?.addEventListener("click", handleDeleteAll);
    async function handleShowDB() {
        let url = "https://gis-sose-2020.herokuapp.com/show";
        let response1 = await fetch(url);
        let response2 = await response1.text();
        document.getElementById("ausgabeB").innerHTML = response2;
    }
    async function handleDeleteAll() {
        let url = "https://gis-sose-2020.herokuapp.com/deleteAll";
        await fetch(url);
        location.reload();
    }
})(Pruefungsaufgabe || (Pruefungsaufgabe = {}));
//# sourceMappingURL=bestellungen_script.js.map
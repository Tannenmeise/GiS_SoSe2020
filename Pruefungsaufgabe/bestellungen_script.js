"use strict";
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    document.getElementById("ihrName").innerHTML = "" + localStorage.getItem("mitarbeiter");
    document.getElementById("showDB")?.addEventListener("click", handleShowDB);
    document.getElementById("deleteAll")?.addEventListener("click", handleDeleteAll);
    async function handleShowDB() {
        let url = "https://gis-sose-2020.herokuapp.com/show";
        let responseServer = await fetch(url);
        console.log("responseServer: " + responseServer);
        let responseText = await responseServer.text();
        console.log("responseText: " + responseText);
        let responseHTML = document.getElementById("ausgabeB");
        console.log("hello?");
        responseHTML.innerHTML = responseText;
        console.log(responseText);
    }
    async function handleDeleteAll() {
        let url = "https://gis-sose-2020.herokuapp.com/deleteAll";
        await fetch(url);
        location.reload();
    }
})(Pruefungsaufgabe || (Pruefungsaufgabe = {}));
//# sourceMappingURL=bestellungen_script.js.map
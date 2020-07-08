"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let formData;
    document.getElementById("sendDB")?.addEventListener("click", handleSendDB);
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
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map
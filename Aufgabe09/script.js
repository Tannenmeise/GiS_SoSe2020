"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    document.getElementById("sendHTML")?.addEventListener("click", handleSendHTML);
    document.getElementById("sendJSON")?.addEventListener("click", handleSendJSON);
    function handleSendHTML() {
        communicate("/html");
    }
    function handleSendJSON() {
        communicate("/json");
    }
    async function communicate(_path) {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis-sose-2020.herokuapp.com" + _path;
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response1 = await fetch(url);
        let response2;
        if (_path == "/html") {
            let response2 = await response1.text();
            document.getElementById("antwort").innerHTML = " Deine Antwort: " + response2;
        }
        else if (_path == "/json") {
            response2 = await response1.json();
            console.log(response2);
        }
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map
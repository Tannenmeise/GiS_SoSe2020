"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    document.getElementById("send")?.addEventListener("click", handleClickSend);
    async function handleClickSend() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis-sose-2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        communicate(url);
    }
    async function communicate(_url) {
        let response1 = await fetch(_url, { method: "get" });
        let response2 = await response1.text();
        console.log(response2);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map
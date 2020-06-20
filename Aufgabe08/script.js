"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    document.getElementById("send")?.addEventListener("click", handleClickSend);
    async function handleClickSend() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis-sose-2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response1 = await fetch(url);
        let response2 = response1.url;
        console.log(response2);
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map
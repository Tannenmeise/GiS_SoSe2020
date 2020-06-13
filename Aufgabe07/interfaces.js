"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    async function communicate(_url) {
        let response = await fetch(_url);
        let response2 = await response.json();
        Aufgabe07.artikelArray = JSON.parse(JSON.stringify(response2));
    }
    Aufgabe07.communicate = communicate;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=interfaces.js.map
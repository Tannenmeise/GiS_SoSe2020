"use strict";
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    if (localStorage.getItem("loggedIn") == "true") {
        document.getElementById("bestellungen").setAttribute("style", "visibility: visible");
    }
    document.getElementById("login")?.addEventListener("click", handleLogin);
    function handleLogin(_event) {
        localStorage.setItem("mitarbeiter", (document.getElementById("nameMitarbeiter").value)); // Mitarbeitername für Bestellungsübersicht
        document.getElementById("bestellungen").setAttribute("style", "visibility: visible");
        localStorage.setItem("loggedIn", "true");
        window.location.href = "mitarbeiter.html";
    }
})(Pruefungsaufgabe || (Pruefungsaufgabe = {}));
//# sourceMappingURL=login_script.js.map
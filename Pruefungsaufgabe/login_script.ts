namespace Pruefungsaufgabe {

    
    if (localStorage.getItem("loggedIn") == "true") {
        document.getElementById("bestellungen")!.setAttribute("style", "visibility: visible");
    }
    document.getElementById("login")?.addEventListener("click", handleLogin);

    function handleLogin(_event: Event): void {
        localStorage.setItem("mitarbeiter", ((<HTMLInputElement>document.getElementById("nameMitarbeiter")).value));
        document.getElementById("bestellungen")!.setAttribute("style", "visibility: visible");
        localStorage.setItem("loggedIn", "true");
    }

}
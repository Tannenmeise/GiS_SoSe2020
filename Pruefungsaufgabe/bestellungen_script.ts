namespace Pruefungsaufgabe {

    export interface Bestellung {
        _id: string;
        behaelter: string;
        kugel1: string;
        kugel2: string;
        kugel3: string;
        topping: string;
        streusel: string;
        beilage: string;
        anrede: string;
        vorname: string;
        nachname: string;
        strasse: string;
        hausnummer: string;
        postleitzahl: string;
        ort: string;
    }


    document.getElementById("ihrName")!.innerHTML = "" + localStorage.getItem("mitarbeiter");

    document.getElementById("showDB")?.addEventListener("click", handleShowDB);
    document.getElementById("deleteAll")?.addEventListener("click", handleDeleteAll);


    async function handleShowDB(_e: Event): Promise<void> {

        let response: Response = await fetch("https://gis-sose-2020.herokuapp.com/show");
        let bestellungen: Bestellung[] = await response.json();
        let output: HTMLDivElement = <HTMLDivElement>document.getElementById("ausgabeB");
        output.innerHTML = "";
        
        for (let b: number = 0; b < bestellungen.length; b++) {
            output.appendChild(erstelleBestellungBlock(bestellungen[b]));
        }
        /*
        for (let b of bestellungen) {
            output.appendChild(erstelleBestellungBlock(b));
        }
        */
    }


    function erstelleBestellungBlock(_b: Bestellung): HTMLElement {

        let bestellungDiv: HTMLDivElement = document.createElement("div");
        bestellungDiv.classList.add("bestellung");
        bestellungDiv.setAttribute("_id", _b._id);

        let behaelterP: HTMLParagraphElement = document.createElement("p");
        behaelterP.innerText = _b.behaelter;
        bestellungDiv.appendChild(behaelterP);

        let kugel1P: HTMLParagraphElement = document.createElement("p");
        kugel1P.innerText = _b.kugel1;
        bestellungDiv.appendChild(kugel1P);

        let kugel2P: HTMLParagraphElement = document.createElement("p");
        kugel2P.innerText = _b.kugel2;
        bestellungDiv.appendChild(kugel2P);

        let kugel3P: HTMLParagraphElement = document.createElement("p");
        kugel3P.innerText = _b.kugel3;
        bestellungDiv.appendChild(kugel3P);

        let toppingP: HTMLParagraphElement = document.createElement("p");
        toppingP.innerText = _b.topping;
        bestellungDiv.appendChild(toppingP);

        let streuselP: HTMLParagraphElement = document.createElement("p");
        streuselP.innerText = _b.streusel;
        bestellungDiv.appendChild(streuselP);

        let beilageP: HTMLParagraphElement = document.createElement("p");
        beilageP.innerText = _b.beilage;
        bestellungDiv.appendChild(beilageP);

        let anredeP: HTMLParagraphElement = document.createElement("p");
        anredeP.innerText = _b.anrede;
        bestellungDiv.appendChild(anredeP);

        let vornameP: HTMLParagraphElement = document.createElement("p");
        vornameP.innerText = _b.vorname;
        bestellungDiv.appendChild(vornameP);

        let nachnameP: HTMLParagraphElement = document.createElement("p");
        nachnameP.innerText = _b.nachname;
        bestellungDiv.appendChild(nachnameP);

        let strasseP: HTMLParagraphElement = document.createElement("p");
        strasseP.innerText = _b.strasse;
        bestellungDiv.appendChild(strasseP);

        let hausnummerP: HTMLParagraphElement = document.createElement("p");
        hausnummerP.innerText = _b.hausnummer;
        bestellungDiv.appendChild(hausnummerP);

        let postleitzahlP: HTMLParagraphElement = document.createElement("p");
        postleitzahlP.innerText = _b.postleitzahl;
        bestellungDiv.appendChild(postleitzahlP);

        let ortP: HTMLParagraphElement = document.createElement("p");
        ortP.innerText = _b.ort;
        bestellungDiv.appendChild(ortP);

        let removeBtn: HTMLButtonElement = document.createElement("button");
        removeBtn.innerText = "Löschen";
        removeBtn.addEventListener("click", removeOne);
        bestellungDiv.appendChild(removeBtn);

        let finishedBtn: HTMLButtonElement = document.createElement("button");
        finishedBtn.innerText = "Fertig";
        finishedBtn.addEventListener("click", addStatusFinished);
        bestellungDiv.appendChild(finishedBtn);

        let deliveredBtn: HTMLButtonElement = document.createElement("button");
        deliveredBtn.innerText = "Geliefert";
        deliveredBtn.addEventListener("click", addStatusDelivered);
        bestellungDiv.appendChild(deliveredBtn);

        return bestellungDiv;
    }


    async function removeOne(_e: Event): Promise<void> {

        let clickedButton: HTMLElement = <HTMLElement>_e.target;
        let parentDiv: HTMLElement = <HTMLElement>clickedButton.parentElement;
        let idToRemove: string = parentDiv.getAttribute("_id")!;
        let response: Response = await fetch("https://gis-sose-2020.herokuapp.com/removeOne?id=" + idToRemove);
        handleShowDB(_e);
    }


    async function addStatusFinished(_e: Event): Promise<void> {

        let clickedButton: HTMLElement = <HTMLElement>_e.target;
        let parentDiv: HTMLElement = <HTMLElement>clickedButton.parentElement;
        let idToChange: string = parentDiv.getAttribute("_id")!;
        let response: Response = await fetch("https://gis-sose-2020.herokuapp.com/addStatusFinished?id=" + idToChange);
        handleShowDB(_e);
    }


    async function addStatusDelivered(_e: Event): Promise<void> {

        let clickedButton: HTMLElement = <HTMLElement>_e.target;
        let parentDiv: HTMLElement = <HTMLElement>clickedButton.parentElement;
        let idToChange: string = parentDiv.getAttribute("_id")!;
        let response: Response = await fetch("https://gis-sose-2020.herokuapp.com/addStatusDelivered?id=" + idToChange);
        handleShowDB(_e);
    }


    async function handleDeleteAll(): Promise<void> {

        await fetch("https://gis-sose-2020.herokuapp.com/deleteAll");
        //location.reload();
    }

}
namespace Pruefungsaufgabe {

    // Für Preisberechnung
    (<HTMLDivElement>document.getElementById("preis")).innerHTML = "Preis: 1,10 €";
    let kugel2Bool: boolean = false;
    let kugel3Bool: boolean = false;
    let toppingBool: boolean = false;
    let streuselBool: boolean = false;
    let beilageBool: boolean = false;

    // Eiskreation: Vorschau
    let behaelter: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("behaelter"));
    behaelter.addEventListener("click", handleClickedBehaelter);

    function handleClickedBehaelter(_event: Event): void {
        let clickedBehaelter: HTMLSelectElement = <HTMLSelectElement>_event.target;

        if (clickedBehaelter.id != "behaelter") {
            let bildSrc: string = "Vorschau/" + clickedBehaelter.value + ".png";
            let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("behaelterBild"));
            bildImg.src = bildSrc;
        }
    }

    let kugel1: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("kugel1"));
    kugel1.addEventListener("click", handleClickedKugel1);

    function handleClickedKugel1(_event: Event): void {
        let clickedKugel: HTMLSelectElement = <HTMLSelectElement>_event.target;

        if (clickedKugel.id != "kugel1") {
            let bildSrc: string = "Vorschau/" + clickedKugel.value + "kugel.png";
            let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("kugel1Bild"));
            bildImg.src = bildSrc;
        }
    }

    let kugel2: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("kugel2"));
    kugel2.addEventListener("click", handleClickedKugel2);

    function handleClickedKugel2(_event: Event): void {
        let clickedKugel: HTMLSelectElement = <HTMLSelectElement>_event.target;

        if (clickedKugel.id != "kugel2") {
            if (clickedKugel.value == "nichts") {
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("kugel2Bild"));
                bildImg.src = "Vorschau/nichts.png";
                kugel2Bool = false;
            } else {
                let bildSrc: string = "Vorschau/" + clickedKugel.value + "kugel.png";
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("kugel2Bild"));
                bildImg.src = bildSrc;
                kugel2Bool = true;
            }
            berechnePreis();
        }
    }

    let kugel3: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("kugel3"));
    kugel3.addEventListener("click", handleClickedKugel3);

    function handleClickedKugel3(_event: Event): void {
        let clickedKugel: HTMLSelectElement = <HTMLSelectElement>_event.target;

        if (clickedKugel.id != "kugel3") {
            if (clickedKugel.value == "nichts") {
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("kugel3Bild"));
                bildImg.src = "Vorschau/nichts.png";
                kugel3Bool = false;
            } else {
                let bildSrc: string = "Vorschau/" + clickedKugel.value + "kugel.png";
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("kugel3Bild"));
                bildImg.src = bildSrc;
                kugel3Bool = true;
            }
            berechnePreis();
        }
    }

    let topping: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("topping"));
    topping.addEventListener("click", handleClickedTopping);

    function handleClickedTopping(_event: Event): void {
        let clickedTopping: HTMLSelectElement = <HTMLSelectElement>_event.target;

        if (clickedTopping.id != "topping") {
            if (clickedTopping.value == "nichts") {
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("toppingBild"));
                bildImg.src = "Vorschau/nichts.png";
                toppingBool = false;
            } else {
                let bildSrc: string = "Vorschau/" + clickedTopping.value + ".png";
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("toppingBild"));
                bildImg.src = bildSrc;
                toppingBool = true;
            }
            berechnePreis();
        }
    }

    let streusel: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("streusel"));
    streusel.addEventListener("click", handleClickedStreusel);

    function handleClickedStreusel(_event: Event): void {
        let clickedStreusel: HTMLSelectElement = <HTMLSelectElement>_event.target;

        if (clickedStreusel.id != "streusel") {
            if (clickedStreusel.value == "nichts") {
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("streuselBild"));
                bildImg.src = "Vorschau/nichts.png";
                streuselBool = false;
            } else {
                let bildSrc: string = "Vorschau/" + clickedStreusel.value + ".png";
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("streuselBild"));
                bildImg.src = bildSrc;
                streuselBool = true;
            }
            berechnePreis();
        }
    }

    let beilage: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("beilage"));
    beilage.addEventListener("click", handleClickedBeilage);

    function handleClickedBeilage(_event: Event): void {
        let clickedBeilage: HTMLSelectElement = <HTMLSelectElement>_event.target;

        if (clickedBeilage.id != "beilage") {
            if (clickedBeilage.value == "nichts") {
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("beilageBild"));
                bildImg.src = "Vorschau/nichts.png";
                beilageBool = false;
            } else {
                let bildSrc: string = "Vorschau/" + clickedBeilage.value + ".png";
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("beilageBild"));
                bildImg.src = bildSrc;
                beilageBool = true;
            }
            berechnePreis();
        }
    }

    // Preis berechnen:
    function berechnePreis(): void {
        let preis: number = 1.10;
        let ausgabePreis: string;

        if (kugel2Bool) {
            preis += 1.00;
        }
        if (kugel3Bool) {
            preis += 1.00;
        }
        if (toppingBool) {
            preis += 0.10;
        }
        if (streuselBool) {
            preis += 0.10;
        }
        if (beilageBool) {
            preis += 0.10;
        }
        ausgabePreis = "Preis: " + preis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        (<HTMLDivElement>document.getElementById("preis")).innerHTML = ausgabePreis;
    }

    // Speichern der Bestellung in die Datenbank
    let formData: FormData;
    document.getElementById("kaufen")?.addEventListener("click", handleSendDB);

    async function handleSendDB(): Promise<void> {

        formData = new FormData(document.forms[0]);
        let url: string = "https://gis-sose-2020.herokuapp.com/send";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }

}
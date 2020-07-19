namespace Pruefungsaufgabe {

    (<HTMLDivElement>document.getElementById("preis")).innerHTML = "Preis: 1,10 €";
    let kugel2Bool: boolean = false;
    let kugel3Bool: boolean = false;
    let toppingBool: boolean = false;
    let streuselBool: boolean = false;
    let beilageBool: boolean = false;


    let behaelter: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("behaelter"));
    behaelter.addEventListener("click", handleClickedBehaelter);

    function handleClickedBehaelter(_event: Event): void {
        let clickedBehaelter: HTMLSelectElement = <HTMLSelectElement>_event.target;

        if (clickedBehaelter.id != "behaelter") {
            let bildSrc: string = "Vorschau/" + clickedBehaelter.id + ".png";
            let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("behaelterBild"));
            bildImg.src = bildSrc;
        }
    }

    let kugel1: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("kugel1"));
    kugel1.addEventListener("click", handleClickedKugel1);

    function handleClickedKugel1(_event: Event): void {
        let clickedKugel: HTMLSelectElement = <HTMLSelectElement>_event.target;

        if (clickedKugel.id != "kugel1") {
            let bildSrc: string = "Vorschau/" + clickedKugel.id + "kugel.png";
            let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("kugel1Bild"));
            bildImg.src = bildSrc;
        }
    }

    let kugel2: HTMLSelectElement = (<HTMLSelectElement>document.getElementById("kugel2"));
    kugel2.addEventListener("click", handleClickedKugel2);

    function handleClickedKugel2(_event: Event): void {
        let clickedKugel: HTMLSelectElement = <HTMLSelectElement>_event.target;

        if (clickedKugel.id != "kugel2") {
            if (clickedKugel.id == "nichts") {
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("kugel2Bild"));
                bildImg.src = "";
                localStorage.setItem("kugel2", "0,00€");
                kugel2Bool = false;
            } else {
                let bildSrc: string = "Vorschau/" + clickedKugel.id + "kugel.png";
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("kugel2Bild"));
                bildImg.src = bildSrc;
                localStorage.setItem("kugel2", "1,00€");
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
            if (clickedKugel.id == "nichts") {
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("kugel3Bild"));
                bildImg.src = "";
                localStorage.setItem("kugel3", "0,00€");
                kugel3Bool = false;
            } else {
                let bildSrc: string = "Vorschau/" + clickedKugel.id + "kugel.png";
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("kugel3Bild"));
                bildImg.src = bildSrc;
                localStorage.setItem("kugel3", "1,00€");
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
            if (clickedTopping.id == "nichts") {
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("toppingBild"));
                bildImg.src = "";
                localStorage.setItem("topping", "0,00€");
                toppingBool = false;
            } else {
                let bildSrc: string = "Vorschau/" + clickedTopping.id + ".png";
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("toppingBild"));
                bildImg.src = bildSrc;
                localStorage.setItem("topping", "0,10€");
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
            if (clickedStreusel.id == "nichts") {
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("streuselBild"));
                bildImg.src = "";
                localStorage.setItem("streusel", "0,00€");
                streuselBool = false;
            } else {
                let bildSrc: string = "Vorschau/" + clickedStreusel.id + ".png";
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("streuselBild"));
                bildImg.src = bildSrc;
                localStorage.setItem("streusel", "0,10€");
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
            if (clickedBeilage.id == "nichts") {
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("beilageBild"));
                bildImg.src = "";
                localStorage.setItem("beilage", "0,00€");
                beilageBool = false;
            } else {
                let bildSrc: string = "Vorschau/" + clickedBeilage.id + ".png";
                let bildImg: HTMLImageElement = (<HTMLImageElement>document.getElementById("beilageBild"));
                bildImg.src = bildSrc;
                localStorage.setItem("beilage", "0,10€");
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


    // Ablegen der Bestellung in Datenbank
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
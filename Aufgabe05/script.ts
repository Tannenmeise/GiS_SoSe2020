//#region Artikel
interface Artikel {
    name: string;
    beschreibung: string;
    preis: number;
    bild: string;
    kategorie: string;
}

// Neuheiten
let new01: Artikel = {
    name: "Graue rundliche Katze",
    beschreibung: "Die Augen glänzen etwas",
    preis: 4.99,
    bild: "figurA.png",
    kategorie: "neuheiten"
};

// Angebote
let sale01: Artikel = {
    name: "unfertige Katzen-Figur",
    beschreibung: "(verflucht!)",
    preis: 6.66,
    bild: "figurB.png",
    kategorie: "angebote"
};

let sale02: Artikel = {
    name: "unfertige Katzen-Figur 2",
    beschreibung: "Eine schlafende Katze (nicht verflucht)",
    preis: 2.69,
    bild: "figurC.png",
    kategorie: "angebote"
};

// Figuren
let figur01: Artikel = {
    name: "Schleich Katze laufend",
    beschreibung: "Eine laufende Katze",
    preis: 11.99,
    bild: "figur1.png",
    kategorie: "figuren"
};

let figur02: Artikel = {
    name: "Schleich Katze stehend",
    beschreibung: "Eine stehende Katze",
    preis: 9.99,
    bild: "figur2.png",
    kategorie: "figuren"
};

let figur03: Artikel = {
    name: "Schleich Katze sitzend",
    beschreibung: "Eine sitzende Katze",
    preis: 9.99,
    bild: "figur3.png",
    kategorie: "figuren"
};

let figur04: Artikel = {
    name: "Schleich Katze putzend",
    beschreibung: "Eine sich putzende Katze",
    preis: 6.99,
    bild: "figur4.png",
    kategorie: "figuren"
};

let figur05: Artikel = {
    name: "Schleich Katze streckend",
    beschreibung: "Eine sich streckende Katze",
    preis: 6.99,
    bild: "figur5.png",
    kategorie: "figuren"
};

let figur06: Artikel = {
    name: "Schleich spielende Kätzchen",
    beschreibung: "Kätzchen, die spielen",
    preis: 8.99,
    bild: "figur6.png",
    kategorie: "figuren"
};

let figur07: Artikel = {
    name: "Schleich spielende Kätzchen 2",
    beschreibung: "schon wieder",
    preis: 8.99,
    bild: "figur7.png",
    kategorie: "figuren"
};

let figur08: Artikel = {
    name: "Schleich Maine-Coon-Katze",
    beschreibung: "Eine stehende Langhaarkatze",
    preis: 3.99,
    bild: "figur8.png",
    kategorie: "figuren"
};

let figur09: Artikel = {
    name: "Schleich schauende Katze",
    beschreibung: "[originelle Beschreibung]",
    preis: 3.99,
    bild: "figur9.png",
    kategorie: "figuren"
};

// Plüschtiere
let pluesch01: Artikel = {
    name: "Plüsch-Katzen-Anhänger",
    beschreibung: "Mit Reißverschluss!",
    preis: 4.99,
    bild: "pluesch1.png",
    kategorie: "plueschtiere"
};

let pluesch02: Artikel = {
    name: "FurReal friends Samtpfötchen",
    beschreibung: "Schläft schon seit Jahren. Funktioniert noch!",
    preis: 99.99,
    bild: "pluesch2.png",
    kategorie: "plueschtiere"
};

// Sonstiges
let sonstiges01: Artikel = {
    name: "Katzen-Kerze",
    beschreibung: "Echte Bienenwachs-Kerze in Katzenform",
    preis: 14.99,
    bild: "kerze.png",
    kategorie: "sonstiges"
};
//#endregion

// Arrays nach Kategorie
const newArtikel: Artikel[] = [new01];
const saleArtikel: Artikel[] = [sale01, sale02];
const figurArtikel: Artikel[] = [figur01, figur02, figur03, figur04, figur05, figur06, figur07, figur08, figur09];
const plueschArtikel: Artikel[] = [pluesch01, pluesch02];
const sonstigesArtikel: Artikel[] = [sonstiges01];

artikelErstellen(newArtikel);
artikelErstellen(saleArtikel);
artikelErstellen(figurArtikel);
artikelErstellen(plueschArtikel);
artikelErstellen(sonstigesArtikel);

function artikelErstellen(artikelArray: Artikel[]): void {
    
    for (let i: number = 0; i < artikelArray.length; i++) {
        //div generieren
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = artikelArray[i].kategorie + i;
        document.getElementById(artikelArray[i].kategorie)?.appendChild(newDiv);

        //img
        let bildImg: HTMLImageElement = document.createElement("img");
        bildImg.src = artikelArray[i].bild;
        document.getElementById(artikelArray[i].kategorie + i)?.appendChild(bildImg);

        //name
        let nameP: HTMLParagraphElement = document.createElement("p");
        nameP.innerHTML = artikelArray[i].name;
        document.getElementById(artikelArray[i].kategorie + i)?.appendChild(nameP);

        //beschreibung
        let beschreibungP: HTMLParagraphElement = document.createElement("p");
        beschreibungP.innerHTML = artikelArray[i].beschreibung;
        beschreibungP.className = "beschreibung";
        document.getElementById(artikelArray[i].kategorie + i)?.appendChild(beschreibungP);

        //preis
        let preisP: HTMLParagraphElement = document.createElement("p");
        preisP.innerHTML = artikelArray[i].preis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        preisP.className = "preis";
        document.getElementById(artikelArray[i].kategorie + i)?.appendChild(preisP);

        //input
        let kaufen: HTMLInputElement = document.createElement("input");
        kaufen.type = "image";
        kaufen.src = "4_bild_einkaufstasche_klein.png";
        kaufen.alt = "kaufen";
        document.getElementById(artikelArray[i].kategorie + i)?.appendChild(kaufen);
    }
}

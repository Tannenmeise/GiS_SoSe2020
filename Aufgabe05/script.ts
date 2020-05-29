//#region Artikel
interface Artikel {
    name: string;
    beschreibung: string;
    preis: string;
    bild: string;
}

// Neuheiten
let new01: Artikel = {
    name: "Graue rundliche Katze",
    beschreibung: "Die Augen glänzen etwas",
    preis: "4,99 €",
    bild: "figurA.png"
};

// Angebote
let sale01: Artikel = {
    name: "unfertige Katzen-Figur",
    beschreibung: "(verflucht!)",
    preis: "6,66 €",
    bild: "figurB.png"
};

let sale02: Artikel = {
    name: "unfertige Katzen-Figur 2",
    beschreibung: "Eine schlafende Katze (nicht verflucht)",
    preis: "2,69 €",
    bild: "figurC.png"
};

// Figuren
let figur01: Artikel = {
    name: "Schleich Katze laufend",
    beschreibung: "Eine laufende Katze",
    preis: "11,99 €",
    bild: "figur1.png"
};

let figur02: Artikel = {
    name: "Schleich Katze stehend",
    beschreibung: "Eine stehende Katze",
    preis: "9,99 €",
    bild: "figur2.png"
};

let figur03: Artikel = {
    name: "Schleich Katze sitzend",
    beschreibung: "Eine sitzende Katze",
    preis: "9,99 €",
    bild: "figur3.png"
};

let figur04: Artikel = {
    name: "Schleich Katze putzend",
    beschreibung: "Eine sich putzende Katze",
    preis: "6,99 €",
    bild: "figur4.png"
};

let figur05: Artikel = {
    name: "Schleich Katze streckend",
    beschreibung: "Eine sich streckende Katze",
    preis: "6,99 €",
    bild: "figur5.png"
};

let figur06: Artikel = {
    name: "Schleich spielende Kätzchen",
    beschreibung: "Kätzchen, die spielen",
    preis: "8,99 €",
    bild: "figur6.png"
};

let figur07: Artikel = {
    name: "Schleich spielende Kätzchen 2",
    beschreibung: "schon wieder",
    preis: "8,99 €",
    bild: "figur7.png"
};

let figur08: Artikel = {
    name: "Schleich Maine-Coon-Katze",
    beschreibung: "Eine stehende Langhaarkatze",
    preis: "3,99 €",
    bild: "figur8.png"
};

let figur09: Artikel = {
    name: "Schleich schauende Katze",
    beschreibung: "[originelle Beschreibung]",
    preis: "3,99 €",
    bild: "figur9.png"
};

// Plüschtiere
let pluesch01: Artikel = {
    name: "Plüsch-Katzen-Anhänger",
    beschreibung: "Mit Reißverschluss!",
    preis: "4,99 €",
    bild: "pluesch1.png"
};

let pluesch02: Artikel = {
    name: "FurReal friends Samtpfötchen",
    beschreibung: "Schläft schon seit Jahren. Funktioniert noch!",
    preis: "99,99 €",
    bild: "pluesch2.png"
};

// Sonstiges
let sonstiges01: Artikel = {
    name: "Katzen-Kerze",
    beschreibung: "Echte Bienenwachs-Kerze in Katzenform",
    preis: "14,99 €",
    bild: "kerze.png"
};
//#endregion

// Arrays nach Kategorie
const newArtikel: Artikel[] = [new01];
const saleArtikel: Artikel[] = [sale01, sale02];
const figurArtikel: Artikel[] = [figur01, figur02, figur03, figur04, figur05, figur06, figur07, figur08, figur09];
const plueschArtikel: Artikel[] = [pluesch01, pluesch02];
const sonstigesArtikel: Artikel[] = [sonstiges01];


for (let i: number = 0; i < newArtikel.length; i++) {

    //div generieren
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "neuheitNr" + i;
    document.getElementById("neuheiten")?.appendChild(newDiv);

    //img
    let bildImg: HTMLImageElement = document.createElement("img");
    bildImg.src = newArtikel[i].bild;
    document.getElementById("neuheitNr" + i)?.appendChild(bildImg);

    //name
    let nameP: HTMLParagraphElement = document.createElement("p");
    nameP.innerHTML = newArtikel[i].name;
    document.getElementById("neuheitNr" + i)?.appendChild(nameP);

    //beschreibung
    let beschreibungP: HTMLParagraphElement = document.createElement("p");
    beschreibungP.innerHTML = newArtikel[i].beschreibung;
    beschreibungP.className = "beschreibung";
    document.getElementById("neuheitNr" + i)?.appendChild(beschreibungP);

    //preis
    let preisP: HTMLParagraphElement = document.createElement("p");
    preisP.innerHTML = newArtikel[i].preis;
    preisP.className = "preis";
    document.getElementById("neuheitNr" + i)?.appendChild(preisP);

    //input
    let kaufen: HTMLInputElement = document.createElement("input");
    kaufen.type = "image";
    kaufen.src = "4_bild_einkaufstasche_klein.png";
    kaufen.alt = "kaufen";
    document.getElementById("neuheitNr" + i)?.appendChild(kaufen);
}

for (let i: number = 0; i < saleArtikel.length; i++) {

    //div generieren
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "angebotNr" + i;
    document.getElementById("angebote")?.appendChild(newDiv);

    //img
    let bildImg: HTMLImageElement = document.createElement("img");
    bildImg.src = saleArtikel[i].bild;
    document.getElementById("angebotNr" + i)?.appendChild(bildImg);

    //name
    let nameP: HTMLParagraphElement = document.createElement("p");
    nameP.innerHTML = saleArtikel[i].name;
    document.getElementById("angebotNr" + i)?.appendChild(nameP);

    //beschreibung
    let beschreibungP: HTMLParagraphElement = document.createElement("p");
    beschreibungP.innerHTML = saleArtikel[i].beschreibung;
    beschreibungP.className = "beschreibung";
    document.getElementById("angebotNr" + i)?.appendChild(beschreibungP);

    //preis
    let preisP: HTMLParagraphElement = document.createElement("p");
    preisP.innerHTML = saleArtikel[i].preis;
    preisP.className = "reduziert";
    document.getElementById("angebotNr" + i)?.appendChild(preisP);

    //input
    let kaufen: HTMLInputElement = document.createElement("input");
    kaufen.type = "image";
    kaufen.src = "4_bild_einkaufstasche_klein.png";
    kaufen.alt = "kaufen";
    document.getElementById("angebotNr" + i)?.appendChild(kaufen);
}

for (let i: number = 0; i < figurArtikel.length; i++) {

    //div generieren
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "figurNr" + i;
    document.getElementById("figuren")?.appendChild(newDiv);

    //img
    let bildImg: HTMLImageElement = document.createElement("img");
    bildImg.src = figurArtikel[i].bild;
    document.getElementById("figurNr" + i)?.appendChild(bildImg);

    //name
    let nameP: HTMLParagraphElement = document.createElement("p");
    nameP.innerHTML = figurArtikel[i].name;
    document.getElementById("figurNr" + i)?.appendChild(nameP);

    //beschreibung
    let beschreibungP: HTMLParagraphElement = document.createElement("p");
    beschreibungP.innerHTML = figurArtikel[i].beschreibung;
    beschreibungP.className = "beschreibung";
    document.getElementById("figurNr" + i)?.appendChild(beschreibungP);

    //preis
    let preisP: HTMLParagraphElement = document.createElement("p");
    preisP.innerHTML = figurArtikel[i].preis;
    preisP.className = "preis";
    document.getElementById("figurNr" + i)?.appendChild(preisP);

    //input
    let kaufen: HTMLInputElement = document.createElement("input");
    kaufen.type = "image";
    kaufen.src = "4_bild_einkaufstasche_klein.png";
    kaufen.alt = "kaufen";
    document.getElementById("figurNr" + i)?.appendChild(kaufen);
}

for (let i: number = 0; i < plueschArtikel.length; i++) {

    //div generieren
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "plueschNr" + i;
    document.getElementById("plueschtiere")?.appendChild(newDiv);

    //img
    let bildImg: HTMLImageElement = document.createElement("img");
    bildImg.src = plueschArtikel[i].bild;
    document.getElementById("plueschNr" + i)?.appendChild(bildImg);

    //name
    let nameP: HTMLParagraphElement = document.createElement("p");
    nameP.innerHTML = plueschArtikel[i].name;
    document.getElementById("plueschNr" + i)?.appendChild(nameP);

    //beschreibung
    let beschreibungP: HTMLParagraphElement = document.createElement("p");
    beschreibungP.innerHTML = plueschArtikel[i].beschreibung;
    beschreibungP.className = "beschreibung";
    document.getElementById("plueschNr" + i)?.appendChild(beschreibungP);

    //preis
    let preisP: HTMLParagraphElement = document.createElement("p");
    preisP.innerHTML = plueschArtikel[i].preis;
    preisP.className = "preis";
    document.getElementById("plueschNr" + i)?.appendChild(preisP);

    //input
    let kaufen: HTMLInputElement = document.createElement("input");
    kaufen.type = "image";
    kaufen.src = "4_bild_einkaufstasche_klein.png";
    kaufen.alt = "kaufen";
    document.getElementById("plueschNr" + i)?.appendChild(kaufen);
}

for (let i: number = 0; i < sonstigesArtikel.length; i++) {

    //div generieren
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "sonstigesNr" + i;
    document.getElementById("sonstiges")?.appendChild(newDiv);

    //img
    let bildImg: HTMLImageElement = document.createElement("img");
    bildImg.src = sonstigesArtikel[i].bild;
    document.getElementById("sonstigesNr" + i)?.appendChild(bildImg);

    //name
    let nameP: HTMLParagraphElement = document.createElement("p");
    nameP.innerHTML = sonstigesArtikel[i].name;
    document.getElementById("sonstigesNr" + i)?.appendChild(nameP);

    //beschreibung
    let beschreibungP: HTMLParagraphElement = document.createElement("p");
    beschreibungP.innerHTML = sonstigesArtikel[i].beschreibung;
    beschreibungP.className = "beschreibung";
    document.getElementById("sonstigesNr" + i)?.appendChild(beschreibungP);

    //preis
    let preisP: HTMLParagraphElement = document.createElement("p");
    preisP.innerHTML = sonstigesArtikel[i].preis;
    preisP.className = "preis";
    document.getElementById("sonstigesNr" + i)?.appendChild(preisP);

    //input
    let kaufen: HTMLInputElement = document.createElement("input");
    kaufen.type = "image";
    kaufen.src = "4_bild_einkaufstasche_klein.png";
    kaufen.alt = "kaufen";
    document.getElementById("sonstigesNr" + i)?.appendChild(kaufen);
}

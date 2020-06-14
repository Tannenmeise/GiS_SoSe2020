namespace Aufgabe07 {

    export interface Artikel {
        name: string;
        beschreibung: string;
        preis: number;
        bild: string;
        kategorie: string;
    }

    export let artikelArray: Artikel[];
}
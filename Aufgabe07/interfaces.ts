namespace Aufgabe07 {

    export interface Artikel {
        name: string;
        beschreibung: string;
        preis: number;
        bild: string;
        kategorie: string;
    }

    export let artikelArray: Artikel[];
    
    export async function communicate(_url: RequestInfo): Promise<void> {

        let response: Response = await fetch(_url);
        let response2: JSON = await response.json();
        artikelArray = JSON.parse(JSON.stringify(response2));
    }
}
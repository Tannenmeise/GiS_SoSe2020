namespace Pruefungsaufgabe {

    export interface Klassiker {
        name: string;
        beschreibung: string;
        behaelter: string;
        kugel1: string;
        kugel2: number;
        kugel3: string;
        topping: string;
        streusel: string;
        beilage: string;
    }

    export let klassikerArray: Klassiker[];
}
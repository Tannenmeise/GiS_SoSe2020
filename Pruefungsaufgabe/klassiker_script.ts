namespace Pruefungsaufgabe {


    async function communicate(_url: RequestInfo): Promise<void> {

        let response1: Response = await fetch(_url);
        let response2: JSON = await response1.json();
        klassikerArray = JSON.parse(JSON.stringify(response2));
    }

    klassikerErstellen();

    async function klassikerErstellen(): Promise<void> {

        await communicate("klassiker.json");

        for (let i: number = 0; i < klassikerArray.length; i++) {
            //div generieren
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "klassiker" + i;
            document.getElementById("klassiker")?.appendChild(newDiv);
            //name
            let nameP: HTMLParagraphElement = document.createElement("p");
            nameP.innerHTML = klassikerArray[i].name;
            nameP.className = "name";
            document.getElementById("klassiker" + i)?.appendChild(nameP);
            //beschreibung
            let beschreibungP: HTMLParagraphElement = document.createElement("p");
            beschreibungP.innerHTML = klassikerArray[i].beschreibung;
            beschreibungP.className = "beschreibung";
            document.getElementById("klassiker" + i)?.appendChild(beschreibungP);
            //DIV FÜR BILD
            let bildDiv: HTMLDivElement = document.createElement("div");
            bildDiv.id = "klassikerBild" + i;
            document.getElementById("klassiker" + i)?.appendChild(bildDiv);
            //behaelter
            let behaelterImg: HTMLImageElement = document.createElement("img");
            behaelterImg.src = "Vorschau/" + klassikerArray[i].behaelter + ".png";
            behaelterImg.id = "behaelterBild";
            document.getElementById("klassikerBild" + i)?.appendChild(behaelterImg);
            //kugel1
            let kugel1Img: HTMLImageElement = document.createElement("img");
            kugel1Img.src = "Vorschau/" + klassikerArray[i].kugel1 + "kugel.png";
            kugel1Img.id = "kugel1Bild";
            document.getElementById("klassikerBild" + i)?.appendChild(kugel1Img);
            //kugel2
            let kugel2Img: HTMLImageElement = document.createElement("img");
            kugel2Img.src = "Vorschau/" + klassikerArray[i].kugel2 + "kugel.png";
            kugel2Img.id = "kugel2Bild";
            document.getElementById("klassikerBild" + i)?.appendChild(kugel2Img);
            //kugel3
            let kugel3Img: HTMLImageElement = document.createElement("img");
            kugel3Img.src = "Vorschau/" + klassikerArray[i].kugel3 + "kugel.png";
            kugel3Img.id = "kugel3Bild";
            document.getElementById("klassikerBild" + i)?.appendChild(kugel3Img);
            //topping
            let toppingImg: HTMLImageElement = document.createElement("img");
            toppingImg.src = "Vorschau/" + klassikerArray[i].topping + ".png";
            toppingImg.id = "toppingBild";
            document.getElementById("klassikerBild" + i)?.appendChild(toppingImg);
            //streusel
            let streuselImg: HTMLImageElement = document.createElement("img");
            streuselImg.src = "Vorschau/" + klassikerArray[i].streusel + ".png";
            streuselImg.id = "streuselBild";
            document.getElementById("klassikerBild" + i)?.appendChild(streuselImg);
            //beilage
            let beilageImg: HTMLImageElement = document.createElement("img");
            beilageImg.src = "Vorschau/" + klassikerArray[i].beilage + ".png";
            beilageImg.id = "beilageBild";
            document.getElementById("klassikerBild" + i)?.appendChild(beilageImg);
        }
    }
}
"use strict";
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    async function communicate(_url) {
        let response1 = await fetch(_url);
        let response2 = await response1.json();
        Pruefungsaufgabe.klassikerArray = JSON.parse(JSON.stringify(response2));
    }
    klassikerErstellen();
    async function klassikerErstellen() {
        await communicate("klassiker.json");
        for (let i = 0; i < Pruefungsaufgabe.klassikerArray.length; i++) {
            //div generieren
            let newDiv = document.createElement("div");
            newDiv.id = "klassiker" + i;
            document.getElementById("klassiker")?.appendChild(newDiv);
            //name
            let nameP = document.createElement("p");
            nameP.innerHTML = Pruefungsaufgabe.klassikerArray[i].name;
            nameP.className = "name";
            document.getElementById("klassiker" + i)?.appendChild(nameP);
            //beschreibung
            let beschreibungP = document.createElement("p");
            beschreibungP.innerHTML = Pruefungsaufgabe.klassikerArray[i].beschreibung;
            beschreibungP.className = "beschreibung";
            document.getElementById("klassiker" + i)?.appendChild(beschreibungP);
            //DIV FÜR BILD
            let bildDiv = document.createElement("div");
            bildDiv.id = "klassikerBild" + i;
            document.getElementById("klassiker" + i)?.appendChild(bildDiv);
            //behaelter
            let behaelterImg = document.createElement("img");
            behaelterImg.src = "Vorschau/" + Pruefungsaufgabe.klassikerArray[i].behaelter + ".png";
            behaelterImg.id = "behaelterBild";
            document.getElementById("klassikerBild" + i)?.appendChild(behaelterImg);
            //kugel1
            let kugel1Img = document.createElement("img");
            kugel1Img.src = "Vorschau/" + Pruefungsaufgabe.klassikerArray[i].kugel1 + "kugel.png";
            kugel1Img.id = "kugel1Bild";
            document.getElementById("klassikerBild" + i)?.appendChild(kugel1Img);
            //kugel2
            let kugel2Img = document.createElement("img");
            kugel2Img.src = "Vorschau/" + Pruefungsaufgabe.klassikerArray[i].kugel2 + "kugel.png";
            kugel2Img.id = "kugel2Bild";
            document.getElementById("klassikerBild" + i)?.appendChild(kugel2Img);
            //kugel3
            let kugel3Img = document.createElement("img");
            kugel3Img.src = "Vorschau/" + Pruefungsaufgabe.klassikerArray[i].kugel3 + "kugel.png";
            kugel3Img.id = "kugel3Bild";
            document.getElementById("klassikerBild" + i)?.appendChild(kugel3Img);
            //topping
            let toppingImg = document.createElement("img");
            toppingImg.src = "Vorschau/" + Pruefungsaufgabe.klassikerArray[i].topping + ".png";
            toppingImg.id = "toppingBild";
            document.getElementById("klassikerBild" + i)?.appendChild(toppingImg);
            //streusel
            let streuselImg = document.createElement("img");
            streuselImg.src = "Vorschau/" + Pruefungsaufgabe.klassikerArray[i].streusel + ".png";
            streuselImg.id = "streuselBild";
            document.getElementById("klassikerBild" + i)?.appendChild(streuselImg);
            //beilage
            let beilageImg = document.createElement("img");
            beilageImg.src = "Vorschau/" + Pruefungsaufgabe.klassikerArray[i].beilage + ".png";
            beilageImg.id = "beilageBild";
            document.getElementById("klassikerBild" + i)?.appendChild(beilageImg);
        }
    }
})(Pruefungsaufgabe || (Pruefungsaufgabe = {}));
//# sourceMappingURL=klassiker_script.js.map
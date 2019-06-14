var name;
var gebtag;
var ort;
var rolle;

var datar;

function request() {
    var xhrqst = new XMLHttpRequest();
    xhrqst.open("GET","script/datenbank.php?dname="+document.getElementById("name").value+"&dgebtag="+document.getElementById("gebtag").value
    +"&dort="+document.getElementById("ort").value+"&drolle="+document.getElementById("rolle").value);
    xhrqst.send(null);
    window.alert("Daten gesendet");
};

//get Data
function DatenLesen() {
    var xhrqst = new XMLHttpRequest();
    xhrqst.open("GET", "script/datenbank2.php", true)
    xhrqst.send();

    xhrqst.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var data = JSON.parse(this.responseText);
            console.log(data);
            for (i in data){
                CardsErstellen(data[i][0], data[i][1], data[i][2], data[i][3], data[i][4])
            }
        }
    }    
};

function CardsErstellen() {
    var div1 = document.createElement("DIV");
    div1.className="col-sm-4";
    var card = document.createElement("DIV");
    card.className = "card";
    var cardHeader = document.createElement("DIV");
    cardHeader.className = "card-header";
    var cardHeaderName = document.createElement("DIV");
    cardHeaderName.className = "";
    cardHeaderName.innerHTML = name;
    //var cardHeaderImage = document.createElement("IMG");
    //cardHeaderImage.className = "card-image-right";
    //cardHeaderImage.src = bild;
    var cardBody = document.createElement("DIV");
    cardBody.className = "card-body";
    cardBody.innerHTML = "Geburtstag: " + gebtag + ", Ort: " + ort;
    var cardFooter = document.createElement("DIV");
    cardFooter.className = "card-footer";
    cardFooter.innerHTML = "Rolle: " + rolle;

    div1.appendChild(card);
    card.appendChild(cardHeader);
    //cardHeader.appendChild(cardHeaderImage);
    cardHeader.appendChild(cardHeaderName);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    document.getElementById("cardContainer").appendChild(div1);
}
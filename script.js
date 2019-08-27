createPlate();

function createPlate(){
  createTitle();
  whoIsPlaying();
  createTable();
}

var grille = new Array();
for (var i = 0; i < 7; i++) {
  grille[i]= new Array();
}


function createTitle(){
  var title = document.createElement('div');
  title.innerHTML = "Puissance 4";
  title.style.fontSize="30px";
  title.style.fontWeight="Bold";
  title.style.height = "140px";
  document.getElementById('title').appendChild(title);
}

function createTable(){
  var plateau = document.createElement('table');
  plateau.style.borderCollapse = "collapse";
  plateau.style.textAlign="center";
  plateau.style.width = "700px";
  plateau.style.height = "600px";
  for(var i = 0; i < 6; i++){
    var row = plateau.insertRow();
    for(var j = 0; j < 7; j++){
      var col = row.insertCell();
      col.id= i+1 + ":" + (j+1);
      col.style.border = '3px solid black';
      col.style.padding = "0";
      col.style.width="100px";
      col.style.height="100px";
      col.style.maxWidth="100px";
      col.style.maxHeight="100px";
      col.style.minWidth="100px";
      col.style.minHeight="100px";
    }
  }
  document.getElementById('plate').appendChild(plateau);
  plateau.id="table"
}

// Cette fonction est à compléter pour que le numéro du joueur soit modifié après chaque coup
function whoIsPlaying(){
  var playing = document.createElement('div');
  playing.innerHTML = "C'est au joueur 1 de jouer";
  playing.fontSize="25px";
  document.getElementById('playerTurn').appendChild(playing);
}



cells = document.getElementsByTagName('td');
var couleur = "yellow";
for (var i = 0; i < cells.length; i++) {
  cells[i].onclick=function(){
    var circle = document.createElement('div');
    circle.style.borderRadius="50%";
    circle.style.width="90px";
    circle.style.height="90px";
    circle.style.padding="5px";
    circle.style.background=couleur;
    var whichId=this.id;
    var x = whichId.charAt(0);
    var y = whichId.charAt(2);
    console.log("colonne: " +x);
    console.log("ligne: " +y);
    var placesRestantes = 0
    for (var i = 1; i < 7; i++) {
      var column = document.getElementById(i +':' +y);
      if (column.innerHTML=="") {
        placesRestantes++;
      }
    }
    console.log("nombre de places restantes : " +placesRestantes);
    if (placesRestantes ==0) {
      alert("La colonne est pleine !")
    } else {
      var cellToFill = document.getElementById(placesRestantes +':' +y);
      if (couleur === "yellow") {
        cellToFill.appendChild(circle);
        couleur="red"
      } else{
        cellToFill.appendChild(circle);
        couleur="yellow"
      }
    }
  }
}


// Créer une fonction qui vérifie si le joueur a gagné ou pas


createPlate(); /* création du plateau de jeu */

function createPlate(){
  createTitle();
  whoIsPlaying();
  createTable();
}

/* Fonction de création du titre */
function createTitle(){
  var title = document.createElement('div');
  title.innerHTML = "Puissance 4";
  title.style.fontSize="30px";
  title.style.fontWeight="Bold";
  title.style.height = "140px";
  document.getElementById('title').appendChild(title);
}

/* fonction de création du tableau */
function createTable(){
  var plateau = document.createElement('table');
  plateau.style.borderCollapse = "collapse";
  plateau.style.textAlign="center";
  plateau.style.width = "700px";
  plateau.style.height = "600px";
  for(var i = 0; i < 6; i++){ /* création d'un tableau */
    var row = plateau.insertRow();
    for(var j = 0; j < 7; j++){ /* création d'un tableau de tableau */
      var col = row.insertCell();
      col.id= i+1 + ":" + (j+1); /* attribution d'un id dépendant de la cellule, allant de 1:1 à 6:7 */
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
}

// Cette fonction est à compléter pour que le numéro du joueur soit modifié après chaque coup
function whoIsPlaying(){
  var playing = document.createElement('div');
  playing.innerHTML = "C'est au joueur 1 de jouer";
  playing.fontSize="25px";
  document.getElementById('playerTurn').appendChild(playing);
}


//Fonction qui ira inscrire les jetons dans les cellules
cells = document.getElementsByTagName('td');
var couleur = "yellow";
for (var i = 0; i < cells.length; i++) {
  cells[i].onclick=function(){ /* évènement au click sur les cellules du tableau */
    var circle = document.createElement('div'); /* création d'une div en forme de cercle */
    circle.style.borderRadius="50%";
    circle.style.width="90px";
    circle.style.height="90px";
    circle.style.padding="5px";
    circle.style.background=couleur;
    var whichId=this.id; /* récupération de l'id de la cellule sur laquelle on click */
    var x = whichId.charAt(0); /* récupération de la première valeur. Format x:y, on récupèrera l'index 0, à savoir x ici */
    var y = whichId.charAt(2); /* idem avec l'index 2 */
    // console.log("colonne: " +x);
    // console.log("ligne: " +y);
    var placesRestantes = 0 /* initialisation du nombre de places dispo restantes dans la colonne */
    for (var i = 1; i < 7; i++) {
      var column = document.getElementById(i +':' +y); /* cette boucle vérifiera les contenus des cellules dans la colonne y */
      if (column.innerHTML=="") {
        placesRestantes++; /* incrémentation de la valeur de 1 a chaque fois qu'une cellule vide est rencontrée */
      }
    }
    // console.log("nombre de places restantes : " +placesRestantes);
    if (placesRestantes ==0) {
      alert("La colonne est pleine !")
    } else {
      var cellToFill = document.getElementById(placesRestantes +':' +y); /* insère une div en cercle dans la cellule ayant pour colonne y, mais ligne la valeur du nombre de place. Sachant
                                                                          que la cellule la plus basse a pour valeur de x 6, les jetons se placeront du bas vers le haut */
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


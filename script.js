createPlate(); /* création du plateau de jeu */

function createPlate(){
  createTitle();
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
  col.id= i+1+":"+(j+1); /* attribution d'un id dépendant de la cellule, allant de 1:1 à 6:7 */
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
    // console.log("ligne: " +x);
    // console.log("colonne: " +y);
    var placesRestantes = 0 /* initialisation du nombre de places dispo restantes dans la colonne */
    for (var i = 1; i < 7; i++) {
      var column = document.getElementById(i+':'+y); /* cette boucle vérifiera les contenus des cellules dans la colonne y */
      if (column.innerHTML=="") {
        placesRestantes++; /* incrémentation de la valeur de 1 a chaque fois qu'une cellule vide est rencontrée */
      }
    }
    // console.log("nombre de places restantes : " +placesRestantes);
    if (placesRestantes ==0) {
      alert("La colonne est pleine !")
    } else {
      var cellToFill = document.getElementById(placesRestantes+':'+y); /* insère une div en cercle dans la cellule ayant pour colonne y, mais ligne la valeur du nombre de place. Sachant
      que la cellule la plus basse a pour valeur de x 6, les jetons se placeront du bas vers le haut */
      if (couleur === "yellow") {
        cellToFill.appendChild(circle);
        couleur="red";
      } else{
        cellToFill.appendChild(circle);
        couleur="yellow";
      }
    }
    whoIsPlaying();
    /* initialisation des compteurs pour l'alignement des pions */
    var countRight=0;
    var countLeft=0;
    var sum = 0;
    var sumBottom =0;
    var sumDiagTopRight=0;
    var sumDiagTopLeft=0;
    var countTopRight =0;
    var countTopLeft =0;
    var countBotLeft=0;
    var countBotRight=0;
    var currentId=cellToFill.id;
    var z = parseInt(currentId.charAt(0),10); /* récupération des chiffres de l'id, et conversion de string à int */
    var t = parseInt(currentId.charAt(2),10);

    /* Ici, on aura la fonction qui calculera le nombre de voisins de la même couleur par la droite */
    for (var i=t+1; i< 8; i++){
      var contains = document.getElementById(z+':'+i);
      var childRight = contains.children; /* récupération des éléments enfants */
      if(childRight[0]!== undefined){ /* vérification que le premier enfant n'est pas inexistant */
        // console.log(childRight[0].style.background);
      if (couleur ==="red"){
        if (childRight[0].style.background==="yellow"){ /* comparaison de la couleur des background des cercles pour permettre le calcul du nombre de pions alignés */
          countRight++;
        } else {break;}
      } else {
        if (childRight[0].style.background==="red"){
          countRight++;
        } else {break;}
      }
    } else {
      break
    }
    console.log("nombre de pions à droite : " +countRight)
  }
  /* Ici, on aura la fonction qui calculera le nombre de voisins de la même couleur par la gauche */
  for (var i=t-1; i>0; i--){
    var contains = document.getElementById(z+':'+i);
    var childLeft = contains.children;
    if(childLeft[0]!== undefined){
        // console.log(childLeft[0].style.background);
        if (couleur ==="red"){
          if (childLeft[0].style.background==="yellow"){
            countLeft++;
          } else {
            break;
          }
        } else {
          if (childLeft[0].style.background==="red"){
            countLeft++;
          } else {
            break;
          }
        }
      } else {break}
      console.log("nombre de pions à gauche: "+countLeft);
    }
    /* Ici on aura la fonction qui calculera le nombre de voisins de la même couleur par le bas */
    for (var i=z+1; i<7; i++){
      var contains = document.getElementById(i+':'+t);
      var childBottom = contains.children;
      if(childBottom[0]!= undefined){
        // console.log(childBottom[0].style.background);
        if (couleur ==="red"){
          if (childBottom[0].style.background==="yellow"){
            sumBottom++;
          } else {
            break;
          }
        } else {
          if (childBottom[0].style.background==="red"){
            sumBottom++;
          } else {
            break;
          }
        }
      }
    }
    /* Calcule le nombe de voisins par la diagonale haute droite */

    for (var i=z-1, j= t+1; i>0, j < 8; i--, j++){
      var contains = document.getElementById(i+':'+j);
      // console.log(contains);
      if(contains != null){
        var childTopRight = contains.children; /* récupération des éléments enfants */
        if(childTopRight[0]!= undefined){ /* vérification que le premier enfant n'est pas inexistant */
        // console.log(childRight[0].style.background);
      if (couleur ==="red"){
        if (childTopRight[0].style.background==="yellow"){ /* comparaison de la couleur des background des cercles pour permettre le calcul du nombre de pions alignés */
          countTopRight++;
        } else {
          break;
        }
      } else {
        if (childTopRight[0].style.background==="red"){
          countTopRight++;
        } else {
          break;
        }
      }
    }else{break}
  }
}
/* Calcule le nombre de voisins par la diagonale haute gauche */

for (var i=z-1, j= t-1; i>0, j > 0; i--, j--){
  var contains = document.getElementById(i+':'+j);
  // console.log(contains);
  if(contains != null){
    var childTopLeft = contains.children; /* récupération des éléments enfants */
    if(childTopLeft[0]!= undefined){ /* vérification que le premier enfant n'est pas inexistant */
        // console.log(childRight[0].style.background);
      if (couleur ==="red"){
        if (childTopLeft[0].style.background==="yellow"){ /* comparaison de la couleur des background des cercles pour permettre le calcul du nombre de pions alignés */
          countTopLeft++;
        } else {
          break;
        }
      } else {
        if (childTopLeft[0].style.background==="red"){
          countTopLeft++;
        } else {
          break;
        }
      }
    }else{break}
  }
}

/* Calcule le nombre de voisins par la diagonale basse gauche */

for (var i=z+1, j= t-1; i<7, j >0; i++, j--){
  var contains = document.getElementById(i+':'+j);
  // console.log(contains);
  if (contains != null){
    var childBotLeft = contains.children; /* récupération des éléments enfants */
    if(childBotLeft[0]!= undefined){ /* vérification que le premier enfant n'est pas inexistant */
        // console.log(childRight[0].style.background);
      if (couleur ==="red"){
        if (childBotLeft[0].style.background==="yellow"){ /* comparaison de la couleur des background des cercles pour permettre le calcul du nombre de pions alignés */
          countBotLeft++;
        } else {
          break;
        }
      } else {
        if (childBotLeft[0].style.background==="red"){
          countBotLeft++;
        } else {
          break;
        }
      }
    }else{break}
  }
}
/* Calcule le nombre de voisins par la diagonale basse droite */

for (var i=z+1, j= t+1; i<8, j < 8; i++, j++){
  var contains = document.getElementById(i+':'+j);
  // console.log(contains);
  if (contains != null){
    var childBotRight = contains.children; /* récupération des éléments enfants */
    if(childBotRight[0]!= undefined){ /* vérification que le premier enfant n'est pas inexistant */
        // console.log(childRight[0].style.background);
      if (couleur ==="red"){
        if (childBotRight[0].style.background==="yellow"){ /* comparaison de la couleur des background des cercles pour permettre le calcul du nombre de pions alignés */
          countBotRight++;
        } else {
          break;
        }
      } else {
        if (childBotRight[0].style.background==="red"){
          countBotRight++;
        } else {
          break;
        }
      }
    }else{break}
  }
}

setTimeout(function(){
  sum = countLeft+countRight; /* ajout des 2 sommes des pions alignés sur la droite et la gauche */
  sumDiagTopRight = countTopRight+countBotLeft;
  sumDiagTopLeft = countTopLeft + countBotRight;
  if (sum >= 3 || sumBottom >= 3 || sumDiagTopRight >= 3 || sumDiagTopLeft >=3) { /* somme de 3 car le pion posé est compté */
    if (couleur ==="red") {
      alert("Le joueur 1 remporte la manche");
      newGame();
    } else {
      alert("Le joueur 2 remporte la manche");
      newGame();
    }
  }
},100);
}
}


function newGame(){
  if (confirm("Voulez vous relancer une partie?")){
    document.location.reload(true);
  }
}

// Cette fonction est à compléter pour que le numéro du joueur soit modifié après chaque coup
var playing = document.createElement('div');
document.getElementById('playerTurn').appendChild(playing);
playing.innerHTML =" Joueur 1, commencez";
playing.style.fontSize ="35px";
playing.style.textAlign="center";
var note = document.createElement('div');
document.getElementById('playerTurn').appendChild(note);
note.style.paddingTop="30px";
note.style.fontSize="20px";
function whoIsPlaying(){
  if (couleur == "yellow"){
    playing.innerHTML = "C'est au joueur 1 de jouer";
    playing.style.fontSize="35px";
  } else{
    playing.innerHTML = "C'est au joueur 2 de jouer";
    playing.style.fontSize="35px";
  }
}

// Créer une fonction qui vérifie si le joueur a gagné ou pas


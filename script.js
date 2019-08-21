createPlate();

function createPlate(){
  createTitle();
  whoIsPlaying();
  createTable();
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

function whoIsPlaying(){
  var playing = document.createElement('div');
  playing.innerHTML = "C'est au joueur 1 de jouer";
  playing.fontSize="25px";
  document.getElementById('playerTurn').appendChild(playing);

}



cells = document.getElementsByTagName('td');
for (var i = 0; i < cells.length; i++) {
  cells[i].onclick=createCircle;
}


var couleur = "yellow"
function createCircle(){
  var circle = document.createElement('div');
  circle.style.borderRadius="50%";
  circle.style.width="90px";
  circle.style.height="90px";
  circle.style.padding="5px";
  circle.style.background=couleur;
  if (this.innerHTML ==="") {
    if (couleur === "yellow") {
      this.appendChild(circle);
      couleur = "red";
    } else {
      this.appendChild(circle);
      couleur = "yellow";
    }
  }
}


let table = document.createElement('table');
let tbody = document.createElement('tbody');



table.append(tbody);


document.getElementById('body').append(table);


let nl = prompt("Combien de ligne voulez vous ?");
let nC = prompt("Combien de colone voulez vous ?");



for (i = 0; i < nl; i++) {
  new_row = table.insertRow(0);  //TR ligne
  new_row.classList.add("ok")
  for (b = 0; b < nC; b++) {
    colonne = new_row.insertCell(0);  // TD colonne
    let nimp = Math.floor(Math.random() * 100);
    colonne.classList.add("oui");
    colonne.innerHTML = `<img src="https://picsum.photos/id/` + nimp + `/200/200">` 
  }
}







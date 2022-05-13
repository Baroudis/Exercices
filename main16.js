
//div = document.createElement('div');
ul = document.createElement('ul');
li = document.createElement('li');
body = document.getElementById("body");

body.append(ul)
//ul.append(li)

//li.innerHTML = "salut";
comptage = 0;

for (i = 0; i < 10; i++) {
    
    let Nb = Math.floor(Math.random() * 100)
    //let Nb = 10;
    //console.log(Nb)
    ul.innerHTML += "<li>" + Nb;

    if (Nb == 10) {
        //console.log(Nb + " il y a le nombre 10!")
        comptage++;   
        console.log("il y a : "+ comptage + " Nombre 10 !")
    }   
}document.getElementById("nombres").innerHTML = "il y a : "+ comptage + " Nombre 10 !";




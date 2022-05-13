
// function verif() {
//     age = document.getElementById("lage").value;
//     if (age > 18) {
//         document.getElementById("affi").innerHTML = "<p>Bienvenue vous pouvez entré"
//     } else if (age == 18) {
//         document.getElementById("affi").innerHTML = "<p>Bienvenue dans le monde de la nuit !!"
//     } else {
//         document.getElementById("affi").innerHTML = "<p>Vous ne pouvez pas rentré !!"
//     }
// }





//Exercice


let a = 5;
let affi = "";

for (let i = 1; i <= a; i++) {
    for (let b = 0; b < i; b++) {
        affi += i;
    }
    affi += "</br>";
}
console.log(affi);
document.getElementById("chif").innerHTML = affi


// let target = document.getElementById("chif")
// for (i = 0; i < 5; i++) {
//     let numDiv = document.createElement("p");
//     let val = i + 1;
//     let string = "";
//     for (j = 0; j < val; j++) { string += val };
//     numDiv.innerHTML = string;
//     target.append(numDiv);
// }

//Exercice 14


let valeur = 5;
let string = ""
let string2 = ""

let tablo = document.getElementById('letableau')
let ltd = document.createElement('td')
// console.log(ltd)
let ltr = document.createElement('tr')
ltr.classList.add("adjou")

ltr.append(ltd);



let fin = ltr.append(ltd);

console.log(fin)


// for (z = 0; z < 5; z++) {
    
//     // string2 +=  ltd;
//         //string2 += fin;
//        // console.log(string2)
//          //ltr.append(ltd);
//         //ltr.innerHTML = string
//         //tablo.append(ltr);
//     //ltd.innerHTML = string2
// //tablo.append(ltr);

// string2 +=  z

// }document.getElementById("chif").innerHTML = string2


mu = 5;
chaine =""


for(i = 1;  i <= 10; i++){

chaine +=  "<p>" + mu + " X " + i + " = "+ mu*i ;
document.getElementById('tables').innerHTML = chaine

}

code = 77000
codefin= 77999
cod = ""

while( code  <= codefin ){

    cod += "<p>" + code++;
    document.getElementById('cod').innerHTML = cod
}

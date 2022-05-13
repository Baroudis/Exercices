code = 77000
codefin= 77999
cod = ""

while( code  <= codefin ){

    cod += "<p>" + code++;
    document.getElementById('cod').innerHTML = cod
}

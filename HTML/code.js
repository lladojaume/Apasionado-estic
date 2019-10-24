
function ex1(a){
    var cadena=null;
    cadena=cadena+a+", ";
    while(a!=1){
        
        if(a%2==0){
            a=a/2;
        }
        else{
            a=3*a+1;
        }  
        cadena=cadena+a+", ";          
    }    
    console.log(cadena);
}

function ex2(telf) {
    return (telf.toString().length ===  9 && !isNaN(telf));
}

function ex3(telf){    
    telf=telf.toString();
    if(ex2(telf)){
        telefon=telf.substring(0,3)+"-"+telf.substring(3,6)+"-"+telf.substring(6,9);
        console.log(telefon);
    }
}

function ex4(cif){    
    var result = false;
    if (cif.length == 9) {
        var letra = cif.substring(0,1);
        var numeros = cif.substring(1,9);
        return letra.match(/[A-Z]/) && !isNaN(numeros);
    }
    return result;
}

function ex5(cadena1, cadena2){
    if(cadena1.toString().length>cadena2.toString().length){
        return cadena1;
    }
    else{
        return cadena2;
    }
}
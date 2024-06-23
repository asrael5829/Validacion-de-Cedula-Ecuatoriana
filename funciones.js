let cont=0;
function validar(evt){
    let cod = (evt.whitch)?evt.which: evt.keyCode;
    if(cod>=48 && cod<=57){
        return true;
    }else{
        return false;
    }
}

function digitos() {
    cont++;
    if(cont==10){
        cedulaValidar();
        cont=0;
        document.getElementById("cedula").value="";
    }
}

function cedulaValidar(){
    let cedula=document.getElementById("cedula").value;
    let caracteres = cedula.split("")
    let mul =0;
    let suma=0;
    let decima =0;
    let resta =0;
    for (let i =0; i<caracteres.length-1;i++){
        if(i%2==0){
            mul=caracteres[i]*2;
            if(mul>9){
                mul=mul-9;
            }
        }else{
            mul=caracteres[i]*1;
        }
        suma+=mul;

    }
    decima = (Math.floor(suma/10)+1)*10
    console.log(decima+"    "+ suma);
    resta =decima-suma;
    if(resta==10){
        resta=0;
    }
    if(caracteres[9]==resta){
        alert("Cedula correcta: "+ cedula);
    }else{
        alert("Cedula incorrecta: "+ cedula);
    }
}
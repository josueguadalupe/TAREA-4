class Cadena{
   vocales(){
        let frase = document.getElementById("datos").value
        let cv=0,cc=0
        for(let i=0;i < frase.length;i++){
            if (frase[i]== 'a' || frase[i]== 'e' || frase[i]== 'i' || frase[i]== 'o' || frase[i]== 'u' ) {
               cv=cv+1
            }
            if (frase[i]>= 'a' && frase[i]<= 'z' ) {
               cc=cc+1
            }
        }
        console.table({cv,cc})
        let resp = document.getElementById("resp")
        resp.textContent=`cantidad de vocales:= ${cv} cantidad de consonantes:= ${cc}`
   }
   palabras_de_una_frase(){
    let frase=document.getElementById("datos").value
    let resp=document.getElementById("resp")
    let contadorPalabras = 0;
    let dentroDePalabra = false;
    for (let i = 0; i < frase.length; i++) {
     if (frase[i] !== " " && frase[i] !== "." && frase[i] !== "," && frase[i] !== "!" && frase[i] !== "?") {
          if (!dentroDePalabra) {
              contadorPalabras++;
              dentroDePalabra = true;
           }
        }else {
          dentroDePalabra = false;
        }
        resp.textContent=`el numero de palabras en la frase es ${contadorPalabras}`
    }
   }
   caracteres_especiales(){
    let frase=document.getElementById("datos").value
    let resp=document.getElementById("resp")
    let cc=0,cp=0,cpc=0,cdp=0
    for(let i=0;i<frase.length;i++){
        if(frase[i] === ","){
            cc++
        }else if(frase[i] === "."){
            cp++
        }else if(frase[i] === ";"){
            cpc++
        }else if(frase[i] == ":"){
            cdp++
        }
    }
    resp.textContent=`tiene ${cc}"," ${cp}"." ${cpc}";" ${cdp}":" cantidad de caracteres`

   }
   frase_igual_al_leer(){
    let frase=document.getElementById("datos").value
    let nuevafrase=frase.replace(/\s/g, '')
    let resp=document.getElementById("resp")
    let frasealreves=""
    for(let i=nuevafrase.length-1;i>=0;i--){
          frasealreves= frasealreves + nuevafrase[i]
    }
        if( frasealreves === nuevafrase ){
            resp.textContent=`la frase es palindroma`
        }else{
            resp.textContent=`la frase no es palindroma`
        }

   }
   copiar_frase_invertida(){
    let frase=document.getElementById("datos").value
    let resp=document.getElementById("resp")
    let nuevafrase=""
    for(let i=frase.length-1;i>=0;i--){
        nuevafrase= nuevafrase + frase[i]
    }
    resp.textContent=`la frase invertida es ${nuevafrase}`

   }
   concatenar_frases(){
    let frase=document.getElementById("datos").value
    let frase2=document.getElementById("datos2").value
    let resp=document.getElementById("resp")
    resp.textContent=`${frase + frase2 } `

   }
   buscar_un_caracter(){
    let frase=document.getElementById("datos").value
    let buscado=document.getElementById("datos2").value
    let resp=document.getElementById("resp")
    let posicion=-1
    for(let i=0;i < frase.length;i++){
        let car= "";
        for(let j=i; j < frase.length;j++){
            if(frase[j]!=" "){
                car+= frase[j];
            }else{
                break
            }
            if(car===buscado){
                posicion=i
            }
        }
    }
    if(posicion>=0){
        resp.textContent=`La posicion de la subcadena en la frase es: ${posicion}`
    }else{
        resp.textContent=`La subcadena no se encuentra en la frase`
    }
   }
   buscar_subcadena(){
    let frase=document.getElementById("datos").value
    let buscado=document.getElementById("datos2").value
    let resp=document.getElementById("resp")
    let posicion=-1
    for(let i=0;i < frase.length;i++){
        let sub= "";
        for(let j=i; j < frase.length;j++){
            if(frase[j]!=" "){
                sub+= frase[j];
            }else{
                break
            }
            if(sub===buscado){
                posicion=i
            }
        }
    }
    if(posicion>=0){
        resp.textContent=`La posicion de la subcadena en la frase es: ${posicion}`
    }else{
        resp.textContent=`La subcadena no se encuentra en la frase`
    }
   }
   insertar_subcadena(){
        let cadena =document.getElementById("datos").value
        let subcadena =document.getElementById("datos2").value
        let posicion =parseInt(document.getElementById("posicion").value)
        let resp = document.getElementById("resp")
        let aux=""
        if (posicion >= 0 && posicion <= cadena.length){ 
            for (let i = 0; i < posicion; i++) {
                aux=aux+cadena[i]
            }
            aux=aux+subcadena+ " "
            for (let i = posicion; i < cadena.length; i++) {
                aux = aux + cadena[i]
            }
             cadena=aux
             resp.textContent = `cadena nueva:= ${cadena}`
        }
        else{
            alert("la posicion no es valida")
        }

    }
   eliminar_subcadena(){
    let frase = document.getElementById("datos").value;
    let subCadenaEliminar = document.getElementById("datos2").value;
    let resp = document.getElementById("resp");
    let posicion = -1;
    for (let i = 0; i <= frase.length - subCadenaEliminar.length; i++) {
        let subcadenaEncontrada = true;
        for (let j = 0; j < subCadenaEliminar.length; j++) {
            if (frase[i + j] !== subCadenaEliminar[j]) {
                subcadenaEncontrada = false;
                break;
            }
        }
        if (subcadenaEncontrada) {
            posicion = i;
            break;
        }
    }
    if (posicion >= 0) {
        let nuevaFrase = "";
        for (let i = 0; i < frase.length; i++) {
            if (i < posicion || i >= posicion + subCadenaEliminar.length) {
                nuevaFrase += frase[i];
            }
        }
        resp.textContent = `La frase después de eliminar la subcadena: "${nuevaFrase}"`;
    } else {
        resp.textContent = `La subcadena no se encuentra en la frase`;
    }
   }
   convertir_frase_a_arreglo(){
    let cadena=document.getElementById("datos").value
    let separador=document.getElementById("datos2").value
    let resp=document.getElementById("resp")
    let arreglo= cadena.split(separador)
    resp.textContent=`El arreglo es: ${JSON.stringify(arreglo)}`

   }
   suma_de_digitos_de_una_frase(){
     let frase = document.getElementById("datos").value;
       let resp = document.getElementById("resp");
       let suma = 0
       let arr=[]
       for (let i = 0; i < frase.length; i++) {
        let char = parseInt(frase[i]);
         if (!isNaN (char)){
          suma = suma + char
         }
        } 
        arr.push(`${suma}`)
        resp.textContent = `La suma de la frase es : ${suma}  ${arr}` ;
      }
}
const cad = new Cadena()
cad.insertar()

    
//suma_de_digitos_de_una_frase(){
   // let frase = document.getElementById("datos").value;
     // let resp = document.getElementById("resp");
     // let suma = 0
     // for (let i = 0; i < frase.length; i++) {
       // let char = parseInt(frase[i]);
       // if (!isNaN (char)){
       //   suma = suma + char
       //  }
       //} 
       //resp.textContent = `La suma de la frase es : ${suma}`;
     //}
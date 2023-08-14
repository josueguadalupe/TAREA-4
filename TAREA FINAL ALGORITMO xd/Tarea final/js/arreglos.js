class Arreglos{
  mayor(){
     
     let datos= document.getElementById("datos").value
     let numeros = datos.split(";") 
     let may=parseInt(numeros[0]) 
     for(let i=1;i < numeros.length;i++){
        if (may < parseInt(numeros[i])){
          may = parseInt(numeros[i])
        } 
     }
     let resp = document.getElementById("resp")
     resp.textContent=`El mayor del arreglo[${numeros}] es= ${may}`
  }
  menor(){
    let datos= document.getElementById("datos").value
    let numeros = datos.split(";") 
    let men=parseInt(numeros[0]) 
    for(let i=1;i < numeros.length;i++){
       if (men > parseInt(numeros[i])){
         men = parseInt(numeros[i])
       } 
    }
    let resp = document.getElementById("resp")
    resp.textContent=`El mayor del arreglo[${numeros}] es= ${men}`

  }
  promedio(){
    let valor = document.getElementById('num1').value
    let numeros = valor.split(";")
    let resp = document.getElementById("resp")
    let resultado="", sum=0
    for(let i=0; i<numeros.length;i++){
        sum=sum+parseInt(numeros[i])/numeros.length
        resultado=sum
    }
    resp.textContent = `El arreglo [ ${' ' + numeros.join(', ') + ' '}]  Su promedio es: ${resultado}`

  }
  nombre_al_reves(){
    let nombres = document.getElementById("datos").value;
    let datos = nombres.split(";");
    let resp = document.getElementById("resp");
    let longitud = datos.length;
    let nombresInvertidos = [];
    for (let i = 0; i < longitud; i++) {
        let nombreInvertido = '';
        for (let c = datos[i].length - 1; c >= 0; c--) {
            nombreInvertido += datos[i][c];
        }
        nombresInvertidos.push(nombreInvertido);
    }

    resp.textContent = `Los nombres [${' ' + datos.join(', ') + ' '}]  Al revés = ${' ' + nombresInvertidos.join(', ') + ' '}`;

  }
  buscar(){
    let datos=document.getElementById("datos").value
    let buscado= document.getElementById("buscado").value
    let resp=document.getElementById("resp")
    let numeros= datos.split(";")
    let posicion=-1
    for(let i=0;i < numeros.length;i++){
      if(numeros[i] == buscado){
        posicion=i
      }
    }
    if(posicion>=0){
      resp.textContent=`La posicion es: ${posicion}`
    }else{
      resp.textContent=`El elemento no se encuentra en el arreglo`
    }

  }
  adivina_el_numero(){
    let numero = parseInt(document.getElementById("num1").value);
    let resp= document.getElementById("resp");
    let arr=[];
  for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * 100));
      }
      let encontrado = false;
      let pos = -1;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === numero) {
          encontrado = true;
          pos = i; 
          break;
        }
      }
      let arregloTexto = "Arreglo: [ " + arr.join(", ") + " ]";
      if (encontrado) {
        resp.innerHTML = `${arregloTexto} ¡Adivinaste! El número ${numero} se encuentra en la posición ${pos}.`;
      } else {
        resp.innerHTML = `Error, no adivinaste. El número ${numero} no está en el arreglo ${arregloTexto}`;
      }

  }
  insertar(){
    let datos= document.getElementById("datos").value
    let elemento= document.getElementById("buscado").value
    let posicion= parseInt(document.getElementById("posicion").value)
    let resp = document.getElementById("resp")
    let arreglo = datos.split(";") 
    let nuevoArr=[]
    for(let i=0;i <= arreglo.length;i++){
      if(i==posicion) {
        nuevoArr.push(elemento)
      }
        nuevoArr.push(arreglo[i])
    }
    if (posicion>arreglo.length || posicion<0){
      resp.textContent= `Posicion incorrecta`
    }else{
      resp.textContent= `El nuevo arreglo es: [${nuevoArr}]`
    }

  }
  eliminar(){
    let datos= document.getElementById("datos").value
    let elemento= document.getElementById("buscado").value
    let resp = document.getElementById("resp")
    let numeros = datos.split(";") 
    let nuevoArr=[]
    for(let i=0;i < numeros.length;i++){
      if(numeros[i]!=elemento) {
        nuevoArr.push(numeros[i])
      }
    }
    resp.textContent= `El nuevo arreglo es: [${nuevoArr}]`
  }
  base2_10(){
    let datos = document.getElementById("datos").value;
    let resp = document.getElementById("resp");
    let base2Number = datos;
    let base10Number = 0;
    let exponente = 0;
    
    for (let i = base2Number.length - 1; i >= 0; i--) {
        if (base2Number[i] === '1') {
            base10Number += Math.pow(2, exponente);
        }
        exponente++;
    }
    resp.textContent = `La conversión es: ${base10Number}`;

  }
  base_10_a_2(){
    let datos = document.getElementById("datos").value;
    let resp = document.getElementById("resp");
    let base10Number = parseInt(datos, 10);
    let base2Number = "";
    while (base10Number > 0) {
    base2Number = (base10Number % 2) + base2Number;
    base10Number = Math.floor(base10Number / 2);
}
if (base2Number === "") {
    base2Number = "0";
}
resp.textContent = `La conversión es: ${base2Number}`;
  }
  sueldos_empleados(){
    let datos= document.getElementById("datos").value
    let vH= document.getElementById("buscado").value
    let nHoras= document.getElementById("posicion").value
    let resp = document.getElementById("resp")
    let nombres = datos.split(";") 
    let valorHora= vH.split(";")
    let numeroHoras= nHoras.split(";")
    let sueldo=0,sueldos=0,promedio=0
    for(let i=0;i < nombres.length;i++){
      sueldo= parseInt(valorHora[i]) * parseInt(numeroHoras[i])
      sueldos+=sueldo
    }
    promedio=(sueldos/nombres.length).toFixed(2)
    resp.textContent= `El promedio de los sueldos es: ${promedio}`
  }
  acuDivisores(num){
    let acu=0
    for(let c=1;c<num;c++){
       if (num%c==0){
           acu=acu+c
       }
    }
    return acu 
 }
  suma_divisores(){
      let datos= document.getElementById("datos").value
      let numeros = datos.split(";") 
      let acu,num=0,resultado=""
      for(let i=0;i < numeros.length;i++){
          num=parseInt(numeros[i])
          acu=this.acuDivisores(num)
          resultado=resultado+acu+"|"    
      }
      let resp = document.getElementById("resp")
      resp.textContent=`La suma de los divisores del arreglo[${numeros}] son= ${resultado}`

  }
  perfectos(){
   
     let datos= document.getElementById("datos").value
     let numeros = datos.split(";") 
     let acu,num=0,resultado=""
     for(let i=0;i < numeros.length;i++){
         num=parseInt(numeros[i])
         acu=this.acuDivisores(num)
         if (acu==num){
            resultado=resultado+num    
         }
      }
     let resp = document.getElementById("resp")
     resp.textContent=`Los numeros perfecto del arreglo [${numeros}] son= ${resultado}`
  }
  primos(){
    let datos=document.getElementById("datos").value
    let resp=document.getElementById("resp")
    let numeros= datos.split(";")
    let acu=0,num=0,contadorprimos=0
    for(let i=0;i < numeros.length;i++){
      num=parseInt(numeros[i])
      acu=this.acuDivisores(num)
      if(acu==1){
        contadorprimos++
      }
    }
    resp.textContent=`La cantidad de primos del arreglo es: ${contadorprimos}`

  }
  Repeticion_de_un_numero_en_un_arreglo(){
  let datos= document.getElementById("num1").value
  let arreglo = datos.split(";")
  let numero = document.getElementById("num2").value;
  let resp = document.getElementById("resp");
  let c=0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === numero) {
          c++;
        }
    }
    if(c==0){
      resp.innerHTML = "¡No hay ninguna repeticion!";
    }else{
      resp.innerHTML = `El arreglo [ ${' ' + arreglo.join(', ') + ' '}] <br>  El numero: ${numero}  <br>  Sus repeticiones: ${c}`;
    }

  }
  Vuelto_cantidad_minima_de_billetes(){
    let pago= document.getElementById("datos").value
    let costo= document.getElementById("buscado").value
    costo= parseFloat(costo)
    pago= parseFloat(pago)
    let vuelto= pago-costo
    const billetes = [50, 20, 10, 5, 1];
    let resultado = []
    if(vuelto<100 && costo<pago){
      for (let i = 0; i < billetes.length; i++) {
        let denominacion = billetes[i];
        let cantidad = Math.floor(vuelto / denominacion);
        if (cantidad > 0) {
            if (denominacion >= 1) {
                resultado.push(`${cantidad} Billetes de --- $${denominacion}`);
            } else {
                resultado.push(` ${cantidad * 100} centavos`);
            }
            vuelto -= cantidad * denominacion;
        }
    }
    
    resultado.push(`Y ${vuelto.toFixed(2)} centavos`);

    resp.innerHTML = `Tu cambio en billetes es:<br>${resultado.join('<br>')}`;
    }else{
      resp.innerHTML = `Error en el pago`;
    }
  }
}

const arr = new Arreglos()
arr.estudiantes()

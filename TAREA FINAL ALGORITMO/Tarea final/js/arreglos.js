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
    resp.textContent = `El arreglo [ ${' ' + numeros.join(', ') + ' '}] <br> Su promedio es: ${resultado}`

  }
  nombre_al_reves(){
    let nombres = document.getElementById("num1").value;
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

    resp.textContent = `Los nombres [${' ' + datos.join(', ') + ' '}] <br> Al revés = ${' ' + nombresInvertidos.join(', ') + ' '}`;

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
        arr.push(Math.floor(Math.random() * 1000) + 1);
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
        resp.innerHTML = `${arregloTexto}<br> ¡Adivinaste! El número ${numero} se encuentra en la posición ${pos}.`;
      } else {
        resp.innerHTML = `Error, no adivinaste. El número ${numero} no está en el arreglo.<br>${arregloTexto}`;
      }

  }
  insertar(){
    let valores = document.getElementById("num1").value;
    let buscado = document.getElementById("num2").value;
    let posicion = parseInt(document.getElementById("pos").value); 
    let numero = valores.split(";").map(valor => parseInt(valor.trim()));
    let numero_insertado = parseInt(Math.abs(buscado.trim()));
    let resp= document.getElementById("resp");
    let i = 0;
    while (i < numero.length && numero[i] < numero_insertado) {
        i += 1;
    }
    numero.splice(posicion, 0, numero_insertado);
    if (posicion < numero.length){
      resp.innerHTML =`La serie es: [ ${valores} ]<br> El elemento a insertar es: ${buscado}<br> Su posicion: ${posicion} <br> La serie con el numero insertado es: [ ${numero} ]`;
    }else{
      resp.innerHTML ='¡Error! La posicion se encuentra fuera de rango';
    }

  }
  eliminar(){
    let valores = document.getElementById("num1").value;
    let buscado = document.getElementById("num2").value;
    let numero = valores.split(";").map(valor => parseInt(valor.trim())); 
    let numero_buscado = buscado.split(";").map(valor => parseInt(valor.trim())); 
    let elimina_elemento = [];
    let elementos_soloElemento = [];
    let i = 0;
    let resp = document.getElementById("resp");
    for (i = 0; i < numero.length; i++) {
        if (numero_buscado != numero[i]) {
            elementos_soloElemento.push(numero[i]);
        } else {
            elimina_elemento.push(numero[i]);
        }
    }
    if (elimina_elemento.length > 0) {
      resp.innerHTML =`La serie es: [ ${numero} ]<br> El elemento a eliminar es: ${numero_buscado}<br> La serie con el numero eliminado es: [ ${elementos_soloElemento} ]`;
    } else {
      resp.innerHTML =`¡El elemento buscado no se encuentra en la serie para eliminarlo!.....`;
    }

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
  let valores = document.getElementById("num1").value;
  let simbolo=  /"([^"]+)",\s*vh:\s*(\d+),\s*nh:\s*(\d+)/g;
  let empleados=[]
  let resp = document.getElementById("resp");
  let match;
  let sumatotal = 0, vh=0, nh=0
  while ((match = simbolo.exec(valores)) !== null) {
    let nombre = match[1];
     vh = parseInt(match[2]);
     nh = parseInt(match[3]);
    empleados.push({ nombre, vh, nh });
  }
  if (empleados.length === 0) {
    resp.innerHTML ="¡Error! Ingresa un arreglo válido de los empleados.";
    return;
  }
  for (let i = 0; i < empleados.length; i++) {
    let sueldo = empleados[i].vh * empleados[i].nh;
    sumatotal += sueldo;
  }

  let promedio = sumatotal / empleados.length;  
  resp.innerHTML = `Los empleados: [ ${valores} ]<br>Promedio de sueldos: ${promedio.toFixed(2)}`;

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
    let costo = parseInt(document.getElementById("datos").value);
    let pago = parseInt(document.getElementById("buscado").value);
    let resp = document.getElementById("resp");
    
    let vuelto = pago - costo;
    const billetes = [50, 20, 10, 5, 1];
    let resultado = ""; 
    let cantidad = 0; 

    for (let i = 0; i < billetes.length; i++) {
        cantidad = Math.floor(vuelto / billetes[i]);
        if (cantidad > 0) {
            resultado += `${cantidad} - ${billetes[i]} `;
            vuelto -= cantidad * billetes[i];
        }
    }
    resp.textContent = `Su vuelto en la cantidad de billetes mínima es: ${resultado}`;
  }
}

const arr = new Arreglos()
arr.estudiantes()
// Ejempl   de uso
// const numero = 97;
// const romano = arr.decimalRomano(numero);
// console.log(`${numero} en números romanos es: ${romano}`)
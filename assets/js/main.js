function validarNumero(){

  var cel= document.getElementById("boton1");
  cel.addEventListener("click", function(event){
    event.preventDefault();

  var numero= document.getElementById("numero").value;

  if(!(/^\d{9}$/.test(numero))){
    document.getElementById("validacion").innerHTML= "*Debe ingresar un numero valido."
  }
  else{
    document.getElementById("numero").value= "";
    document.getElementById("validacion").innerHTML = "";
  }
 })
};

validarNumero();

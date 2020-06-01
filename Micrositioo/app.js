var nombre = document.getElementById('nombre');
var password = document.getElementById('password');
var email = document.getElementById('email');
var error = document.getElementById('error');
error.style.color = 'red';


function enviarFormulario(){
    console.log('Enviar formulario...');

    var mensajesError=[];
//Validacion de Nombre
    if (nombre.value === null || nombre.value ===''){
        mensajesError.push('Ingresa tu nombre');
    }else{
        if(nombre.value.length > 8){
            mensajesError.push('El nombre no debe pasar de 8 caracteres');}
        }
//Validacion de contraseña
    if (password.value == null || password.value == '' || ConfirmaP.value == null || ConfirmaP.value == '' ){
        mensajesError.push('Confirme y/o ingrese su contraseña');
    }else{
            if(password.value != ConfirmaP.value){
                mensajesError.push('La contraseña no es igual');
            }else{
                if (!(validaCadena.test(password.value)) || (password == ConfirmaP)){
                    mensajesError.push('Tu contraseña no tiene minimo 8 caracteres con numeros y/o alguna mayuscula');
                }
            }
        }
    
    if (email.value === null || email.value === ''){
        mensajesError.push('Ingresa tu correo');
    }else{
        if(email.value.length > 8){
            mensajesError.push('El email no debe pasar de 8 caracteres');}
        }
    error.innerHTML = mensajesError.join(' , ')
    return false;
}



//Email
//valor = document.getElementById("campo").value;
//if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
  //return false;
//}
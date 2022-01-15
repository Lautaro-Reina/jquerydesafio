// creamos la funcion
function validarFormulario(){
    // removemos el div con la clase alert
    $('.alert').remove();


    // declarion de variables
    let nombre=$('#nombre').val();
    let correo=$('#correo').val();
    let asunto=$('#asunto').val();
    let mensaje=$('#mensaje').val();

    // validamos el campo nombre
    if(nombre=="" || nombre==null){

        cambiarColor("nombre");
        // muestra el mensaje de alerta
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        let expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(nombre)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("nombre");
            mostraAlerta("No se permiten carateres especiales o numeros");
            return false;
        }
    }

    // validamos el correo
    if(correo=="" || correo==null){

        cambiarColor("correo");
        // muestra el mensaje de alerta
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        let expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(correo)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("correo");
            mostraAlerta("Por favor ingrese un correo válido");
            return false;
        }
    }

    // validamos el asunto
    if(asunto=="" || asunto==null){

        cambiarColor("asunto");
        // muestra el mensaje de alerta
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        let expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(asunto)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("asunto");
            mostraAlerta("No se permiten caracteres especiales");
            return false;
        }
    }

     // validamos el mensaje
     if(mensaje=="" || mensaje==null){

        cambiarColor("mensaje");
        // muestra el mensaje de alerta
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        let expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(mensaje)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("mensaje");
            mostraAlerta("No se permiten caracteres especiales");
            return false;
        }
    }

    $('form').submit();
    $('form').action(alert('Formulario enviado correctamente!'));
    
    return true;
    
} 

$('input').focus(function(){
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('correo');
    colorDefault('asunto');
});

$('textarea').focus(function(){
    $('.alert').remove();
    colorDefault('mensaje');
});

// creo un funcion de color por defecto a los bordes de los inputs
function colorDefault(dato){
    $('#' + dato).css({
        border: "1px solid #999"
    });
}

// creo una funcion para cambiar de color a los bordes de los input
function cambiarColor(dato){
    $('#' + dato).css({
        border: "1px solid #dd5144"
    });
}

// funcion para mostrar la alerta

function mostraAlerta(texto){
    $('#nombre').before('<div class="alert">Error: '+ texto +'</div>');
}
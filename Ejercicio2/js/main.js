/*
    1.Click sobre la imagen Thumnail
    2.Tomar el valor del atributo "href" de la etiqueta "anchor" Thumnail
    3.Guardar dicho valor en una variable con nombre imagenOriginal
    4.Cambiar el valor del atributo source de la imagen principal por el valor del atributo href que tenemos guardada en la variable imagenOriginal

*/
/*
Mètodo "ready" de jquery asegura que el codigo js se ejecutara cuando el arbol del DOM del html este renderizado.

La sintaxis de una funciòn anonima de javascript es function(){}
La sintaxis del metodo ready de jquery es 
                                            $(function anonima)
                                            es decir $(function(){})

                EL CODIGO ESCRITO DENTRO DE LAS LLAVES ES EL QUE SE VA EJECUTAR CUANDO EL DOM DEL HTML ESTE RENDERIZADO
                $(function(){
            ∫
                }
            );



            Mètodo on de jquery sirve para escuchar eventos, por e.g.click,doubleclick,scroll, etc.
            La sintaxis es ->elemento.on(evento a escuchar,codigo a ejecutar);
            por lo tanto:elemento.on(evento, function anonima);
            La sintaxis queda de la sig.manera:elemnto.on('click',function(){});

            El método preventDefault() del evento (event) bloquea el comportamiento por defecto que tenga el elemento que desencadena el evento(click).
            El metodo attr de jquery hace dos cosas:
            -Devolver el valor del atributo especificado, es decir recibe un parametro el cual es el nombre del atributo que queremos obtener su valor.
            elemento.attr('href');
            -Para cambiar el valor del atributo especificado recibe dos parametros el primero es nombre del atributo a modificar y el nuevo valor para este atributo.
            e.g. elemento.attr('href','images/img-2.jpg')
*/

$(function () {
    var imgMini = $('.img-mini');
    var imgPrincipal = $('#imgPrincipal');
    // console.log(imgPrincipal);
    imgMini.on('click', function (event) {
        event.preventDefault();
        var imagenOriginal = $(this).attr('href'); ƒ

        imgPrincipal.attr('src', imagenOriginal);
    });
});




var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


var random1 = ['<p class="fuente"><b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> ¿Tienes objetos que has pedido con insistencia solo para presumir ante los otros? ¿Cuáles?</p> <textarea class="form-control no-redimensionar text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="3" placeholder="Texto"></textarea>', '<p class="fuente"><b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> ¿Crees que debes presumir de lo que tienes? ¿Por qué?</p> <textarea class="form-control no-redimensionar text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="3" placeholder="Texto"></textarea>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}


function total() {

    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;

    cor = parseFloat(pre1a) + parseFloat(pre2a);
    Calculo_nota();
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('textarea').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    $('div').attr("disabled", true);
    $('.nota-abierta').addClass('backnoabierta');
    $('.enc3a').off('click');
    $('.desaparece').filter(function() {
        return $.trim($(this).text()) === ''
    }).hide()
}
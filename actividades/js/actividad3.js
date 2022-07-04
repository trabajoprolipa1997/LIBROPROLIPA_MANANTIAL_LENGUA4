var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


var random1 = ['<b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> Cada quien debe asumir su responsabilidad.', '<b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> No debemos burlarnos de las personas que trabajan.', '<b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> Nuestra sobrestima nos puede llevar a hacer el ridículo.', '<b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> Aquello que sirve solo para presumir, no tiene valor alguno.']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}


function total() {

    var pre1a = document.getElementById('pre1a').value;

    cor = parseFloat(pre1a);
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
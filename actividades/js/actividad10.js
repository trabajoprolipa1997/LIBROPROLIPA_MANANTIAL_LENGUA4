var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


var random1 = ['<img src="img/i1_p26_act10.jpg" style="max-width: 100%;"> <p class="fuente2">niño <br>Antonio</p>', '<img src="img/i2_p26_act10.jpg" style="max-width: 100%;"> <p class="fuente2">niña <br>Doris</p>', '<img src="img/i3_p26_act10.jpg" style="max-width: 100%;"> <p class="fuente2">perro <br>Cuqui</p>', '<img src="img/i4_p26_act10.jpg" style="max-width: 100%;"> <p class="fuente2">nevado <br>Cotopaxi</p>']
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
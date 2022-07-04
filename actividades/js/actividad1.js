var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


var random1 = ['<div style="border: 4px dotted #ddeab8; display: inline-flex; border-radius: 20px;"> <div style="background-color: #ddeab8 !important; -webkit-print-color-adjust: exact; border-radius: 20px; display: inline-flex;"> <p class="fuente2">Zeus</p> </div> </div>', '<div style="border: 4px dotted #ceebf3; display: inline-flex; border-radius: 20px;"> <div style="background-color: #ceebf3 !important; -webkit-print-color-adjust: exact; border-radius: 20px; display: inline-flex;"> <p class="fuente2">Abejas</p> </div> </div>', '<div style="border: 4px dotted #ddeab8; display: inline-flex; border-radius: 20px;"> <div style="background-color: #ddeab8 !important; -webkit-print-color-adjust: exact; border-radius: 20px; display: inline-flex;"> <p class="fuente2">Humanos</p> </div> </div>']
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
var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


var random1 = ['<p class="fuente">¿En qué situaciones has presentado una exposición oral al público?</p> <textarea class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="3" placeholder="Texto"></textarea>', '<p class="fuente">¿Por qué es importante ordenar la información que vas a presentar a otras personas? </p> <textarea class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="3" placeholder="Texto"></textarea>', '<p class="fuente">¿Qué ocurriría si no ordenaras la información antes de exponer?</p> <textarea class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="3" placeholder="Texto"></textarea>', '<p class="fuente">¿Cómo organizarías una exposición oral para participar en el festival de fábulas, de tu escuela?</p> <textarea class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="3" placeholder="Texto"></textarea>']
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
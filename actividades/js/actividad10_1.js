var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


var random1 = ['<div align="center"><img src="img/i5_p26_act10.jpg" style="height: 150px;"></div> <table style="font-size: 20px;" align="center"> <tr align="center"> <td><input id="a0" class="form-control 0 hvr-grow-shadow inp2" type="text" placeholder="Texto" maxlength="15"></td> </tr> </table>', '<div align="center"><img src="img/i6_p26_act10.jpg" style="height: 150px;"></div> <table style="font-size: 20px;" align="center"> <tr align="center"> <td><input id="a0" class="form-control 0 hvr-grow-shadow inp2" type="text" placeholder="Texto" maxlength="15"></td> </tr> </table>', '<div align="center"><img src="img/i7_p26_act10.jpg" style="height: 150px;"></div> <table style="font-size: 20px;" align="center"> <tr align="center"> <td><input id="a0" class="form-control 0 hvr-grow-shadow inp2" type="text" placeholder="Texto" maxlength="15"></td> </tr> </table>', '<div align="center"><img src="img/i8_p26_act10.jpg" style="height: 150px;"></div> <table style="font-size: 20px;" align="center"> <tr align="center"> <td><input id="a0" class="form-control 0 hvr-grow-shadow inp2" type="text" placeholder="Texto" maxlength="15"></td> </tr> </table>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}


function total() {

    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;

    cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a);
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
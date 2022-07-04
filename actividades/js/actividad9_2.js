var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


var random1 = ['<table style="font-size: 20px;" align="center"> <tr align="center"> <td> <p class="fuente">Comer “mote pillo”</p> </td> <td><input id="a0" class="form-control 0 hvr-grow-shadow inp2" onkeypress="return soloNumeros1(event)" onkeyup="this.value=this.value.toLowerCase()" type="text" placeholder="__" maxlength="1"></td> </tr> </table>', '<table style="font-size: 20px;" align="center"> <tr align="center"> <td> <p class="fuente">Visitar el museo de la ciudad.</p> </td> <td><input id="a1" class="form-control 0 hvr-grow-shadow inp2" onkeypress="return soloNumeros1(event)" onkeyup="this.value=this.value.toLowerCase()" type="text" placeholder="__" maxlength="1"></td> </tr> </table>', '<table style="font-size: 20px;" align="center"> <tr align="center"> <td> <p class="fuente">Regresar a Tulcán.</p> </td> <td><input id="a2" class="form-control 0 hvr-grow-shadow inp2" onkeypress="return soloNumeros1(event)" onkeyup="this.value=this.value.toLowerCase()" type="text" placeholder="__" maxlength="1"></td> </tr> </table>', '<table style="font-size: 20px;" align="center"> <tr align="center"> <td> <p class="fuente">Recibir el autógrafo del pintor.</p> </td> <td><input id="a3" class="form-control 0 hvr-grow-shadow inp2" onkeypress="return soloNumeros1(event)" onkeyup="this.value=this.value.toLowerCase()" type="text" placeholder="__" maxlength="1"></td> </tr> </table>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<td style="background-color: #dceef6 !important; -webkit-print-color-adjust: exact;"> <p class="fuente">Si requieres hacer una solicitud al señor alcalde, la carta que enviarás al municipio será informal o familiar.</p> </td> <td style="width: 5px;"></td> <td><input id="b0" class="form-control 0 hvr-grow-shadow inp3" onkeyup="this.value=this.value.toLowerCase()" type="text" placeholder="__" maxlength="1"></td>', '<td style="background-color: #dceef6 !important; -webkit-print-color-adjust: exact;"> <p class="fuente">“Estimado profesor” es un saludo cordial y respetuoso para dirigirse a un docente en una carta formal.</p> </td> <td style="width: 5px;"></td> <td><input id="b1" class="form-control 0 hvr-grow-shadow inp3" onkeyup="this.value=this.value.toLowerCase()" type="text" placeholder="__" maxlength="1"></td>', '<td style="background-color: #dceef6 !important; -webkit-print-color-adjust: exact;"> <p class="fuente">El cuerpo o contenido de una carta explica, de manera clara y concisa, el mensaje para el remitente. </p> </td> <td style="width: 5px;"></td> <td><input id="b2" class="form-control 0 hvr-grow-shadow inp3" onkeyup="this.value=this.value.toLowerCase()" type="text" placeholder="__" maxlength="1"></td>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

var random3 = ['<div style="background-color: #e1edc1 !important; -webkit-print-color-adjust: exact; border-radius: 20px 0px 20px 0px;"> <p class="fuente">Alejandra Avilés <br>San Juan N.° 12-27 <br>Tulcán-Ecuador</p> </div>', '<div style="background-color: #e1edc1 !important; -webkit-print-color-adjust: exact; border-radius: 20px 0px 20px 0px;"> <p class="fuente">Isabel Romero <br>Calle Orellana N.° 34-90 <br>Cuenca-Ecuador</p> </div>']
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

var tpre2 = 0;

var correctas2 = {
    0: ['3', '1', '4', '2']

};


var corr2 = 0;
var veclet2 = ['a'];
var limite2 = [3];


function pregunta2() {

    for (var i = 0; i <= veclet2.length; i++) {
        for (var j = 0; j <= limite2[i]; j++) {

            if ((correctas2[i][j]) == ($('#' + veclet2[i] + [j] + '').val())) {
                corr2++;
                f_ok($('#' + veclet2[i] + [j] + '').addClass('correctoar'));
            } else {
                f_no($('#' + veclet2[i] + [j] + '').addClass('incorrectoar'));
                corr2;
            }
        }
    }
    tpre2 = ((corr2 * 2) / 4).toFixed(2);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
    // body...
}


var tpre3 = 0;

var correctas3 = {
    0: ['F', 'V', 'V']

};


var corr3 = 0;
var veclet3 = ['b'];
var limite3 = [2];


function pregunta3() {

    for (var i = 0; i <= veclet3.length; i++) {
        for (var j = 0; j <= limite3[i]; j++) {

            if ((correctas3[i][j]) == ($('#' + veclet3[i] + [j] + '').val())) {
                corr3++;
                f_ok($('#' + veclet3[i] + [j] + '').addClass('correctoar'));
            } else {
                f_no($('#' + veclet3[i] + [j] + '').addClass('incorrectoar'));
                corr3;
            }
        }
    }
    tpre3 = ((corr3 * 2) / 4).toFixed(2);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
    // body...
}


function total() {
    pregunta2();
    pregunta3();
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;
    var pre5a = document.getElementById('pre5a').value;

    cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a) + parseFloat(pre5a);
    Calculo_nota();
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('textarea').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    $('select').attr("disabled", true);
    $('div').attr("disabled", true);
    $('.nota-abierta').addClass('backnoabierta');
    $('.enc3a').off('click');
    $('.desaparece').filter(function() {
        return $.trim($(this).text()) === ''
    }).hide();
    $('.drag2').draggable('disable');
}
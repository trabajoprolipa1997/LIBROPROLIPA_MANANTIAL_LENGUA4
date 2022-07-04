var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


var random10 = ['<td> <div class="inp2"> <div class="fuente2" style="line-height: 15px;">montaña</div> </div> </td> <td><b style="color: #06afef !important; -webkit-print-color-adjust: exact; font-size: 30px;">➔</b></td> <td> <input class="form-control 0 hvr-grow-shadow inp2" type="text" placeholder="Texto" maxlength="15"> </td>', '<td> <div class="inp3"> <div class="fuente2" style="line-height: 15px;">país</div> </div> </td> <td><b style="color: #06afef !important; -webkit-print-color-adjust: exact; font-size: 30px;">➔</b></td> <td> <input class="form-control 0 hvr-grow-shadow inp3" type="text" placeholder="Texto" maxlength="15"> </td>', '<td> <div class="inp4"> <div class="fuente2" style="line-height: 15px;">niña</div> </div> </td> <td><b style="color: #06afef !important; -webkit-print-color-adjust: exact; font-size: 30px;">➔</b></td> <td> <input class="form-control 0 hvr-grow-shadow inp4" type="text" placeholder="Texto" maxlength="15"> </td>', '<td> <div class="inp5"> <div class="fuente2" style="line-height: 15px;">ciudad</div> </div> </td> <td><b style="color: #06afef !important; -webkit-print-color-adjust: exact; font-size: 30px;">➔</b></td> <td> <input class="form-control 0 hvr-grow-shadow inp5" type="text" placeholder="Texto" maxlength="15"> </td>']
var act010Txt = document.getElementsByClassName('act10class');

random10.sort(f_randomico);
for (i = 0; i < act010Txt.length; i++) {
    $('#' + act010Txt[i].id).html(random10[i]);
}

var random11 = ['<td class="bordtablew" style="background-color: #1abed8 !important; -webkit-print-color-adjust: exact;"> <p class="fuente"><b style="color: #ffffff !important; -webkit-print-color-adjust: exact;">m</b></p> </td> <td><textarea class="form-control text-question no-redimensionar hvr-grow-shadow" style="width: 250px; box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; text-align: center;" id="a0" rows="3" placeholder="Texto"></textarea></td>', '<td class="bordtablew" style="background-color: #fcb814 !important; -webkit-print-color-adjust: exact;"> <p class="fuente"><b style="color: #ffffff !important; -webkit-print-color-adjust: exact;">p</b></p> </td> <td><textarea class="form-control text-question no-redimensionar hvr-grow-shadow" style="width: 250px; box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; text-align: center;" id="a1" rows="3" placeholder="Texto"></textarea></td>', '<td class="bordtablew" style="background-color: #8bc63e !important; -webkit-print-color-adjust: exact;"> <p class="fuente"><b style="color: #ffffff !important; -webkit-print-color-adjust: exact;">r</b></p> </td> <td><textarea class="form-control text-question no-redimensionar hvr-grow-shadow" style="width: 250px; box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; text-align: center;" id="a2" rows="3" placeholder="Texto"></textarea></td>']
var act011Txt = document.getElementsByClassName('act11class');

random11.sort(f_randomico);
for (i = 0; i < act011Txt.length; i++) {
    $('#' + act011Txt[i].id).html(random11[i]);
}

var random12 = ['<td class="bordtablew" style="background-color: #1abed8 !important; -webkit-print-color-adjust: exact;"> <p class="fuente"><b style="color: #ffffff !important; -webkit-print-color-adjust: exact;">B</b></p> </td> <td><textarea class="form-control text-question no-redimensionar hvr-grow-shadow" style="width: 250px; box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; text-align: center;" id="b0" rows="3" placeholder="Texto"></textarea></td>', '<td class="bordtablew" style="background-color: #fcb814 !important; -webkit-print-color-adjust: exact;"> <p class="fuente"><b style="color: #ffffff !important; -webkit-print-color-adjust: exact;">S</b></p> </td> <td><textarea class="form-control text-question no-redimensionar hvr-grow-shadow" style="width: 250px; box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; text-align: center;" id="b1" rows="3" placeholder="Texto"></textarea></td>', '<td class="bordtablew" style="background-color: #8bc63e !important; -webkit-print-color-adjust: exact;"> <p class="fuente"><b style="color: #ffffff !important; -webkit-print-color-adjust: exact;">L</b></p> </td> <td><textarea class="form-control text-question no-redimensionar hvr-grow-shadow" style="width: 250px; box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; text-align: center;" id="b2" rows="3" placeholder="Texto"></textarea></td>']
var act012Txt = document.getElementsByClassName('act12class');

random12.sort(f_randomico);
for (i = 0; i < act012Txt.length; i++) {
    $('#' + act012Txt[i].id).html(random12[i]);
}

var random13 = ['<p class="fuente2"> <b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> Mi perro <select class="hvr-bounce-in random1 imaf2" id="sel0"></select> juega alegre en el <select class="hvr-bounce-in random1 imaf2" id="sel1"></select> .</p>', '<p class="fuente2"> <b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> Mi amiga <select class="hvr-bounce-in random2 imaf2" id="sel2"></select> viajará pronto a su <select class="hvr-bounce-in random2 imaf2" id="sel3"></select> natal.</p>', '<p class="fuente2"> <b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> Yo vivo en <select class="hvr-bounce-in random3 imaf2" id="sel4"></select> , el <select class="hvr-bounce-in random3 imaf2" id="sel5"></select> de la <select class="hvr-bounce-in random1 imaf2" id="sel6"></select> .</p>', '<p class="fuente2"> <b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> Un <select class="hvr-bounce-in random3 imaf2" id="sel7"></select> me ayuda a buscar a mi <select class="hvr-bounce-in random3 imaf2" id="sel8"></select> .</p>']
var act013Txt = document.getElementsByClassName('act13class');

random13.sort(f_randomico);
for (i = 0; i < act013Txt.length; i++) {
    $('#' + act013Txt[i].id).html(random13[i]);
}


function pregunta2() {
    var cont1 = 0;
    var res1 = $('#a0').val();
    var res1comp = res1.includes('m');
    if (res1comp == true) {
        cont1 = cont1 + 1;
        $('#a0').addClass('correctoar');
    } else {
        $('#a0').addClass('incorrectoar');
    }

    var res2 = $('#a1').val();
    var res2comp = res2.includes('p');
    if (res2comp == true) {
        cont1 = cont1 + 1;
        $('#a1').addClass('correctoar');
    } else {
        $('#a1').addClass('incorrectoar');
    }

    var res3 = $('#a2').val();
    var res3comp = res3.includes('r');
    if (res3comp == true) {
        cont1 = cont1 + 1;
        $('#a2').addClass('correctoar');
    } else {
        $('#a2').addClass('incorrectoar');
    }

    var total = (cont1 * 2.25) / 3;

    if (total < 0) {
        total = 0;
        $('#pre2a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre2a').val(parseFloat(total).toFixed(2));
    }
}

function pregunta3() {
    var cont1 = 0;
    var res1 = $('#b0').val();
    var res1comp = res1.includes('B');
    if (res1comp == true) {
        cont1 = cont1 + 1;
        $('#b0').addClass('correctoar');
    } else {
        $('#b0').addClass('incorrectoar');
    }

    var res2 = $('#b1').val();
    var res2comp = res2.includes('S');
    if (res2comp == true) {
        cont1 = cont1 + 1;
        $('#b1').addClass('correctoar');
    } else {
        $('#b1').addClass('incorrectoar');
    }

    var res3 = $('#b2').val();
    var res3comp = res3.includes('L');
    if (res3comp == true) {
        cont1 = cont1 + 1;
        $('#b2').addClass('correctoar');
    } else {
        $('#b2').addClass('incorrectoar');
    }

    var total = (cont1 * 2.25) / 3;

    if (total < 0) {
        total = 0;
        $('#pre3a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre3a').val(parseFloat(total).toFixed(2));
    }
}


var random1 = [
    '<option>canela</option>',
    '<option>ciudad</option>',
    '<option>Boby</option>',
    '<option>Tatiana</option>',
    '<option>amigo</option>',
    '<option>perro</option>',
    '<option>campo</option>',
];
random1.sort(f_randomico);
$('.random1').html('<option>-Seleccione-</option>' + random1 + '');


var random2 = [
    '<option>canela</option>',
    '<option>ciudad</option>',
    '<option>Boby</option>',
    '<option>Tatiana</option>',
    '<option>amigo</option>',
    '<option>perro</option>',
];
random2.sort(f_randomico);
$('.random2').html('<option>-Seleccione-</option>' + random2 + '');


var random3 = [
    '<option>canela</option>',
    '<option>ciudad</option>',
    '<option>país</option>',
    '<option>Boby</option>',
    '<option>Tatiana</option>',
    '<option>amigo</option>',
    '<option>perro</option>',
    '<option>Ecuador</option>',
];
random3.sort(f_randomico);
$('.random3').html('<option>-Seleccione-</option>' + random3 + '');

function pregunta4() {

    var respact = ['Boby', 'campo', 'Tatiana', 'ciudad', 'Ecuador', 'país', 'canela', 'amigo', 'perro'];
    var cont = 0;
    for (var i = 0; i < respact.length; i++) {
        var res = $('#sel' + [i] + ' option:selected').text();
        if (respact[i] == res) {
            cont = cont + 1;
            $('#sel' + [i] + '').addClass('correctoar');
        } else {
            $('#sel' + [i] + '').addClass('incorrectoar');
        }
    }

    var total = (cont * 2.5) / respact.length;

    //var totin = ((total * 1.5) / 5).toFixed(2);

    if (total < 0) {
        total = 0;
        $('#pre4a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre4a').val(parseFloat(total).toFixed(2));
    }
}


function total() {
    pregunta2();
    pregunta3();
    pregunta4();
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
    $('select').attr("disabled", true);
    $('div').attr("disabled", true);
    $('.nota-abierta').addClass('backnoabierta');
    $('.enc3a').off('click');
    $('.desaparece').filter(function() {
        return $.trim($(this).text()) === ''
    }).hide();
    $('.drag2').draggable('disable');
}
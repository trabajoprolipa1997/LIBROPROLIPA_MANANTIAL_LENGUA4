var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


var random1 = ['<p class="fuente">- ¿Qué elementos de un cartel te motivan a leerlo? </p> <textarea class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="3" placeholder="Texto"></textarea>', '<p class="fuente">- ¿Para qué serían importantes los carteles en tu vida?</p> <textarea class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="3" placeholder="Texto"></textarea>', '<p class="fuente">- ¿Qué otro elemento agregarías en un cartel?</p> <textarea class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="3" placeholder="Texto"></textarea>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}


var random1 = [
    '<option>sol</option>',
    '<option>personas</option>',
    '<option>planeta</option>',
    '<option>árboles</option>',
    '<option>flores</option>',
    '<option>animales</option>',
];
random1.sort(f_randomico);
$('.random1').html('<option>-Seleccione-</option>' + random1 + '');

function pregunta2() {

    var respact = ['sol', 'personas', 'planeta', 'árboles', 'flores', 'animales'];
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

    var total = (cont * 3) / respact.length;

    //var totin = ((total * 1.5) / 5).toFixed(2);

    if (total < 0) {
        total = 0;
        $('#pre2a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre2a').val(parseFloat(total).toFixed(2));
    }
}


function total() {
    pregunta2();
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
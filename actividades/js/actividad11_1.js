var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


var random1 = ['<p class="fuente">¿Qué cualidades crees que tiene tu mejor amigo?</p> <textarea class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="4" placeholder="Texto"></textarea>', '<p class="fuente">¿Qué cualidades tiene el lugar donde vives?</p> <textarea class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="4" placeholder="Texto"></textarea>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<p class="fuente2"> <b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> El árbol <select class="hvr-bounce-in random1 imaf2" id="sel0"></select> da buena sombra.</p>', '<p class="fuente2"> <b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> El agua <select class="hvr-bounce-in random1 imaf2" id="sel1"></select> no tiene olor ni sabor.</p>', '<p class="fuente2"> <b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> Las abejas <select class="hvr-bounce-in random1 imaf2" id="sel2"></select> defienden su panal.</p>', '<p class="fuente2"> <b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> La abuelita <select class="hvr-bounce-in random1 imaf2" id="sel3"></select> acaricia a sus nietos.</p>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}



var random1 = [
    '<option>frondoso</option>',
    '<option>pura</option>',
    '<option>inquietas</option>',
    '<option>cariñosa</option>',
];
random1.sort(f_randomico);
$('.random1').html('<option>-Seleccione-</option>' + random1 + '');

function pregunta2() {

    var respact = ['frondoso', 'pura', 'inquietas', 'cariñosa'];
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

    var total = (cont * 4) / respact.length;

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

    cor = parseFloat(pre1a) + parseFloat(pre2a);
    Calculo_nota();
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('textarea').attr("disabled", true);
    $('select').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    $('div').attr("disabled", true);
    $('.nota-abierta').addClass('backnoabierta');
    $('.enc3a').off('click');
    $('.desaparece').filter(function() {
        return $.trim($(this).text()) === ''
    }).hide()
}
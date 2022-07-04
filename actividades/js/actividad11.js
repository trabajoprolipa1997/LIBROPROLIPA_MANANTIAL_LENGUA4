var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


var random1 = ['<img src="img/i1_p28_act11.jpg" style="width: 31.25vw; height: 19.125vw; mix-blend-mode: multiply;"> <select class="hvr-bounce-in random1 imaf2" id="sel0" style="font-size: 1.0980966325036603vw; top: 13.2603221083455346vw; left: 1.23689604685212vw; position: absolute; border: 0.15vw solid #40ae49;"></select> <select class="hvr-bounce-in random1 imaf2" id="sel1" style="font-size: 1.0980966325036603vw; top: 9.2603221083455346vw; left: 1.43689604685212vw; position: absolute; border: 0.15vw solid #40ae49;"></select> <select class="hvr-bounce-in random1 imaf2" id="sel2" style="font-size: 1.0980966325036603vw; top: 2.2603221083455346vw; left: 11.13689604685212vw; position: absolute; border: 0.15vw solid #40ae49;"></select> <select class="hvr-bounce-in random1 imaf2" id="sel3" style="font-size: 1.0980966325036603vw; top: 13.2603221083455346vw; left: 20.03689604685212vw; position: absolute; border: 0.15vw solid #40ae49;"></select> <select class="hvr-bounce-in random1 imaf2" id="sel4" style="font-size: 1.0980966325036603vw; top: 9.2603221083455346vw; left: 20.93689604685212vw; position: absolute; border: 0.15vw solid #40ae49;"></select>', '<img src="img/i2_p28_act11.jpg" style="width: 31.25vw; height: 19.125vw; mix-blend-mode: multiply;"> <select class="hvr-bounce-in random1 imaf2" id="sell0" style="font-size: 1.0980966325036603vw; top: 12.2603221083455346vw; left: 1.53689604685212vw; position: absolute; border: 0.15vw solid #8e499b;"></select> <select class="hvr-bounce-in random1 imaf2" id="sell1" style="font-size: 1.0980966325036603vw; top: 7.5603221083455346vw; left: 0.03689604685212vw; position: absolute; border: 0.15vw solid #8e499b;"></select> <select class="hvr-bounce-in random1 imaf2" id="sell2" style="font-size: 1.0980966325036603vw; top: 3.5603221083455346vw; left: 10.703689604685212vw; position: absolute; border: 0.15vw solid #8e499b;"></select> <select class="hvr-bounce-in random1 imaf2" id="sell3" style="font-size: 1.0980966325036603vw; top: 12.2603221083455346vw; left: 20.23689604685212vw; position: absolute; border: 0.15vw solid #8e499b;"></select> <select class="hvr-bounce-in random1 imaf2" id="sell4" style="font-size: 1.0980966325036603vw; top: 7.5603221083455346vw; left: 20.83689604685212vw; position: absolute; border: 0.15vw solid #8e499b;"></select>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<tr> <td> <div class="inp2"> <div class="fuente2" style="line-height: 15px;">agua</div> </div> </td> <td><b style="color: #06afef !important; -webkit-print-color-adjust: exact; font-size: 30px;">➔</b></td> <td> <input class="form-control 0 hvr-grow-shadow inp2" type="text" placeholder="Texto" maxlength="15"> </td> </tr>', '<tr> <td> <div class="inp3"> <div class="fuente2" style="line-height: 15px;">Patria</div> </div> </td> <td><b style="color: #06afef !important; -webkit-print-color-adjust: exact; font-size: 30px;">➔</b></td> <td> <input class="form-control 0 hvr-grow-shadow inp3" type="text" placeholder="Texto" maxlength="15"> </td> </tr>', '<tr> <td> <div class="inp4"> <div class="fuente2" style="line-height: 15px;">aire</div> </div> </td> <td><b style="color: #06afef !important; -webkit-print-color-adjust: exact; font-size: 30px;">➔</b></td> <td> <input class="form-control 0 hvr-grow-shadow inp4" type="text" placeholder="Texto" maxlength="15"> </td> </tr>', '<tr> <td> <div class="inp5"> <div class="fuente2" style="line-height: 15px;">sol</div> </div> </td> <td><b style="color: #06afef !important; -webkit-print-color-adjust: exact; font-size: 30px;">➔</b></td> <td> <input class="form-control 0 hvr-grow-shadow inp5" type="text" placeholder="Texto" maxlength="15"> </td> </tr>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}


var random1 = [
    '<option>trabajador</option>',
    '<option>noble</option>',
    '<option>generoso</option>',
    '<option>prevenido</option>',
    '<option>bueno</option>',
    '<option>humilde</option>',
    '<option>holgazana</option>',
    '<option>ágil</option>',
    '<option>voladora</option>',
    '<option>agradecida</option>',
];
random1.sort(f_randomico);
$('.random1').html('<option>-Seleccione-</option>' + random1 + '');

function pregunta1() {

    var respact = ['trabajador', 'noble', 'generoso', 'bueno', 'prevenido'];
    var cont = 0;
    for (var i = 0; i < respact.length; i++) {
        var res = $('#sel' + [i] + ' option:selected').text();
        var rc = respact.indexOf(res);
        if (respact[rc] == res) {
            cont = cont + 1;
            respact[rc] = 'A';
            $('#sel' + [i] + '').addClass('correctoar');
        } else {
            $('#sel' + [i] + '').addClass('incorrectoar');
        }
    }

    var respact2 = ['humilde', 'holgazana', 'ágil', 'voladora', 'agradecida'];
    var cont2 = 0;
    for (var i = 0; i < respact2.length; i++) {
        var res2 = $('#sell' + [i] + ' option:selected').text();
        var rc2 = respact2.indexOf(res2);
        if (respact2[rc2] == res2) {
            cont2 = cont2 + 1;
            respact2[rc2] = 'A';
            $('#sell' + [i] + '').addClass('correctoar');
        } else {
            $('#sell' + [i] + '').addClass('incorrectoar');
        }
    }

    var total = (cont * 1) / respact.length;
    var total2 = (cont2 * 1) / respact2.length;

    var sumtotal = parseFloat(total) + parseFloat(total2);
    var totin = ((sumtotal * 5) / 2).toFixed(2);

    if (totin < 0) {
        totin = 0;
        $('#pre1a').val(parseFloat(totin).toFixed(2));
    } else {
        $('#pre1a').val(parseFloat(totin).toFixed(2));
    }
}


function total() {
    pregunta1();
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;

    cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a);
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
    }).hide()
}
var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


var random1 = ['<p class="fuente">¿Qué piensas de la actitud de los jóvenes? ¿Por qué?</p> <textarea class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="3" placeholder="Texto"></textarea>', '<p class="fuente">¿Qué enseñanza te deja la moraleja de esta fábula?</p> <textarea class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="3" placeholder="Texto"></textarea>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<div style="border: 2px solid #1c8a00; padding: 10px; border-radius: 20px 0px 20px 0px; background-color: #ecf3da !important; -webkit-print-color-adjust: exact; width: 350px;"> <p class="fuente"><b>Fábula en verso:</b> se presenta en forma de poesía. Los versos son cortos, tiene musicalidad y rima, es decir, terminaciones parecidas.</p> </div>', '<div style="border: 2px solid #1c8a00; padding: 10px; border-radius: 20px 0px 20px 0px; background-color: #fcebd9 !important; -webkit-print-color-adjust: exact; width: 350px;"> <p class="fuente"><b>Fábula en prosa:</b> se escribe y se narra en forma natural, es decir, como se habla, sin perder la belleza literaria. </p> </div>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

var random3 = ['<div style="border: 2px dotted #00acd5; border-radius: 20px; margin: 10px; width: 300px;"> <div align="center"> <select class="hvr-bounce-in random1 imaf2" id="sel0"></select> </div> <p class="fuente2"><b style="color: #01acd7 !important; -webkit-print-color-adjust: exact;">El camello y la pulga <br>(Adaptación)</b></p> <div> <p class="fuente" style="line-height: 30px;"><span class="enc1 enc04a0" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">En una</span> <span class="enc1 enc04a1" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">larga jornada</span> <br>un camello muy <span class="enc1 enc03a0" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">cargado</span> <br>exclamó ya <span class="enc1 enc03a1" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">fatigado</span>: <br>–¡Oh, qué <span class="enc1 enc04a2" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">carga</span> <br>tan <span class="enc1 enc03a2" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">pesada</span>! <br>Doña pulga que <span class="enc1 enc03a3" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">sentada</span> <br>iba sobre él, al <span class="enc1 enc03a4" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">instante</span> <br>se <span class="enc1 enc04a3" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">apea</span> y dice <span class="enc1 enc03a5" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">arrogante</span>: <br>–Del <span class="enc1 enc04a4" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">peso</span> te libro yo. <br>Y el camello <span class="enc1 enc04a5" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">contesta</span>: <br>–¡Gracias, señor <span class="enc1 enc03a6" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">elefante</span>!</p> </div> <div align="right" style="padding: 5px;"> <font size="2">Félix María Samaniego <br>(español)</font> </div> </div>', '<div style="border: 2px dotted #00acd5; border-radius: 20px; margin: 10px;"> <div align="center"> <select class="hvr-bounce-in random1 imaf2" id="sel1"></select> </div> <p class="fuente2"><b style="color: #01acd7 !important; -webkit-print-color-adjust: exact;">El camello y la pulga <br>(Adaptación)</b></p> <div> <p class="fuente" style="line-height: 30px;">Una pulga y un camello <span class="enc1 enc04a0" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">viajaban</span> <br>de un pueblo a otro. <br>En medio del camino, <span class="enc1 enc04a6" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">cansada</span> <br>la pulga, se <span class="enc1 enc04a7" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">subió</span> al camello. <br>Este, al darse cuenta, <span class="enc1 enc04a8" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">exclamó</span>: <br>–¡Qué carga tan <span class="enc1 enc04a9" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">pesada</span>! <br>La pulga, <span class="enc1 enc04a10" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">sintiéndose</span> aludida, <br>se bajó y le dijo: <br>–Bueno, quejumbroso, te libro de <br>mi peso para que <span class="enc1 enc04a11" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">viajes</span> tranquilo. <br>El camello, riéndose, <span class="enc1 enc04a12" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">respondió</span>: <br>–Graaacias, señor <span class="enc1 enc04a13" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 4.99px;">elefante</span>. <br>Moraleja: Nuestra sobrestima nos puede llevar a hacer el ridículo.</p> </div> </div>']
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

var random1 = [
    '<option>Verso</option>',
    '<option>Prosa</option>',
];
random1.sort(f_randomico);
$('.random1').html('<option>-Seleccione-</option>' + random1 + '');

function pregunta2() {

    var respact = ['Verso', 'Prosa'];
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

    var total = (cont * 2) / respact.length;

    //var totin = ((total * 1.5) / 5).toFixed(2);

    if (total < 0) {
        total = 0;
        $('#pre2a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre2a').val(parseFloat(total).toFixed(2));
    }
}



$(".enc1").addClass('hvr-grow-shadow');
$(".enc1").css('cursor', 'pointer');
$(".enc1").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});



function pregunta3() {
    var cont = 0;
    var cont1 = 0;
    var cont2 = 0;

    for (var i = 0; i < 14; i++) {
        if (($(".enc04a" + [i] + "").hasClass('subrayar') == true)) {
            cont = cont + 0.5;
            $(".enc04a" + [i] + "").addClass('incorrectoar');
        }

    }

    for (var i = 0; i < 7; i++) {
        if (($(".enc03a" + [i] + "").hasClass('subrayar') == true)) {
            cont1 = cont1 + 1;
            $(".enc03a" + [i] + "").addClass('correctoar');
        }

    }

    /*if (
        ($("#p1var3").hasClass('amarillo') == true) ||
        ($("#p1var3").hasClass('rojo') == true) ||
        ($("#p1var3").hasClass('azul') == true) ||
        ($("#p1var3").hasClass('verde') == true)) {
        $("#p1var3").addClass('mal1');
        cont1 = 3;
    } else {
        $("#p1var3").addClass('bien1');
    }
    let subtotal = cont - cont1;*/

    var sumatotal = parseFloat(cont1) - parseFloat(cont);

    var total = (sumatotal * 5) / 7;
    $('.enc1').off('click');
    if (total < 0) {
        total = 0;
        $('#pre3a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre3a').val(parseFloat(total).toFixed(2));

    }
}



function total() {

    pregunta2();
    pregunta3();
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
    }).hide();
    $('.drag2').draggable('disable');
}
var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


var random1 = ['<p class="fuente" style="line-height: 10px;"><b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> <span class="enc1 enc04a0" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">Los</span> <span class="enc1 enc03a0" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">jóvenes</span> <span class="enc1 enc04a1" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">quieren</span> <span class="enc1 enc04a2" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">ser</span> <span class="enc1 enc03a1" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">viejos</span>. </p>', '<p class="fuente" style="line-height: 10px;"><b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> <span class="enc1 enc04a3" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">Los</span> <span class="enc1 enc03a2" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">viejos</span> <span class="enc1 enc04a4" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">quieren</span> <span class="enc1 enc04a5" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">ser</span> <span class="enc1 enc03a3" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">jóvenes</span>. </p>', '<p class="fuente" style="line-height: 10px;"><b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> <span class="enc1 enc04a6" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">Los</span> <span class="enc1 enc03a4" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">gordos</span> <span class="enc1 enc04a7" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">quieren</span> <span class="enc1 enc04a8" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">ser</span> <span class="enc1 enc03a5" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">flacos</span>. </p>', '<p class="fuente" style="line-height: 10px;"><b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> <span class="enc1 enc04a9" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">Los</span> <span class="enc1 enc03a6" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">flacos</span> <span class="enc1 enc04a10" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">quieren</span> <span class="enc1 enc04a11" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">ser</span> <span class="enc1 enc03a7" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">gordos</span>. </p>', '<p class="fuente" style="line-height: 10px;"><b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> <span class="enc1 enc04a12" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">Los</span> <span class="enc1 enc03a8" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">solteros</span> <span class="enc1 enc04a13" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">quisieran</span> <span class="enc1 enc04a14" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">estar</span> <span class="enc1 enc03a9" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">casados</span>.</p>', '<p class="fuente" style="line-height: 10px;"><b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b><span class="enc1 enc04a15" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">Los</span> <span class="enc1 enc03a10" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">casados</span> <span class="enc1 enc04a16" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">quisieran</span> <span class="enc1 enc04a17" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">estar</span> <span class="enc1 enc03a11" data-anijs="if: click, do: bounceIn animated" style="padding-bottom: 3.69px;">solteros</span>.</p>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<p class="fuente2"> <b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> Los vientos helados <select class="hvr-bounce-in random1 imaf2" id="sel0"></select> .</p>', '<p class="fuente2"> <b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> Unos niños creativos <select class="hvr-bounce-in random1 imaf2" id="sel1"></select> .</p>', '<p class="fuente2"> <b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> La tortuga lenta <select class="hvr-bounce-in random1 imaf2" id="sel2"></select> .</p>', '<p class="fuente2"> <b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> Unas niñas generosas <select class="hvr-bounce-in random1 imaf2" id="sel3"></select> .</p>', '<p class="fuente2"> <b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> Una fría noche <select class="hvr-bounce-in random1 imaf2" id="sel4"></select> .</p>', '<p class="fuente2"> <b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> El avión veloz <select class="hvr-bounce-in random1 imaf2" id="sel5"></select> .</p>', '<p class="fuente2"> <b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> El verde campo <select class="hvr-bounce-in random1 imaf2" id="sel6"></select> .</p>', '<p class="fuente2"> <b style="color: #0166b3 !important; -webkit-print-color-adjust: exact;">•</b> Los caudalosos ríos <select class="hvr-bounce-in random1 imaf2" id="sel7"></select> .</p>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

var random3 = ['<p class="fuente2">Las flores quisieran ser <input class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; width: 300px; text-align: center;" placeholder="Texto">&emsp;y&emsp;<input class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; width: 300px; text-align: center;" placeholder="Texto"> .</p>', '<p class="fuente2">El mono quisiera ser <input class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; width: 300px; text-align: center;" placeholder="Texto">&emsp;y&emsp;<input class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; width: 300px; text-align: center;" placeholder="Texto"> .</p>', '<p class="fuente2">El perro quisiera se <input class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; width: 300px; text-align: center;" placeholder="Texto">&emsp;y&emsp;<input class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; width: 300px; text-align: center;" placeholder="Texto"> .</p>', '<p class="fuente2">El alumno quisiera ser <input class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; width: 300px; text-align: center;" placeholder="Texto">&emsp;y&emsp;<input class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; width: 300px; text-align: center;" placeholder="Texto"> .</p>', '<p class="fuente2">La maestra quisiera ser <input class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; width: 300px; text-align: center;" placeholder="Texto">&emsp;y&emsp;<input class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; width: 300px; text-align: center;" placeholder="Texto"> .</p>', '<p class="fuente2">Los árboles quisieran ser <input class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; width: 300px; text-align: center;" placeholder="Texto">&emsp;y&emsp;<input class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; width: 300px; text-align: center;" placeholder="Texto"> .</p>']
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
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



function pregunta1() {
    var cont = 0;
    var cont1 = 0;
    var cont2 = 0;


    for (var i = 0; i < 12; i++) {
        if (($(".enc03a" + [i] + "").hasClass('subrayar') == true)) {
            cont1 = cont1 + 1;
            $(".enc03a" + [i] + "").addClass('correctoar');
        }

    }

    for (var i = 0; i < 18; i++) {
        if (($(".enc04a" + [i] + "").hasClass('subrayar') == true)) {
            cont = cont + 0.667;
            $(".enc04a" + [i] + "").addClass('incorrectoar');
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

    var total = (sumatotal * 3) / 12;
    $('.enc1').off('click');
    if (total < 0) {
        total = 0;
        $('#pre1a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre1a').val(parseFloat(total).toFixed(2));

    }
}



var random1 = [
    '<option>g. masculino, n. plural</option>',
    '<option>g. masculino, n. singular</option>',
    '<option>g. femenino, n. singular</option>',
    '<option>g. femenino, n. plural</option>',
];
random1.sort(f_randomico);
$('.random1').html('<option>-Seleccione-</option>' + random1 + '');

function pregunta2() {

    var respact = ['g. masculino, n. plural', 'g. masculino, n. plural', 'g. femenino, n. singular', 'g. femenino, n. plural', 'g. femenino, n. singular', 'g. masculino, n. singular', 'g. masculino, n. singular', 'g. masculino, n. plural'];
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

    pregunta1();
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
var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


var random1 = ['<img src="img/i1_p14_act4.jpg" style="max-width: 100%;">', '<img src="img/i2_p14_act4.jpg" style="max-width: 100%;">', '<img src="img/i3_p14_act4.jpg" style="max-width: 100%;">']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<div data-anijs="if: click, do: bounceIn animated" class="10 enc03a0"><img src="img/i4_p14_act4.jpg" style="mix-blend-mode: multiply;"></div>', '<div data-anijs="if: click, do: bounceIn animated" class="10 enc01a0"><img src="img/i5_p14_act4.jpg" style="mix-blend-mode: multiply;"></div>', '<div data-anijs="if: click, do: bounceIn animated" class="10 enc02a0"><img src="img/i6_p14_act4.jpg" style="mix-blend-mode: multiply;"></div>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

var random3 = ['<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" align="center"><img src="img/i8_p14_act4.jpg" style="max-width: 100%;"></div> <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9"> <div style="background-color: #fee1cb; border-radius: 20px 0px 20px 0px; display: inline-flex;"> <div class="fuente">El león y la tortuga</div> </div> <textarea class="form-control no-redimensionar text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="5" placeholder="Texto"></textarea> </div>', '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" align="center"><img src="img/i9_p14_act4.jpg" style="max-width: 100%;"></div> <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9"> <div style="background-color: #fee1cb; border-radius: 20px 0px 20px 0px; display: inline-flex;"> <div class="fuente">El conejo y el ratón</div> </div> <textarea class="form-control no-redimensionar text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="5" placeholder="Texto"></textarea> </div>', '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" align="center"><img src="img/i10_p14_act4.jpg" style="max-width: 100%;"></div> <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9"> <div style="background-color: #fee1cb; border-radius: 20px 0px 20px 0px; display: inline-flex;"> <div class="fuente">La tortuga y el ratón</div> </div> <textarea class="form-control no-redimensionar text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="5" placeholder="Texto"></textarea> </div>', '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" align="center"><img src="img/i11_p14_act4.jpg" style="max-width: 100%;"></div> <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9"> <div style="background-color: #fee1cb; border-radius: 20px 0px 20px 0px; display: inline-flex;"> <div class="fuente">El león y el conejo</div> </div> <textarea class="form-control no-redimensionar text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="60" rows="5" placeholder="Texto"></textarea> </div>']
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}


$(".10").addClass('hvr-grow')
$(".10").css('cursor', 'pointer');
$(".10").click(function() {
    if ($(this).hasClass("seleccionCaja")) {
        $(this).removeClass("seleccionCaja");
        $(this).addClass("seleccionCaja2");
    } else if ($(this).hasClass("seleccionCaja2")) {
        $(this).removeClass("seleccionCaja2");
        $(this).addClass("seleccionCaja3");
    } else if ($(this).hasClass("seleccionCaja3")) {
        $(this).removeClass("seleccionCaja3");
    } else {
        $(this).addClass("seleccionCaja");
    }
});


function pregunta1() {
    var cont = 0;
    var cont1 = 0;
    var cont2 = 0;

    for (var i = 0; i < 1; i++) {
        if (($(".enc01a" + [i] + "").hasClass('seleccionCaja') == true)) {
            cont = cont + 1;
            //$(".enc01a" + [i] + "").addClass('correctoar');
        } else if (($(".enc01a" + [i] + "").hasClass('seleccionCaja') != true)) {
            $(".enc01a" + [i] + "").addClass('incorrectoar');
        }
    }

    for (var i = 0; i < 1; i++) {
        if (($(".enc02a" + [i] + "").hasClass('seleccionCaja2') == true)) {
            cont1 = cont1 + 1;
            //$(".enc02a" + [i] + "").addClass('correctoar');
        } else if (($(".enc02a" + [i] + "").hasClass('seleccionCaja2') != true)) {
            $(".enc02a" + [i] + "").addClass('incorrectoar');
        }
    }

    for (var i = 0; i < 1; i++) {
        if (($(".enc03a" + [i] + "").hasClass('seleccionCaja3') == true)) {
            cont2 = cont2 + 1;
            //$(".enc03a" + [i] + "").addClass('correctoar');
        } else if (($(".enc03a" + [i] + "").hasClass('seleccionCaja3') != true)) {
            $(".enc03a" + [i] + "").addClass('incorrectoar');
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

    var sumatotal = parseFloat(cont) + parseFloat(cont1) + parseFloat(cont2);

    var total = (sumatotal * 1.5) / 3;
    $('.10').off('click');
    if (total < 0) {
        total = 0;
        $('#pre1a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre1a').val(parseFloat(total).toFixed(2));

    }
}

function total() {

    pregunta1();
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;
    var pre5a = document.getElementById('pre5a').value;
    var pre6a = document.getElementById('pre6a').value;

    cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a) + parseFloat(pre5a) + parseFloat(pre6a);
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
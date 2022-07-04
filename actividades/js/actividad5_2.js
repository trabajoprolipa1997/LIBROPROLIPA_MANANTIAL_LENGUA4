var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;



var random1 = ['<b class="seleccionCaja" style="padding: 5px">virtudes</b>', '<b class="seleccionCaja2" style="padding: 5px">defectos</b>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<font data-anijs="if: click, do: bounceIn animated" size="5" class="hvr-grow-shadow"> <div class="enc1 enc04a0">agresivo</div> </font>', '<font data-anijs="if: click, do: bounceIn animated" size="5" class="hvr-grow-shadow"> <div class="enc1 enc03a0">generoso</div> </font>', '<font data-anijs="if: click, do: bounceIn animated" size="5" class="hvr-grow-shadow"> <div class="enc1 enc03a1">astuto</div> </font>', '<font data-anijs="if: click, do: bounceIn animated" size="5" class="hvr-grow-shadow"> <div class="enc1 enc03a2">protector</div> </font>', '<font data-anijs="if: click, do: bounceIn animated" size="5" class="hvr-grow-shadow"> <div class="enc1 enc04a1">cruel</div> </font>', '<font data-anijs="if: click, do: bounceIn animated" size="5" class="hvr-grow-shadow"> <div class="enc1 enc03a3">comprensivo</div> </font>', '<font data-anijs="if: click, do: bounceIn animated" size="5" class="hvr-grow-shadow"> <div class="enc1 enc03a4">rápido</div> </font>', '<font data-anijs="if: click, do: bounceIn animated" size="5" class="hvr-grow-shadow"> <div class="enc1 enc04a2">impulsivo</div> </font>', '<font data-anijs="if: click, do: bounceIn animated" size="5" class="hvr-grow-shadow"> <div class="enc1 enc04a3">egoísta</div> </font>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

var random3 = ['<tr> <td width="200"><img src="img/i2_p17_act5_2.jpg" style="max-width: 100%;"></td> <td><textarea class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="1000" rows="4" placeholder="Texto"></textarea></td> </tr>', '<tr> <td><textarea class="form-control text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact;" cols="1000" rows="4" placeholder="Texto"></textarea></td> <td width="200"><img src="img/i3_p17_act5_2.jpg" style="max-width: 100%;"></td> </tr>']
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

$(".enc1").addClass('hvr-grow')
$(".enc1").css('cursor', 'pointer');
$(".enc1").click(function() {
    if ($(this).hasClass("seleccionCaja")) {
        $(this).removeClass("seleccionCaja");
        $(this).addClass("seleccionCaja2");
    } else if ($(this).hasClass("seleccionCaja2")) {
        $(this).removeClass("seleccionCaja2 ");
    } else {
        $(this).addClass("seleccionCaja");
    }
});


function pregunta2() {
    var cont = 0;
    var cont1 = 0;
    var cont2 = 0;

    for (var i = 0; i < 5; i++) {
        if (($(".enc03a" + [i] + "").hasClass('seleccionCaja') == true)) {
            cont = cont + 1;
            $(".enc03a" + [i] + "").addClass('correctoar');
        } else if (($(".enc03a" + [i] + "").hasClass('seleccionCaja2') == true)) {
            $(".enc03a" + [i] + "").addClass('incorrectoar');
        }
    }

    for (var i = 0; i < 4; i++) {
        if (($(".enc04a" + [i] + "").hasClass('seleccionCaja2') == true)) {
            cont1 = cont1 + 1;
            $(".enc04a" + [i] + "").addClass('correctoar');
        } else if (($(".enc04a" + [i] + "").hasClass('seleccionCaja') == true)) {
            $(".enc04a" + [i] + "").addClass('incorrectoar');
        }
    }

    // for (var i = 0; i < 20; i++) {
    //     if (($(".enc05a" + [i] + "").hasClass('subrayar') == true) || ($(".enc05a" + [i] + "").hasClass('encierreCaja') == true)) {
    //         cont2 = cont2 + 0.4;
    //         $(".enc05a" + [i] + "").addClass('incorrectoar');
    //     } else {
    //         //$(".enc05a" + [i] + "").addClass('incorrectoar');
    //     }
    // }

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

    var sumatotal = parseFloat(cont) + parseFloat(cont1);

    var total = (sumatotal * 3) / 9;
    $('.1').off('click');
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
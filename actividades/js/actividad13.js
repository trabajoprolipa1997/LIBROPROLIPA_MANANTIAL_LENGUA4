var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

var random1 = ['<td class="bordtable" align="center"> <p class="fuente">Contiene los elementos de una tarjeta de felicitación: título, destinatario, mensaje y firma.</p> </td> <td class="bordtable" align="center"> <div class="hvr-grow" style="margin: 20px" data-anijs="if: click, do: flip animated"> <span class="01 enc0a0" style="padding: 8px; border: 3px solid #00aeef; border-radius: 50%">&emsp;</span> </div> </td>', '<td class="bordtable" align="center"> <p class="fuente">Contiene elementos decorativos: ilustraciones, colores, formas, etc.</p> </td> <td class="bordtable" align="center"> <div class="hvr-grow" style="margin: 20px" data-anijs="if: click, do: flip animated"> <span class="01 enc0a1" style="padding: 8px; border: 3px solid #00aeef; border-radius: 50%">&emsp;</span> </div> </td>', '<td class="bordtable" align="center"> <p class="fuente">Las oraciones y los nombres propios empiezan con mayúscula. </p> </td> <td class="bordtable" align="center"> <div class="hvr-grow" style="margin: 20px" data-anijs="if: click, do: flip animated"> <span class="01 enc0a2" style="padding: 8px; border: 3px solid #00aeef; border-radius: 50%">&emsp;</span> </div> </td>', '<td class="bordtable" align="center"> <p class="fuente">Se utiliza la <b style="color: #00aeef !important; -webkit-print-color-adjust: exact;">m</b> antes de <b style="color: #00aeef !important; -webkit-print-color-adjust: exact;">p</b> y de <b style="color: #00aeef !important; -webkit-print-color-adjust: exact;">b</b> en las palabras que corresponden. </p> </td> <td class="bordtable" align="center"> <div class="hvr-grow" style="margin: 20px" data-anijs="if: click, do: flip animated"> <span class="01 enc0a3" style="padding: 8px; border: 3px solid #00aeef; border-radius: 50%">&emsp;</span> </div> </td>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}



$('.11').css('cursor', 'pointer');
$('.11').click(function() {
    switch ($(this).attr('class')) {
        case '11 enc11a1':
            $('.enc11a1').addClass('vistoCaja');
            $('.enc11a2').removeClass('vistoCaja');
            $('.enc11a3').removeClass('vistoCaja');


            break;
        case '11 enc11a2':
            $('.enc11a2').addClass('vistoCaja');
            $('.enc11a1').removeClass('vistoCaja');
            $('.enc11a3').removeClass('vistoCaja');

            break;

        case '11 enc11a3':
            $('.enc11a3').addClass('vistoCaja');
            $('.enc11a1').removeClass('vistoCaja');
            $('.enc11a2').removeClass('vistoCaja');

            break;

    }
});



$(".01").css('cursor', 'pointer');
$(".01").click(function() {
    if ($(this).hasClass("vistoCaja")) {
        $(this).removeClass("vistoCaja");
    } else {
        $(this).addClass("vistoCaja");
    }
});

function pregunta3() {
    var cont = 0;
    var cont1 = 0;
    var cont2 = 0;

    for (var i = 0; i < 4; i++) {
        if (($(".enc0a" + [i] + "").hasClass('vistoCaja') == true)) {
            cont = cont + 1;
            $(".enc0a" + [i] + "").addClass('correctoar');
        } else {
            $(".enc0a" + [i] + "").addClass('incorrectoar');
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

    var sumatotal = parseFloat(cont);
    var total = (sumatotal * 2) / 4;
    $('.01').off('click');
    if (total < 0) {
        total = 0;
        $('#pre3a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre3a').val(parseFloat(total).toFixed(2));
    }
}



function total() {
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
    $('div').attr("disabled", true);
    $('select').attr("disabled", true);
    $('.bin1').removeClass('bin1');
    $('.nota-abierta').addClass('backnoabierta');
    $('.enc3a').off('click');
    $('.desaparece').filter(function() {
        return $.trim($(this).text()) === ''
    }).hide()
}
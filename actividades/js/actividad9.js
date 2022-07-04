var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


var random1 = ['<div style="border: 0.13020833333333334vw #a79901 dashed; border-radius: 0.9765625vw; color: #0077c0 !important; -webkit-print-color-adjust: exact; font-size: 1.3020833333333333vw; padding: 0.3255208333333333vw" class="drag1 hvr-grow" data-anijs="if: mouseup, do: bounceIn animated">Señorita Marcia</div>', '<div style="border: 0.13020833333333334vw #a79901 dashed; border-radius: 0.9765625vw; color: #0077c0 !important; -webkit-print-color-adjust: exact; font-size: 1.3020833333333333vw; padding: 0.3255208333333333vw" class="drag1 hvr-grow" data-anijs="if: mouseup, do: bounceIn animated">Profesor Juan</div>', '<div style="border: 0.13020833333333334vw #a79901 dashed; border-radius: 0.9765625vw; color: #0077c0 !important; -webkit-print-color-adjust: exact; font-size: 1.3020833333333333vw; padding: 0.3255208333333333vw" class="drag1 hvr-grow" data-anijs="if: mouseup, do: bounceIn animated">Hijo lindo</div>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<td> <div align="center" id="div0" data-placeholder="Arrastra aquí" class="caja2 form-control pintar c2"></div> </td> <td> <div style="width: 1.3020833333333333vw"></div> </td> <td><span style="font-size: 1.3020833333333333vw">Saludo académico</span></td>', '<td> <div align="center" id="div1" data-placeholder="Arrastra aquí" class="caja2 form-control pintar c2"></div> </td> <td> <div style="width: 1.3020833333333333vw"></div> </td> <td><span style="font-size: 1.3020833333333333vw">Saludo familiar</span></td>', '<td> <div align="center" id="div2" data-placeholder="Arrastra aquí" class="caja2 form-control pintar c2"></div> </td> <td> <div style="width: 1.3020833333333333vw"></div> </td> <td><span style="font-size: 1.3020833333333333vw">Saludo laboral</span></td>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}


function pregunta3() {
    var respact2 = ['Profesor Juan', 'Hijo lindo', 'Señorita Marcia'];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#div' + [i] + '').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#div' + [i] + '').addClass('correctoar');
        } else {
            $('#div' + [i] + '').addClass('incorrectoar');
        }

    }
    var total = (cont * 3) / 3;
    $('#pre3a').val(parseFloat(total).toFixed(2));
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
    $('.nota-abierta').addClass('backnoabierta');
    $('.enc3a').off('click');
    $('.desaparece').filter(function() {
        return $.trim($(this).text()) === ''
    }).hide()
}
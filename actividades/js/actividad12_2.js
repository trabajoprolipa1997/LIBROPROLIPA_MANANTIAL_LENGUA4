var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


function pregunta3() {
    var respact2 = ['c a m a', 'c a n a', 'c a s a'];
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


function pregunta5() {
    var respact2 = ['Paolo', 'Pedro', 'pega', 'Pérez', 'piedras', 'plata', 'poca', 'por', 'preciosas'];
    var cont = 0;
    for (var i = 0; i < 9; i++) {
        var res = $('#divv' + [i] + '').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#divv' + [i] + '').addClass('correctoar');
        } else {
            $('#divv' + [i] + '').addClass('incorrectoar');
        }

    }
    var total = (cont * 2) / 9;
    $('#pre5a').val(parseFloat(total).toFixed(2));
}


function total() {
    pregunta3();
    pregunta5();
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;
    var pre5a = document.getElementById('pre5a').value;

    cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a) + parseFloat(pre5a);
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
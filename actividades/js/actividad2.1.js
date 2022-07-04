var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;



$(".1").addClass('hvr-grow-shadow')
$(".1").css('cursor', 'pointer');
$(".1").click(function() {
    if ($(this).hasClass("encierreCaja")) {
        $(this).removeClass("encierreCaja");
        $(this).addClass("encierreCaja2");
    } else if ($(this).hasClass("encierreCaja2")) {
        $(this).removeClass("encierreCaja2");
    } else {
        $(this).addClass("encierreCaja");
    }
});


function pregunta2() {
    var cont = 0;
    var cont1 = 0;
    var cont2 = 0;

    for (var i = 0; i < 7; i++) {
        if (($(".enc03a" + [i] + "").hasClass('encierreCaja') == true)) {
            cont = cont + 1;
            $(".enc03a" + [i] + "").addClass('correctoar');
        } else if (($(".enc03a" + [i] + "").hasClass('encierreCaja2') == true)) {
            $(".enc03a" + [i] + "").addClass('incorrectoar');
        }
    }

    for (var i = 0; i < 1; i++) {
        if (($(".enc04a" + [i] + "").hasClass('encierreCaja2') == true)) {
            cont1 = cont1 + 1;
            $(".enc04a" + [i] + "").addClass('correctoar');
        } else if (($(".enc04a" + [i] + "").hasClass('encierreCaja') == true)) {
            $(".enc04a" + [i] + "").addClass('incorrectoar');
        }
    }

    for (var i = 0; i < 20; i++) {
        if (($(".enc05a" + [i] + "").hasClass('subrayar') == true) || ($(".enc05a" + [i] + "").hasClass('encierreCaja') == true)) {
            cont2 = cont2 + 0.4;
            $(".enc05a" + [i] + "").addClass('incorrectoar');
        } else {
            //$(".enc05a" + [i] + "").addClass('incorrectoar');
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

    var sumatotal = (parseFloat(cont) + parseFloat(cont1)) - parseFloat(cont2);

    var total = (sumatotal * 5) / 8;
    $('.1').off('click');
    if (total < 0) {
        total = 0;
        $('#pre2a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre2a').val(parseFloat(total).toFixed(2));

    }
}


// function pregunta5() {

//     var cont1 = 0;

//     var res1 = $('#a0').val().toLowerCase();
//     var res1comp = res1.substring(0, 2);

//     if (res1comp == "mo") {
//         cont1 = cont1 + 1;
//         $('#a0').addClass('correctoar');
//     } else {
//         $('#a0').addClass('incorrectoar');
//     }

//     var res2 = $('#a1').val().toLowerCase();
//     var res2comp = res2.substring(0, 2);
//     var res2comp1 = res1.substr(-2);

//     if (res2comp1 == res2comp) {
//         cont1 = cont1 + 1;
//         $('#a1').addClass('correctoar');
//     } else {
//         $('#a1').addClass('incorrectoar');
//     }

//     var res3 = $('#a2').val().toLowerCase();
//     var res3comp = res3.substring(0, 2);
//     var res3comp1 = res2.substr(-2);

//     if (res3comp1 == res3comp) {
//         cont1 = cont1 + 1;
//         $('#a2').addClass('correctoar');
//     } else {
//         $('#a2').addClass('incorrectoar');
//     }


//     //gorila

//     var res4 = $('#b0').val().toLowerCase();
//     var res4comp = res4.substring(0, 2);
//     var res4comp1 = res2.substr(-2);

//     if (res4comp1 == res4comp) {
//         cont1 = cont1 + 1;
//         $('#b0').addClass('correctoar');
//     } else {
//         $('#b0').addClass('incorrectoar');
//     }



//     // var a = "hello";
//     // console.log(a.substr(-2));//dos ultimos digitos
//     // console.log(a.substring(0, 2));//dos primero digitos


//     if (total < 0) {
//         total = 0;
//         $('#pre4a').val(parseFloat(total).toFixed(2));
//     } else {
//         $('#pre4a').val(parseFloat(total).toFixed(2));
//     }

// }




function total() {

    pregunta2();
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;

    cor = parseFloat(pre1a) + parseFloat(pre2a);
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
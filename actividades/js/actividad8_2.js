var random1 = ['<img src="img/i1_p23_act8_2.jpg" style="max-width: 100%;">', '<img src="img/i2_p23_act8_2.jpg" style="max-width: 100%;">']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<div> <div style="background-color: #c5e0ae !important; -webkit-print-color-adjust: exact; display: inline-flex; border-radius: 20px 20px 0px 0px"> <p class="fuente"><b>Semejanzas</b></p> </div> <textarea class="form-control no-redimensionar text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; border: 2px solid #c5e0ae;" cols="60" rows="5" placeholder="Texto"></textarea> </div>', '<div> <div style="background-color: #c5e0ae !important; -webkit-print-color-adjust: exact; display: inline-flex; border-radius: 20px 20px 0px 0px"> <p class="fuente"><b>Diferencias</b></p> </div> <textarea class="form-control no-redimensionar text-question hvr-grow-shadow" style="box-shadow: 0px -20px 20px #e0e1e3 inset !important; -webkit-print-color-adjust: exact; border: 2px solid #c5e0ae;" cols="60" rows="5" placeholder="Texto"></textarea> </div>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}
var cnum = document.getElementsByClassName('c-num')[0];
var cope = document.getElementsByClassName('c-operator')[0];
var inp_top = document.getElementById('intop');
var inbottom = document.getElementById('inbottom');
var newinbottom, numberHtml = '';
var newinbottom2;
var sign;
for (i = 0; i < 10; i++) {
    numberHtml += '<span class="numb" value="' + i + '" id="numid' + i + '" onclick="puton(' + i + ')">' + i + '</span>';
}

cnum.innerHTML = numberHtml;
document.getElementById('numid0').style.order = "1";
function puton(numb) {
    inbottom.value += numb;
}

function set_answer(answer) {
    if (inbottom.value == '') {
        alert('Type number');
    }
    else if (sign == "plus") {
        newinbottom2 = inbottom.value;
        inp_top.value = inbottom.value;
        inbottom.value = parseInt(newinbottom) + parseInt(newinbottom2);
    }
    else if (sign == "minus") {
        newinbottom2 = inbottom.value;
        inp_top.value = inbottom.value;
        inbottom.value = newinbottom - newinbottom2;
    } else if (sign == "divi") {
        newinbottom2 = inbottom.value;
        inp_top.value = inbottom.value;
        inbottom.value = newinbottom / newinbottom2;
    } else if (sign == "mul") {
        newinbottom2 = inbottom.value;
        inp_top.value = inbottom.value;
        inbottom.value = newinbottom * newinbottom2;
    }
    sign = '';
}

function set_data(opra) {
    switch (opra) {
        case 'clr':
            inp_top.value = ''
            inbottom.value = '';
            newinbottom = '';
            newinbottom = '';
            sign = '';
            break;
        case 'plus':
            newinbottom = inbottom.value;
            inp_top.value = inbottom.value;
            inbottom.value = '';
            sign = "plus";
            break;
        case 'minus':
            newinbottom = inbottom.value;
            inp_top.value = inbottom.value;
            inbottom.value = '';
            sign = "minus";
            break;
        case 'divi':
            newinbottom = inbottom.value;
            inp_top.value = inbottom.value;
            inbottom.value = '';
            sign = "divi";
            break;
        case 'mul':
            newinbottom = inbottom.value;
            inp_top.value = inbottom.value;
            inbottom.value = '';
            sign = "mul";
            break;
        default:
            ans();
            break;
    }
}
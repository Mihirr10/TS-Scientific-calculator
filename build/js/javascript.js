let display = document.getElementById('result');

//function for displaying values
function dis(val) {

    display.value += val;


}
//function for radian to degree
function deg() {
    display.value = ((180 / Math.PI) * display.value).toFixed(2);
}

//function for fixed-exponential
function fe() {
    display.value = Number.parseFloat(display.value).toExponential();
}

//function for memory clear

let memory=document.getElementById("memory");
function mc() {
    localStorage.removeItem("memory");
    document.getElementById("memoryClear").disabled = true;
    document.getElementById("memoryRecall").disabled = true;
    memory.innerHTML=""

}

//function for memory recall
function mr() {
    display.value = localStorage.getItem("memory");
    memory.innerHTML="Memory: "+localStorage.getItem('memory');
}

//function for memory plus
function mPlus() {
    display.value = eval(localStorage.getItem("memory") + "+" + display.value);
    localStorage.setItem("memory", display.value);
    document.getElementById("memoryClear").disabled = false;
    document.getElementById("memoryRecall").disabled = false;
    memory.innerHTML="Memory: "+localStorage.getItem('memory');
}

//function for memory minus
function mMinus() {
    display.value = eval(localStorage.getItem("memory") + "-" + display.value);
    localStorage.setItem("memory", display.value);
    document.getElementById("memoryClear").disabled = false;
    document.getElementById("memoryRecall").disabled = false;
    memory.innerHTML="Memory: "+localStorage.getItem('memory');
}
//function for memory store
function ms() {
    localStorage.setItem("memory", display.value);
    document.getElementById("memoryClear").disabled = false;
    document.getElementById("memoryRecall").disabled = false;
    memory.innerHTML="Memory: "+localStorage.getItem('memory');
}

//function for trogonometry
function trigonometry() {
    let a = document.getElementById("trigo").value;

    if (a == 'sinx') {
        sin();
    }
    else if (a == 'cosx') {
        cos();
    } else if (a == 'tanx') {
        tan();
    }

}

//function for sin value
function sin() {
    display.value = Math.sin(display.value * Math.PI / 180).toFixed(10);
    document.getElementById("trigo").value="Trigonometry";

}

//function for cos value

function cos() {
    display.value = Math.cos(display.value * Math.PI / 180).toFixed(10);
    document.getElementById("trigo").value="Trigonometry";
}

//function for tan value

function tan() {
    display.value = Math.tan(display.value * Math.PI / 180).toFixed(10);
    document.getElementById("trigo").value="Trigonometry";
}


//function for functions

function functions() {
    let b = document.getElementById("functions").value;

   
     if (b == 'floor') {
        floor();
    } else if (b == 'ceil') {
        ceil();
    }

}
//function for floor value
function floor() {
    display.value = Math.floor(display.value);
    document.getElementById("functions").value="Functions";
}

//function for ceil value
function ceil() {
    display.value = Math.ceil(display.value);
    document.getElementById("functions").value="Functions";
}


//function for twotoN
function twoToN() {
    display.value = Math.pow(2, display.value);
}
//function for pi
function pi() {
    const pi = 3.14159265359;

    if (display.value === '') {
        display.value = pi;
    }
    else {
        display.value = display.value * pi;
    }
}

//function for exponential
function e() {
    const e = 2.718281828459045;

    if (display.value === '') {
        display.value = e;
    }
    else {
        display.value = display.value * e;
    }
}


// function for maths operations
function sresult() {

    let x = eval(display.value);
    display.value = x;

}

//function for clear the screen
function del() {

    display.value = "";
}

//function for backspace
function remove() {

    display.value = display.value.substring(0, display.value.length - 1);

}

//function for square
function square() {
    display.value = Math.pow(display.value, 2);
}

//function for inverse
function inverse() {
    display.value = 1 / display.value;

}

//function for removing the minus sign
function abs() {
    display.value = Math.abs(display.value);
}

//function for exp
function exp() {
    display.value = Math.exp(display.value);
}
//function for square root
function squareRoot() {

    display.value = Math.sqrt(display.value);
}



//function for factorial
function factorial() {
    var result = 1;

    if (display.value === 0) {
        display.value = "1";
    }
    else if (display.value === 1) {
        display.value = "not defined";
    }

    else {
        var result = 1;
        for (var i = display.value; i > 0; i--) {
            result = result * i;
        }

        display.value = result;
    }
}

//function for log
function log() {
    display.value = Math.log10(display.value).toFixed(10);
}
//finction for ln
function ln() {
    display.value = Math.log(display.value).toFixed(10);
}

//function for plusminus
function plusMinus() {
    if (display.value.charAt(0) === '-') {
        display.value = display.value.slice(-1);
    }
    else {
        display.value = "-" + display.value;
    }
}


//function for power of 10
function power() {
    display.value = Math.pow(10, display.value);
}



import Pitagoras from './pitagoras.js'
import Resolvente from './resolvente.js';

function calcular(){
    let a = document.getElementById("inp_a").value
    let b = document.getElementById("inp_b").value

    let pitagoras = new Pitagoras();
    pitagoras.a = a;
    pitagoras.b = b;

    document.getElementById("h1_resultado").textContent = pitagoras.calcular_hipotenusa();
}

function calcular_res(){
    let a = document.getElementById("inp_a2").value
    let b = document.getElementById("inp_b2").value
    let c = document.getElementById("inp_c").value

    let resolvente = new Resolvente();
    resolvente.a = a
    resolvente.b = b
    resolvente.c = c

    document.getElementById("h1_x1").textContent = resolvente.calcular_resolvente1();
    document.getElementById("h1_x2").textContent = resolvente.calcular_resolvente2();
}

document.getElementById("btn_calcular").addEventListener("click",calcular)
document.getElementById("btn_calcular-resolvente").addEventListener("click",calcular_res)
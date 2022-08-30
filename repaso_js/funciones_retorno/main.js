
const calcular_tension = (a,b) => {
    const t = a*b;

    return t;
}

const operar = () => {
    let r = document.getElementById("inp_r").value;
    let i = document.getElementById("inp_i").value;
    
    let resultado = calcular_tension(r,i);
    alert(resultado);
}

document.getElementById("btn_operar").addEventListener("click",operar);
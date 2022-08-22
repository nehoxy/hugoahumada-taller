export default class Pitagoras{

    a = '' // cateto opuesto
    b = '' // cateto adyacente

    constructor(){

    }

    calcular_hipotenusa(){
        let h
        Number(this.a)
        Number(this.b)
        h = Math.sqrt(Math.pow(this.a,2) + Math.pow(this.b,2));
       
        return h;
    }
}
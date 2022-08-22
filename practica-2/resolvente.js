export default class Resolvente {
    a = ''
    b = ''
    c = ''

    constructor(){

    }

    calcular_resolvente1(){
        let resultado
        Number(this.a)
        Number(this.b)
        Number(this.c)
        resultado = ((-this.b)+Math.sqrt(Math.pow(this.b,2)-4*this.a*this.c))/2*this.a
        return resultado;
        
    }

    calcular_resolvente2(){
        let resultado
        Number(this.a)
        Number(this.b)
        Number(this.c)
        resultado = ((-this.b)-Math.sqrt(Math.pow(this.b,2)-4*this.a*this.c))/2*this.a
        return resultado;
    }
}
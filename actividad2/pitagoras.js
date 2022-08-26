export default class Pitagoras{
    co;
    ca;

    constructor(){}
    

    calcular_hipotenusa(){

        let bloque1 = Math.pow(this.co,2)+ Math.pow(this.ca,2)

        let hipotenusa = Math.sqrt(bloque1)

        console.log(hipotenusa)
    }
}
import Pitagoras from "./pitagoras.js";
const mostrar = () => {
    
    //creamos la instancia de clase que nos va a permitir tener acceso a los metodos y atributos e la clase
    let pitagorass=new Pitagoras()

    //ejecutamos el metodo de la clase
    pitagorass.ca = document.getElementById("imp_ca").value;
    pitagorass.co = document.getElementById("imp_co").value;

    pitagorass.calcular_hipotenusa()
}
document.getElementById("btn_mostrar").addEventListener("click",mostrar)
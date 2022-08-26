
//creamos funcion flecha

const mostrar = () => {
    const km = 68000
    console.log('el kilometraje de mi vehiculo es:'+km+'km')

    //template string

    console.log(`el kilometraje de mi vehiculo es: ${km}km`)


    
}

document.getElementById("btn_mostrar").addEventListener("click",mostrar)
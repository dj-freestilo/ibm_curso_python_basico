var libro = {
    titulo: 'Las Legiones',
    autor: 'Santiago Port',
    informacion: function (){
        return this.titulo + " escrito por " + this.autor;
    }
}

let x=53
let y;
var z;
let intentos = [1, 5, 10, 12]

function calculo(x) { return (x); }

function app() {
    document.getElementById('info1').innerHTML=libro.informacion()
    // alert(typeof(libro.informacion))
    // alert(document.getElementById("campo").value)
    // alert(typeof(libro.informacion()))
    // alert(calculo(undefined))
    // alert('Valor de y:' + y)
    // alert('Valor de z:' + z)
    alert(intentos[4])
}
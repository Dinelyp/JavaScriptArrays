//1. Crear una funcion que convierta los strings que se ingresan como parametros a estilo capitalizado.
// Ejemplo: "hola a todos" => "Hola A Todos"


//let frase = capitalizar("hola a todos") // "Hola a todos"

function capitalizar(cadena) {
    let array = cadena.split(" ")
    let cadenaCapitalizada = []
    for (const index in array) {
        cadenaCapitalizada.push((array[index].charAt(0).toUpperCase() + array[index].slice(1)))
    }
    //return cadenaCapitalizada.join(" ")
    console.log(cadenaCapitalizada.join(" "))
}


//2. Dado el siguiente objeto, crear una funcion que verifique si todos los atributos se encuentran llenos.
// En caso no sea asi, que envie una alerta mostrando un mensaje y los atributos que estan vacíos.
// Ejemplo: {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""} => Los campos nombre y profesion se encuentran vacios.

let perfil = { nombre: "", apellido: "Pacheco", edad: 38, profesion: "" }

function verificar(perfil) {
    for (const index in perfil) {
        if (perfil[index] === "") {
            alert(`El campo ${index} está vacío`)
        }
    }
}

//3. Para el ejercicio anterior, crear una funcion que dados los datos pendientes, lance un prompt para que el usuario
// complete los datos faltantes. Debe verificar que el dato ingresado no este vacio y que corresponda al tipo de dato.

let persona = { nombre: "", apellido: "Pacheco", edad: 38, profesion: "" }

function verificarYLlenar(objeto) {
    for (const index in objeto) {
        if (objeto[index] === "") {
            objeto[index] = prompt(`El campo ${index} está vacío, por favor llenalo: `)
        }
    }
    //return objeto
    console.log(objeto)
}

//4. Te enviaron una base de datos de usuarios:
    let users = [
        { nombre: "", apellido: "Pacheco", edad: 38, profesion: "" },
        { nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor" },
        { nombre: "Julia", apellido: "", edad: 32, profesion: "musico" },
        { nombre: "", apellido: "Martinez", edad: 29, profesion: "programador" },
        { nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "" },
        { nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario" },
    ]

function llenarcampos() {
    for (const index in users) {
        verificarYLlenar(users[index])
    }

    console.log(users)
}

// Te piden que utilizando las funciones de los ejercicios anteriores, evalues que usuarios tienen datos pendientes
// y en caso no existan, solicitar el ingreso de los datos a traves del prompt para completarlos.

//5. Crear una funcion que permita ordenar los usuarios por edad de menor a mayor.
function ordenar(parametro) {
    users.sort((a,b) => a[parametro]-b[parametro])
    console.log(users)

}

let usuarios = [
    { nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer" },
    { nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor" },
    { nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico" },
    { nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador" },
    { nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef" },
    { nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario" },
]
//6. Crear una funcion que nos permita escribir los datos de cada usuario en el navegador linea por linea de la siguiente manera:
// 1. Recorrer el arreglo users
// 2. Obtener los valores de cada llave
// 3. Formar la frase nombre apellido tiene edad años y es profesion
// 4. Escribir esta frase en el navegador linea por linea
// Ejemplo: "Andres Soto tiene 28 años y es profesor"

function crearLista(){
    for (const index in usuarios) {
        let nombre = usuarios[index].nombre
        let apellido = usuarios[index].apellido
        let edad = usuarios[index].edad
        let profesion = usuarios[index].profesion
    
        let frase = `${nombre} ${apellido} tiene ${edad} años y es ${profesion}`
        document.write(frase)
        document.write("<br>")
    }
}

//7. Crear una funcion que nos permita ingresar el parametro por el cual se va a ordenar la lista de usuarios y retorne la lista
// ordenada.
// 1. Crear una funcion que reciba un parametro.
// 2. Ordenar nuestra lista segun ese parametro.
// 3. Retorna la lista ordenada.
function ordenarUsuarios(valor) {
    if (usuarios[valor] === "number"){
        usuarios.sort((a, b) => a[valor].localeCompare(b[valor]))
    } else {
        usuarios.sort((a, b) => a[valor] - b[valor])
    }
    console.log(usuarios)
}

//8. Crear un boton con javascript que diga "Aceptar" y cuando se le de click mande una alerta que diga: "De acuerdo!"
const root = document.getElementById("root")
let button = document.createElement('button');
button.type = 'button';
button.style.background = "aquamarine";
button.style.padding = "20px";
button.innerText = 'Aceptar';
button.id='boton'
document.body.appendChild(button);


button.addEventListener("click", () => {
    alert("De acuerdo!")

})

root.append(button)

//9. Agrega un listener al boton para que cuando el usuario haga hover sobre este, el boton desaparezca.
boton.addEventListener( "mouseout",() => {
   boton.style.display ="none"
})
let users = [
    {id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer", created_at: "2022-09-26T06:25:21.118Z"},
    {id: 2, nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor", created_at: "2022-04-18T14:14:32.879Z"},
    {id: 3, nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico", created_at: "2021-12-14T11:53:38.279Z"},
    {id: 4, nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador", created_at: "2022-01-26T03:31:15.202Z"},
    {id: 5, nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef", created_at: "2022-07-27T02:06:22.760Z"},
    {id: 6, nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: "2022-05-01T22:06:35.864Z"},
]


 /////Ejercicio 10
function ingresar_informacion(){
    let informacion = prompt("Ingrese un usuario (Nombre , Apellido, Edad, Profesion)")
    let cadena = informacion.split(',')
    users.push({id:users.length+1,nombre:cadena[0],apellido:cadena[1],edad:cadena[2],profesion:cadena[3]})
    console.log(users)
 }
// ingresar_informacion()
////Ejercicio 11
nuevaFecha = new Date();
ultimo = users.length - 1
const nuevoUsuario = users.splice(ultimo,1,
        {id: 7, nombre: "Sandro", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: nuevaFecha}
    )
//let informacion = new Date();
console.log(nuevoUsuario)
console.log(users)

// Crear una funcion que permita ordenar la lista de usuarios por fecha de creacion, de la mas nueva a la mas antigua y viceversa
// utilizando el parametro booleano reverse (si es true se ordenaran de nuevo a antiguo)
function ordenar(reverse) {
    for(index in users){
        users[index].created_at = new Date(users[index].created_at)
    }
    if (reverse === true) {
        users.sort((a, b) => b["created_at"] - a["created_at"])
    }else{
        users.sort((a, b) => a["created_at"] - b["created_at"]) 
    }
    console.log(users)
}

//////Ejercicio  13
function filtrarusuario(mes, anio) {
    let usuariofiltrado = users.filter(
      (element) => new Date(element.created_at).getMonth() === (mes - 1) && new Date(element.created_at).getFullYear() === anio
    );
    console.log(usuariofiltrado);
  }
  filtrarusuario(7, 2022);


/// Mantenimento
eliminarArreglo = function (id){
    eliminar = users.splice(id,1)
    console.log(eliminar)
    console.log(users)
}

eliminarArreglo(5)

agregarArreglo = function (id,arreglo){
    agregar = users.splice(id,0,arreglo)
    console.log(agregar)
    console.log(users)
}
agregarArreglo(6,{id: 7, nombre: "Dinely", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: "2022-05-01T22:06:35.864Z"})

actualizarArreglo = function(id,nuevoU){
    actualizar = users.splice(id,1,nuevoU)
    console.log(actualizar)
    console.log(users)
}
actualizarArreglo(4,{id: 5, nombre: "Boris", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: "2022-05-01T22:06:35.864Z"})


let pokemons = [
    { id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30 },
    { id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26 },
    { id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26 },
    { id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32 },
    { id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35 },
    { id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32 },
    { id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30 },
    { id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30 },
    { id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36 },
    { id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30 },
]

//Ejercicio 1
function ordenar() {
    pokemons.sort((a, b) => a.base_damage - b.base_damage)
    console.log(pokemons)
}

//Ejercicio 2

function ordenar_pokemon(valor) {
    if (valor === "type" || valor === "name") {
        pokemons.sort((a, b) => a[valor].localeCompare(b[valor]))
    } else {
        pokemons.sort((a, b) => a[valor] - b[valor])
    }
}

//Ejercicio 3
function filtro_pokemon() {
    argumento = prompt("Ingrese Argumento")
    let filteredPokemons = pokemons.filter(pokemon => pokemon.type === argumento)
    let result = filteredPokemons.length === 0 ? "Tipo de pokemon no encontrado" : filteredPokemons
    console.log(result)
}

//Ejercicio 4
let pokemon_master = {
    id: 1, name: "master", created_date: "22/11/2022", pokemon: []
}

//Ejercicio 5
function addpokemonramdom() {
    const aleatoria = Math.floor(Math.random() * pokemons.length)
    pokemon_master.pokemon.push(pokemons[aleatoria])
    console.log(pokemon_master)
}

//Ejercicio 6
function addAtributes() {
    for (let i = 0; i < pokemons.length; i++) {
        pokemons[i]['min_damage'] = Math.floor(Math.random() * (2 - 1 + 1) + 1);
        pokemons[i]['max_damage'] = Math.floor(Math.random() * (5 - 3 + 1) + 3);
    }
    console.log(pokemons)
}

//Ejercicio 7
function set_damage() {
    index = prompt("Ingrese un pokemon")
    if (index < pokemons.length) {
        addAtributes()
        let selectedpokemon = pokemons[index]
        let total_damage = selectedpokemon.base_damage + Math.floor(Math.random() * (selectedpokemon.max_damage - 1 + selectedpokemon.min_damage) + selectedpokemon.min_damage)
        console.log(total_damage)
    }
}

//Ejercicio 8
function setTotalDamage() {
    for (let i = 0; i < pokemons.length; i++) {
        pokemons[i]['min_damage'] = Math.floor(Math.random() * (2 - 1 + 1) + 1)
        pokemons[i]['max_damage'] = Math.floor(Math.random() * (5 - 3 + 1) + 3)
        pokemons[i]['total_damage'] = pokemons[i]["base_damage"] + Math.floor(Math.random() * (pokemons[i]["max_damage"] - 1 + pokemons[i]["min_damage"]) + pokemons[i]["min_damage"])
    }

    pokemons.sort(function (a, b) {
        if (a.total_damage > b.total_damage) {
            return -1;
        } else if (a.total_damage < b.total_damage) {
            return 1;
        } else {
            return 0;
        }
    })

    pokemon_master.pokemon.push(pokemons)
    console.log(pokemon_master)
}
//Ejercicio 9
const lista = document.getElementById('root')
const ul = document.createElement('ul')
root.append(ul)

for (let i = 0; i < pokemons.length; i++) {
    const li = document.createElement('li')
    li.textContent = pokemons[i].name
    ul.append(li)
}


/////////ejercicio 10
function genera_tabla() {

    const tablapokemon = document.getElementById("tablapokemon")
    const tabla = document.createElement("table")
    tabla.setAttribute("border", "1")
    tablapokemon.append(tabla)
    const taR = document.createElement("tr")
    tabla.append(taR)
    for (const prop in pokemons[0]) {
        const taHe = document.createElement("th")
        taHe.textContent = prop
        taR.append(taHe)
    }
    for (let i = 0; i < pokemons.length; i++) {
        const tr = document.createElement("tr")
        tabla.append(tr)
        for (const prop in pokemons[i]) {
            var celda = document.createElement("td")
            var textoCelda = document.createTextNode(pokemons[i][prop])
            celda.appendChild(textoCelda)
            tr.appendChild(celda)
        }
    }
}


///ejercicio 11

function genera_tabla_filtro() {

    const tablapokemon = document.getElementById("tablapokemon")
    const tabla = document.createElement("table")
    tabla.setAttribute("border", "1")
    tablapokemon.append(tabla)

    const taR = document.createElement("tr")
    tabla.append(taR)
    crearTabla()
    for (const prop in pokemons[0]) {
        const taHe = document.createElement("th")
        taHe.textContent = prop
        taHe.style.cursor = "pointer"
        taHe.addEventListener("click", () => {
            ordenar_pokemon(prop)
            tabla.innerHTML = ""
            tabla.append(taR)
            crearTabla()
        })
        taR.append(taHe)
    }

    function crearTabla() {
        for (let i = 0; i < pokemons.length; i++) {
            const tr = document.createElement("tr")
            tabla.append(tr)
            for (const prop in pokemons[i]) {
                var celda = document.createElement("td")
                var textoCelda = document.createTextNode(pokemons[i][prop])
                celda.appendChild(textoCelda)
                tr.appendChild(celda)
            }
        }
    }

}

const form = document.createElement("form")
const name = document.createElement("input")
name.setAttribute('id','nombre')
const nameLabel = document.createElement("label")
const br = document.createElement("br")
const br1 = document.createElement("br") 
const br2 = document.createElement("br") 
const br3 = document.createElement("br")

const hours = document.createElement("input")
hours.setAttribute('type','number')
hours.setAttribute('id','horas')

const hoursLabel = document.createElement("label")

hoursLabel.textContent = "Horas Trabajadas: "

const selectCat = document.createElement("select")
selectCat.setAttribute('id','cat')
const catLabel = document.createElement("label")
const opA = document.createElement("option")
const opB = document.createElement("option")
const opC = document.createElement("option")

const time = document.createElement("input")
time.setAttribute('type','number')
time.setAttribute('id','years')

const timeLabel = document.createElement("label")

const submit = document.createElement("button")

submit.textContent = "Ingresar"

timeLabel.textContent = "Años de servicio: "

opA.textContent = "A"
opB.textContent = "B"
opC.textContent = "C"

catLabel.textContent = "Categoria: "

selectCat.append(opA)
selectCat.append(opB)
selectCat.append(opC)

submit.addEventListener("click", () =>{
    ingresar()
})


// >> Alfredo Gonzales de Categoria A y con 1-3 a;os de servicio recibira:
// Sueldo Basico: S/ 3,400
// Bonificacion por a;os de servicio: S/ 510
// Sueldo Neto: S/ 3,128 (80% del sueldo bruto total)

const ingresar = () => {
    let nombre = document.getElementById('nombre').value
    let categoria = document.getElementById('cat').value
    let horasTrabajadas = Number(document.getElementById('horas').value)
    let years = Number(document.getElementById('years').value)

    let tarifa = 0

    if (categoria === "A") {
        tarifa = 40
    } else if(categoria === "B"){
        tarifa = 35
    } else if(categoria === "C"){
        tarifa = 30
    } else{
        alert("Ingrese una categoria valida")
    }

    let bonificacion = 0 

    if (years >= 1 && years <=3) {
        bonificacion = 0.15
    } else if(years >= 4 && years <=7){
        bonificacion = 0.2
    } else if(years >= 8 && years <=12){
        bonificacion = 0.3
    } else{
        bonificacion = 0.35
    }

    sueldoBase = 3400

    total = horasTrabajadas * tarifa
    bonificacionYear = (sueldoBase*bonificacion)
    
    alert("Su sueldo base es:"+ sueldoBase)
    alert("Horas * Categoria:"+ total)
    alert(" Bonificacion por año S/." + bonificacionYear)

    //alert("El monto total es:"+ total)
    // alert(document.getElementById('nombre').value)
}


nameLabel.textContent = "Nombre: "

form.append(nameLabel)
form.append(name)
form.append(br)

form.append(catLabel)
form.append(selectCat)
form.append(br1)

form.append(hoursLabel)
form.append(hours)
form.append(br3)

form.append(timeLabel)
form.append(time)
form.append(br2)

form.append(submit)



formulario.append(form) 

var clasificaciones = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Anotonio"]

console.log(`Original ${clasificaciones}`)

// Cambiar a celia por raul

clasificaciones = clasificaciones.map(item => {
    if (item === "Raúl") return "Celia"
    if (item === "Celia") return "Raúl"
    
    return item
})

console.log(`1.- ${clasificaciones}`)

// sacar al Anotnio

clasificaciones.pop()
console.log(`2.- ${clasificaciones}`)

// poner a roberto y a amaya

const nuevos = ["Roberto", "Amaya"]

const part1 = clasificaciones.slice(0, 2)
const part2 = clasificaciones.slice(2)

clasificaciones = [].concat(part1, nuevos, part2)
console.log(`3.- ${clasificaciones}`)

// poner a maarta en cabeza

const cabeza = "Marta"
clasificaciones.unshift(cabeza)

// como quedó al final

console.log(`4.- ${clasificaciones}`)
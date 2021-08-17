function calculateMass(argumento){
    return dato = argumento.reduce((acumulador, numero) => acumulador + numero.length, 0)
}
console.log(calculateMass(['dog', 'donkey', 'cat']))
// calculateMass(['dog', 'donkey', 'cat'])
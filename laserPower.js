function calculatePower(numeros){
    nueva = 0
    numeros.forEach(element => {
        nueva += element*2
    });
    return nueva
}

calculatePower([1, 2, 4, 5])
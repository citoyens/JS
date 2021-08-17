function scan(datos){
    contador = 0
    datos.forEach(element => {
        if(element === 'contraband'){
            contador++
        }
    });
    return contador
}


scan(['contraband', 'culo', 'contraband'])
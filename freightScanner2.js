function scan(argumento){
    var sucios = []
    for (i = 0; i < argumento.length; i++){
        if(argumento[i] === 'contraband'){
            sucios.push(i)
        }
    };
    return sucios
}

scan(['contraband', 'culo', 'contraband'])
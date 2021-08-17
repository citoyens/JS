function scanAndFilter(lista, topo){
    var final = []
    let nuevo = lista.filter((filtrar, posicion, lista) =>{
        return posicion === lista.indexOf(filtrar)
    })

    nuevo.forEach(element => {
        if(element != topo){
            final.push(element)
        }
    });
    
    return final
}


scanAndFilter(['apples', 'ray guns', 'oranges', 'tacos', 'ray guns', 'ray guns'], 'ray guns')
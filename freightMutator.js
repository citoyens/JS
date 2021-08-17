function mutate(argumento){
    const nuevo = argumento.map(function(elemento){
        return elemento.toUpperCase()
    })

    return nuevo
}

mutate(['apples', 'ray guns', 'oranges', 'tacos', 'ray guns', 'ray guns'])
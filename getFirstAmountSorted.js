function getFirstAmountSorted(array, number){
    nuevo = []
    if(array.length > 0){
        var ordenados = array.sort()
        ordenados.push('nalga')
        for (i = 0; i < number; i++){
            nuevo.push(ordenados[i])
        }
        return nuevo
    }
}

getFirstAmountSorted(['cheerios', 'apple jacks', 'lucky charms'], 0)
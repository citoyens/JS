let dato = process.argv[2]

if (dato == 0){
    console.log('alive')
}else if(dato == 1){
    console.log('flowering')
}else if(dato == 2){
    console.log('shedding')
}else{
    console.log('other')
}
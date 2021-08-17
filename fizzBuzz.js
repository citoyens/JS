let dato = process.argv[2]
resultado = ''
if (dato %3 == 0 || dato %5 == 0){
    if (dato %3 == 0){
        resultado += 'Java'
    }
    if(dato %5 == 0){
        resultado += 'Script'
    }
    console.log(resultado)
}else{
    console.log(dato)
}
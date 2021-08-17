class Ducktypium{
    constructor(color){
        if(color.toLowerCase() === 'red' || color.toLowerCase() === 'yellow' || color.toLowerCase() === 'blue'){
            this.color = color
            this.calibrationSequence = []
        }
        else{
            throw Error('Asco')
        }

    }

    refract(color){
        if(color.toLowerCase() === 'red' || color.toLowerCase() === 'yellow' || color.toLowerCase() === 'blue'){
            if(color === this.color){
                return color
            }
        }else{
            throw Error('Asco')
        }

        if(color === 'red' && this.color === 'blue' || color === 'blue' && this.color === 'red'){
            return ('purple')
        }else if(color === 'red' && this.color === 'yellow' || color === 'yellow' && this.color === 'red'){
            return ('orange')
        }else if(color === 'yellow' && this.color === 'blue' || color === 'blue' && this.color === 'yellow'){
            return ('green')
        }
    }

    calibrate(numeros){
        this.numeros = numeros
        this.numeros.sort()
        this.calibrationSequence = this.numeros.map(elemento => elemento * 3) 
    }
}
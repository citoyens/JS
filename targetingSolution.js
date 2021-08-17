class TargetingSolution{
    constructor(dato){
        this.x = dato.x,
        this.y = dato.y,
        this.z = dato.z
    }

    target(){
        return ('('+this.x+', '+this.y+', '+this.z+')')
    }
}

var algo = new TargetingSolution({
    x: 12,
    y: 78,
    z: 9
})

console.log(algo.target())

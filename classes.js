class Materializer {
    constructor(targetName) {
        this.target = targetName;
        this.activated = false;
    }

    activate() {
        this.activated = true;
    }

    materialize(){
        if(this.activated === true){
            return this.target;
        }
    }
}

const m = new Materializer('Kenny');
console.log(m.target)
m.activate();

console.log(m.materialize()); 


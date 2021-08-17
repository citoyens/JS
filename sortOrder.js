const firstValue = process.argv[2];
const secondValue = process.argv[3];

if(firstValue.toLowerCase() === secondValue.toLowerCase()){
    console.log(0)
}else if (firstValue > secondValue){
    console.log(1)
}else if(firstValue < secondValue){
    console.log(-1)
}
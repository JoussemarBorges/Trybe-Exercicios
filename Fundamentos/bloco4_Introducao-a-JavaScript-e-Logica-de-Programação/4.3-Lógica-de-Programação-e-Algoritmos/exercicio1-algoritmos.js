// let priNum = 1;
// let num = 10;

// let fatorial = 1;

// for(index = 1; index <=10; index += 1){
//     fatorial = fatorial * index;
// }

// console.log(fatorial);


function fatorial(priNum, num){
    for(index = priNum; index <=num; index += 1){
        fatorial = fatorial * index;
    }
}

console.log(fatorial(1, 10));
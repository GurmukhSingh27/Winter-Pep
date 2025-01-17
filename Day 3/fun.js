function sum(a, b=1, c=2) {
    return a+b+c;
}

console.log(sum(1,null));




// rest parameter

function rest(x,y, ...z) {
    console.log({x,y,z})
}

rest(10,20,'Hello',40,50,60)


function myFun(a,b,...manyMoreArgs) {
    console.log("a",a);
    console.log("b",b);
    console.log("many",manyMoreArgs);
    
}
myFun(10,20,'Hello',40,50,60)



// Spread operator

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);






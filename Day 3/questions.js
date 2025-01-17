// 1 calculate discount
function calculateDiscount(price, discount = 10) {
    return price - (price * (discount / 100));
}

console.log(calculateDiscount(1000));



// 2 merge two arrays
function mergeArrays(array1, array2) {
    return [...array1, ...array2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));



// 3 log arguments using rest parameters
function logArguments(...args) {
    console.log(...args);
}

logArguments(1, 2, 3, 4, 5);



// 4 create personalized messages
function createMessage(defaultMessage, ...names) {
    return names.map(name => `${defaultMessage}, ${name}`);
}

console.log(createMessage("Hello", "XYZ", "ABC", "PQR"));



// 5 sum using spread operator
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
const total = sum(...numbers);
console.log(total);



// 6 create a user profile
function createUserProfile(username, age = 25, country = "Unknown") {
    return { 
        username: username, 
        age: age, 
        country: country
    };
}

console.log(createUserProfile("XYZ", 20, "INDIA"));


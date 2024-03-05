function sum(num1, num2) {
    return num1 + num2;
}

function findLargestNumber (num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return(num1);
    } else if (num2 >= num1 && num2 >= num3) {
        return(num2);
    } else {
        return(num3);
    }
}
var bigOne = findLargestNumber(4, 5, 6);
console.log(bigOne)

function evenOrOdd(num1) {
    if (num1 % 2 === 0) {
        return("even");
    } else {
        return("odd");
    }
}
console.log(evenOrOdd(5));

function stringLength(inputString) {
    if (inputString.length <= 20) {
        return inputString.concat(inputString);
    } else {
        return inputString.slice(0, (inputString.length / 2));
    }
}
var result = stringLength("ratatouilleratatouilleratatouille")
console.log(result)


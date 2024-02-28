let fizz = 0
let buzz = 0
let fizzbuzz = 0
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizzbuzz");
        fizzbuzz ++
    } else if (i % 3 === 0) {
        console.log("Fizz");
        fizz++
    } else if (i % 5 === 0) {
        console.log("Buzz");
        buzz++
    } else {
        console.log(i)
    }
}
console.log(fizzbuzz);
console.log(fizz)
console.log(buzz)
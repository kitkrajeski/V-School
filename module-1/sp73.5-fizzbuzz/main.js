function Counter() {
    this.fizz = 0;
    this.buzz = 0;
    this.fizzbuzz = 0;
}
const total = new Counter();
// let fizz = 0
// let buzz = 0
// let fizzbuzz = 0
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizzbuzz");
        total.fizzbuzz ++
    } else if (i % 3 === 0) {
        console.log("Fizz");
        total.fizz++
    } else if (i % 5 === 0) {
        console.log("Buzz");
        total.buzz++
    } else {
        console.log(i)
    }
}

console.log(total)

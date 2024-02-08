var grades = [5, 6, 7]

var total = 0;
for (i = 0; i < grades.length ; i++) {
    total += grades[i];
}
var avg = total / grades.length;
console.log(avg);
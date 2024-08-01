function squareDigits(num) {
  singleDigits = num.toString().split("");
  let doubledDigits = singleDigits.map((digit) => digit * digit);
  return doubledDigits.join("");
}

console.log(squareDigits(4114));

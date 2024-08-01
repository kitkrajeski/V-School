function dnaStrand(dna) {
  let dnaArray = dna.split("");
  let compArray = dnaArray.map((letter) => {
    if (letter === "A") return "T";
    if (letter === "T") return "A";
    if (letter === "C") return "G";
    if (letter === "G") return "C";
  });
  return compArray.join("");
}

console.log(dnaStrand("AAAA"));
console.log(dnaStrand("ATTGC"));

var classPoints = [5, 6, 7]
var yourPoints = 7
function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    var combinedPoints = [...classPoints, yourPoints]
    var total = 0;
    for (var i = 0 ; i < combinedPoints.length ; i++) {
      total += combinedPoints[i];
    }
    console.log(total);
    var avg = total / combinedPoints.length; console.log(total);
    if (yourPoints > avg) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
betterThanAverage(classPoints, yourPoints)

function findLongestWordLength(str) {
  wordsArray = str.split(" ");
  let longestWordLength = 0;
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWordLength) {
      longestWordLength = wordsArray[i].length;
    }
  }

  console.log(longestWordLength);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
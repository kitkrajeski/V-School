var classPoints = [5, 6, 7]
var yourPoints = 7

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    var combinedPoints = [...classPoints, yourPoints];
    var total = 0;
    for (var i = 0 ; i < combinedPoints.length ; i++) {
      total += combinedPoints[i];
    }
    var avg = total / combinedPoints.length;
    if (yourPoints > avg) {
      console.log("True");
    } else {
      console.log("False");
    }
  }


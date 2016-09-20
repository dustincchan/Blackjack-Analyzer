
function getStatistics(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    var mean = sum / arr.length;
    var median = arr.slice().sort()[arr.length / 2];

    var squaredDifferences = 0;
    for (var j = 0; j < arr.length; j++) {
      squaredDifferences += Math.pow((arr[j] - mean), 2);
    }
    var standardDeviation = Math.round(Math.sqrt(squaredDifferences) / arr.length);

    return {"mean": mean, "median": median, "standardDeviation": standardDeviation};
}

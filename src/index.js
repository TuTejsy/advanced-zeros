module.exports = function getZerosCount(number, base) {
  // your implementation
  var primes = [];
  var sums = [];

  for (var i = base; i > 1; i--) {
    if (base % i == 0) {
     for (var j = i - 1; j > 1; j--) {
       if (i % j == 0) break;
     }  if (j == 1) primes.push(i);
    }  
  }
  
  for (i = 0; i < primes.length; i++) {
    var count = 0;
    var n = base;

    while (n % primes[i] == 0) {
      count++;
      n /= primes[i];
    }
    
    console.log(primes);

    n = Math.floor(number / primes[i]);
    var sum = 0;
    
    do {
      sum += Math.floor(n);
      n /= primes[i];
      
    } while (n >= 1);

    sum = Math.floor(sum / count);

    if (sum != 0) sums.push(sum);
  }

  sums.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  });
  return (sums[0]);
}

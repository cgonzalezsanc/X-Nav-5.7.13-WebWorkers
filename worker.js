self.onmessage = function(event) {
  var n = 1;
  var primelist = "";
  var num_max = event.data;
  search: while (n<num_max) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    primelist += " " + n;
  }
  self.postMessage(primelist);
};

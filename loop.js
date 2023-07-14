const fact = (n) => {
  var acc = 1;
  for (var i = 1; i <= n; i++) {
    acc *= i;
  }
  return acc;
}

console.log("here is a basic loop: " + fact(5));

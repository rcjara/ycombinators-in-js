const result = ((fact, n) => {
    if (n == 0) {
      return 1;
    } else {
      return n * fact(fact, n - 1);
    }
  })((fact, n) => {
    if (n == 0) {
      return 1;
    } else {
      return n * fact(fact, n - 1);
    }
  }
, 5)

console.log("from anonymous recursion: " + result);

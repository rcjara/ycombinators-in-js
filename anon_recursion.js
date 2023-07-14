const result = ((f, n) => {
    if (n == 0) {
      return 1;
    } else {
      return n * f(f, n - 1);
    }
  })((f, n) => {
    if (n == 0) {
      return 1;
    } else {
      return n * f(f, n - 1);
    }
  }
, 6)

console.log("from anonymous recursion: " + result);

const fact = (n) => {
  if (n == 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
console.log("Here is factorial using recursion: " + fact(5));

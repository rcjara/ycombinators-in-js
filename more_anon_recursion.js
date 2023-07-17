const anon = (f, n) => {
  if (n == 0) {
    return 1;
  } else {
    return n * f(f, n - 1);
  }
}

console.log("more anonymous recursion: " + anon(anon, 5));

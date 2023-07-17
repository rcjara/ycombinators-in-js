console.log("and here is the ycombinator in all its glory!: " +
  ((f) => {
  return ((ycom) => {
    return f((x) => { return ycom(ycom)(x) });
  })((ycom) => {
    return f((x) => { return ycom(ycom)(x) });
  });
})((f) => {
  return (n) => {
    if (n <= 1) {
      return 1;
    } else {
      return n * f(n - 1);
    }
  }
})(5));

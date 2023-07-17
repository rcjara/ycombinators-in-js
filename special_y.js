const bind_f = (f) => {
  return ((ycom) => {
    return f((x) => { return ycom(ycom)(x) });
  })((ycom) => {
    return f((x) => { return ycom(ycom)(x) });
  });
}

const fact = (f) => {
  return (n) => {
    if (n <= 1) {
      return 1;
    } else {
      return n * f(n - 1);
    }
  }
}

const add = (f) => {
  return (a) => {
    return (b) => {
      if (a <= 0) {
        return b;
      } else {
        return 1 + f(a - 1)(b)
      }
    }
  }
}


console.log("It works with factorial!");
console.log(bind_f(fact)(4));
console.log("It works with adding!");
console.log(bind_f(add)(6)(4));

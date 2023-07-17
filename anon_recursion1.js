//version 0
(n) => {
  if (n == 0) {
    return 1;
  } else {
    return n * ????(n - 1);
  }
}


//version 1
(fact, n) => {
  if (n == 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

//version 2
(fact, n) => {
  if (n == 0) {
    return 1;
  } else {
    return n * fact(fact, n - 1);
  }
}

//version 3
((fact, n) => {
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
}, 5)

const fact = (n) => {
  var acc = 1;
  for (var i = 1; i <= n; i++) {
    acc *= i;
  }
  return acc;
}
console.log(fact(6));

const fact_rec = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * fact_rec(n - 1);
  }
}
console.log(fact(6));

console.log(( (f) => {
  return (g) => {
    return f + g;
  }
})(5)(4));

const fact_y = (f) => {
  return (n) => {
    if (n <= 1) {
      return 1;
    } else {
      return n * f(n - 1);
    }
  }
}

const add_y = (f) => {
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

const bin_search =
  (array) => {
    return (target) => {
      return (f) => {
        return (low) => {
          return (high) => {
            var i = Math.floor((low + high) / 2)
            if (target == array[i]) {
              return i;
            }
            if (low >= high) {
              return null;
            }
            if (target < array[i]) {
              return f(low)(i);
            } else  {
              return f(i)(high);
            }
          }
        }
      }
    }
  }
}

console.log(((f) => {
  return ((ycom) => {
    return f((x) => { return ycom(ycom)(x) });
  })((ycom) => {
    return f((x) => { return ycom(ycom)(x) });
  });
})(add_y)(6)(4));

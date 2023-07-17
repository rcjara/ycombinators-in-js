const curried = (f) => {
  return (g) => {
    return f + g;
  }
};

console.log("just call the curried function: " + curried(2)(3));

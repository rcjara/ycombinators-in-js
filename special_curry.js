const curried = (f) => {
  return (g) => {
    console.log(f + g);
  }
};

console.log("we can save the partially applied functions to be used later");
const hello = curried("hello, ");
const goodbye = curried("goodbye, ");

/*
console.log("and then use them like so: ");
hello("world!");
hello("rc!");
goodbye("outer space!");
goodbye("subtle isms!");
//*/

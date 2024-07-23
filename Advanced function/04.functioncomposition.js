function double(x) {
    return x * 2;
  }
  
  
  function square(x) {
    return x * x;
  }
  
  
  const compose = (f, g) => x => f(g(x));
  
const doubleThenSquare = compose(square, double);

console.log(doubleThenSquare(3));

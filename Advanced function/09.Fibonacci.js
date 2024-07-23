function getFibonacci() {
    
    let a = 0;
    let b = 1;
  
   
    return function() {
      
      let next = a;
     
      a = b;
      b = next + b;
      
      return next;
    };
  }
  
  
  let fibonacci = getFibonacci();
  
  // Example usage
  console.log(fibonacci()); // Output: 0
  console.log(fibonacci()); // Output: 1
  console.log(fibonacci()); // Output: 1
  console.log(fibonacci()); // Output: 2
  console.log(fibonacci()); // Output: 3
  console.log(fibonacci()); // Output: 5
  console.log(fibonacci()); // Output: 8
  console.log(fibonacci()); // Output: 13
  console.log(fibonacci()); // Output: 21
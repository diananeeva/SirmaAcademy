function createPrivateCounter() {
    
    let count = 0;
    return {
      increment() {
        count += 1;
      },
      getCount() {
        return count;
      }
    };
  }


const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1

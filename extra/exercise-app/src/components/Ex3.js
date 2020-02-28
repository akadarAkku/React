import React, {useState, useEffect} from 'react';

const Ex3 = () => {
  const [count, setCount] = useState(0);

  useEffect((num ) => {
    // Update the document title using the browser API
    if (num % 15 === 0) {
    return "fizzbuzz";
  }
  
  if (num % 3 === 0) {
    return "fizz";
  }
  
  if (num % 5 === 0) {
    return "buzz";
  }  return num;

  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export {Ex3}


import React, { useState } from "react";

const Counter = () => {
  // hooks  useState
  //useState return 2 values the first is the value and the second is the function
  const [count, setCount] = useState(10);
  // value  setter function
  //you cannot set the count =1 like this or mutate it why ? state is immutable
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => {
          //setCount
          setCount((c) => c + 1);
          //   setCount((c) => c + 1);
          // setCount(count + 1);
          // setCount(count + 1);
        }}
      >
        +
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          //setCount
          setCount((c) => c - 1);
          //   setCount((c) => c + 1);
          // setCount(count + 1);
          // setCount(count + 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;

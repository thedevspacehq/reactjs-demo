import { useState } from "react";

function Display({ count }) {
  return <p>Count: {count}</p>;
}

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="border rounded-md p-4 m-4">
      <Display count={count} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Add
      </button>
    </div>
  );
}

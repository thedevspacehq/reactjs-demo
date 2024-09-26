import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="border rounded-md p-4 m-4">
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Add
      </button>
    </div>
  );
}

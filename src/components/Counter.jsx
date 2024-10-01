import { useReducer } from "react";

function countReducer(count, action) {
  if (action.type === "add") {
    return count + action.num;
  } else if (action.type === "subtract") {
    return count - action.num;
  } else if (action.type === "reset") {
    return 0;
  } else {
    throw Error("Unknown action: " + action.type);
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(countReducer, 0);

  function handleAdd() {
    dispatch({
      type: "add",
      num: 2,
    });
  }
  function handleSubtract() {
    dispatch({
      type: "subtract",
      num: 3,
    });
  }
  function handleReset() {
    dispatch({
      type: "reset",
    });
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleAdd}>Add 2</button>
      <button onClick={handleSubtract}>Subtract 3</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

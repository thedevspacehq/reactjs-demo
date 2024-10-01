export default function countReducer(count, action) {
  if (action.type === "add") {
    return count + 1;
  } else if (action.type === "subtract") {
    return count - 1;
  } else if (action.type === "reset") {
    return 0;
  } else {
    throw Error("Unknown action: " + action.type);
  }
}

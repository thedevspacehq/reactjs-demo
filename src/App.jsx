import { useRef } from "react";

export default function App() {
  const divRef = useRef(null);
  console.log(divRef.current.clientHeight);

  return (
    <div ref={divRef}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sunt
      nesciunt natus tempore sed, distinctio corrupti error impedit dolorum ut!
      Quis deleniti rerum dolor tempore odit doloribus unde iste doloremque?
    </div>
  );
}

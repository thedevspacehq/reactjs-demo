// import Profile from "./components/Profile";
// import { UserProvider } from "./contexts/UserContext";

import { useRef } from "react";

// export default function App() {
//   return (
//     <UserProvider>
//       <Profile />
//     </UserProvider>
//   );
// }

export default function App() {
  const inputRef = useRef(null);

  return (
    <>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}>
        Click me to focus the input box
      </button>
    </>
  );
}

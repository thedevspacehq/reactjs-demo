import { createContext, useState } from "react";

export const UserContext = createContext({
  username: "John Doe",
  email: "johndoe@example.com",
  status: "active",
  setUser: () => {}, // Placeholder
});

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    username: "Jane Doe",
    email: "janedoe@example.com",
    status: "active",
  });

  return (
    <UserContext.Provider value={{ ...user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

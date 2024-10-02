import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Section() {
  const { username, email, status, setUser } = useContext(UserContext);

  function handleUserUpdate() {
    status === "active"
      ? setUser({
          username: "Jane Doe - inactive",
          email: email,
          status: "inactive",
        })
      : setUser({
          username: "Jane Doe",
          email: email,
          status: "active",
        });
  }

  return (
    <>
      <p>User Name: {username}</p>
      <p>Email: {email}</p>
      <p>Status: {status}</p>
      <button onClick={handleUserUpdate}>Update User</button>
    </>
  );
}

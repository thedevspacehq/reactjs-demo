import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Hello() {
  const { username } = useContext(UserContext);
  return <p>Welcome, {username}!</p>;
}

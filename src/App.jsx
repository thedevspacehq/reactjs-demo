import Profile from "./components/Profile";
import { UserProvider } from "./contexts/UserContext";

export default function App() {
  return (
    <UserProvider>
      <Profile />
    </UserProvider>
  );
}

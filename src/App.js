import "./App.css";
import User from "./Users";
import { UsersProvider } from "./usersContext";

function App() {
  return (
    <UsersProvider>
      <User />
    </UsersProvider>
  );
}

export default App;

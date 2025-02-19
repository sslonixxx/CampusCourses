import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Hello from "./components/Hello";
import GroupList from "./components/groupList/GroupList";
import GroupFull from "./components/groupFull/GroupFull";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<Profile />} />
      <Route path="/" element={<Hello />} />
      <Route path="/groups" element={<GroupList />} />
      <Route path="/groups/:id" element={<GroupFull />} />
    </Routes>
  );
}

export default App;

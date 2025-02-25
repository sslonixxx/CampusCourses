import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Hello from "./pages/hello/Hello";
import GroupList from "./pages/groups/GroupList";
import GroupFull from "./pages/groupCourses/GroupFull";
import { EmailProvider } from "./shared/contexts/email/EmailProvider";
import { GroupProvider } from "./shared/contexts/groupName/GroupProvider";

function App() {
  return (
    <EmailProvider>
      <GroupProvider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/" element={<Hello />} />
          <Route path="/groups" element={<GroupList />} />
          <Route path="/groups/:id" element={<GroupFull />} />
        </Routes>
      </GroupProvider>
    </EmailProvider>
  );
}

export default App;

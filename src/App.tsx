import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute, Header } from "./components";
import {
  Classroom,
  Course,
  Dashboard,
  Login,
  Student,
  Teacher,
  User,
  Create,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        {/* Authenticate Route  */}
        <Route element={<Header />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/course" element={<Course />} />
          <Route path="/student" element={<Student />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/user" element={<User />} />
        </Route>

        {/* Create Route */}
        <Route path="/create/user" element={<Create />} />
        <Route path="/create/course" element={<Create />} />
        <Route path="/create/student" element={<Create />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

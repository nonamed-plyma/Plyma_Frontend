import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BeforeMainPage from "./pages/Main/LoginBefore/beforeMain";
import AfterHeader from "./components/Header/BeforeHeader/beforeHeader";
import AfterMainPage from "./pages/Main/LoginAfter/afterMain";
import StudentLogin from "./pages/Login/Student/studentLogin";
import DeleteOnList from "./pages/Delete/DeleteOnList/deleteOnList";
import DeleteStudentMy from "./pages/Delete/DeleteOnMyPage/Student/deleteStudentMy";
import DeleteTeacherMy from "./pages/Delete/DeleteOnMyPage/Teacher/deleteTeacherMy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/beforemain" element={<BeforeMainPage />} />
        <Route path="/aftermain" element={<AfterMainPage />} />
        <Route path="/studentLogin" element={<StudentLogin />} />
        <Route path="/deleteList" element={<DeleteOnList />} />
        <Route path="/deleteMyS" element={<DeleteStudentMy />} />
        <Route path="/deleteMyT" element={<DeleteTeacherMy />} />
      </Routes>
    </>
  );
}
export default App;

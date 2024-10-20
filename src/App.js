import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BeforeMainPage from "./pages/Main/LoginBefore/beforeMain";
import AfterMainPage from "./pages/Main/LoginAfter/afterMain";
import TeacherLogin from "./pages/Login/Teacher/teacherLogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/beforemain" element={<BeforeMainPage />} />
        <Route path="/aftermain" element={<AfterMainPage />} />
        <Route path="/teacherLogin" element={<TeacherLogin />} />
      </Routes>
    </>
  );
}

export default App;

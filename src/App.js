import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BeforeMainPage from "./pages/Main/LoginBefore/beforeMain";
import AfterMainPage from "./pages/Main/LoginAfter/afterMain";
import TeacherSignin from "./pages/Signin/Teacher/teacherSignin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/beforemain" element={<BeforeMainPage />} />
        <Route path="/aftermain" element={<AfterMainPage />} />
        <Route path="/teacherSignin" element={<TeacherSignin />} />
      </Routes>
    </>
  );
}

export default App;

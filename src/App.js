import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BeforeMainPage from "./pages/Main/LoginBefore/beforeMain";
import AfterMainPage from "./pages/Main/LoginAfter/afterMain";
import StudentSignin from "./pages/Signin/Student/studentSignin";
import CorrectSignin from "./pages/Signin/Student/CorrectSignin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/beforemain" element={<BeforeMainPage />} />
        <Route path="/aftermain" element={<AfterMainPage />} />
        <Route path="/studentSignin" element={<StudentSignin />} />
        <Route path="/correctSignin" element={<CorrectSignin />} />
      </Routes>
    </>
  );
}

export default App;

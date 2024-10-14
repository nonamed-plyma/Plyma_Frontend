import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BeforeMainPage from "./pages/Main/LoginBefore/beforeMain";
import AfterHeader from "./components/Header/BeforeHeader/beforeHeader";
import AfterMainPage from "./pages/Main/LoginAfter/afterMain";
import StudentLogin from "./pages/Login/Student/studentLogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/beforemain" element={<BeforeMainPage />} />
        <Route path="/aftermain" element={<AfterMainPage />} />
        <Route path="/studentLogin" element={<StudentLogin />} />
      </Routes>
    </>
  );
}

export default App;

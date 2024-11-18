import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BeforeMainPage from "./pages/Main/LoginBefore/beforeMain";
import AfterMainPage from "./pages/Main/LoginAfter/afterMain";
import OnWritet from "./pages/MyPage/Teacher/OnWritet/onWritet";
import OnGoodt from "./pages/MyPage/Teacher/OnGoodt/onGoodt";

function App() {
  return (
    <>
      <Routes>
        <Route path="/beforemain" element={<BeforeMainPage />} />
        <Route path="/aftermain" element={<AfterMainPage />} />
        <Route path="/onWritet" element={<OnWritet />} />
        <Route path="/onGoodt" element={<OnGoodt />} />
      </Routes>
    </>
  );
}
export default App;

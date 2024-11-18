import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BeforeMainPage from "./pages/Main/LoginBefore/beforeMain";
import AfterMainPage from "./pages/Main/LoginAfter/afterMain";
import OnWrites from "./pages/MyPage/Student/OnWrites/onWrites";
import OnGoods from "./pages/MyPage/Student/OnGoods/onGoods";

function App() {
  return (
    <>
      <Routes>
        <Route path="/beforemain" element={<BeforeMainPage />} />
        <Route path="/aftermain" element={<AfterMainPage />} />
        <Route path="/onWrites" element={<OnWrites />} />
        <Route path="/onGoods" element={<OnGoods />} />
      </Routes>
    </>
  );
}

export default App;

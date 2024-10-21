import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BeforeMainPage from "./pages/Main/LoginBefore/beforeMain";
import AfterMainPage from "./pages/Main/LoginAfter/afterMain";
import ListWatch from "./pages/Lists/ListWatch/listWatch";
import ListWrite from "./pages/Lists/ListWrite/listWrite";

function App() {
  return (
    <>
      <Routes>
        <Route path="/beforemain" element={<BeforeMainPage />} />
        <Route path="/aftermain" element={<AfterMainPage />} />
        <Route path="/listWatch" element={<ListWatch />} />
        <Route path="/listWrite" element={<ListWrite />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import IndexPage from "./index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/:pageId" element={<IndexPage />} />
        <Route path="/:pageId?" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

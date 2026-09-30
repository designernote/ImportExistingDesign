import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz1 from "./pages/Quiz1";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/1" element={<Quiz1 />} />
      </Routes>
    </BrowserRouter>
  );
}

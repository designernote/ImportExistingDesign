import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Quiz1 from "./pages/Quiz1";
import Quiz1Correct from "./pages/Quiz1Correct";
import Quiz2 from "./pages/Quiz2";
import Quiz2Correct from "./pages/Quiz2Correct";
import Quiz3 from "./pages/Quiz3";
import Quiz3Correct from "./pages/Quiz3Correct";
import Complete from "./pages/Complete";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/1" element={<Quiz1 />} />
        <Route path="/quiz/1/correct" element={<Quiz1Correct />} />
        <Route path="/quiz/2" element={<Quiz2 />} />
        <Route path="/quiz/2/correct" element={<Quiz2Correct />} />
        <Route path="/quiz/3" element={<Quiz3 />} />
        <Route path="/quiz/3/correct" element={<Quiz3Correct />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  );
}

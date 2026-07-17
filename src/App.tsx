import { useEffect } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  useEffect(() => {
    document.title = 'The Logic Foundry by Dev Philips'
  })

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

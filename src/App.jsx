import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import UserPage from "./Pages/UserPage/UserPage";
import Onboarding from "./Pages/Onboarding/Onboarding";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:id" element={<UserPage />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router";
import Signuppage from "./Pages/Signuppage";
import Signinpage from "./Pages/Signinpage";
import UserLandingPage from "./Pages/UserLandingPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/userslanding" element={<UserLandingPage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/" element={<Signinpage />} />
      </Routes>
    </div>
  );
};

export default App;

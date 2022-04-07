import "./App.css";
import { Routes, Route } from "react-router";
import Signuppage from "./Pages/Signuppage";
import Signinpage from "./Pages/Signinpage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signinpage />} />
        <Route path="/signup" element={<Signuppage />} />
      </Routes>
    </div>
  );
};

export default App;

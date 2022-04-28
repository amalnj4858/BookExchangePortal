import "./App.css";
import { Routes, Route } from "react-router";
import Signuppage from "./Pages/Signuppage";
import Signinpage from "./Pages/Signinpage";
import UserLandingPage from "./Pages/UserLandingPage";
import Lendabookpage from "./Pages/Lendabookpage";
import Bookpoolpage from "./Pages/Bookpoolpage";
import Navbar from "./Components/Navbar";

import Bookrequestpage from "./Pages/Bookrequestpage";
import Requestsrecievedpage from "./Pages/Requestsrecievedpage";
import Bookreturnpage from "./Pages/Bookreturnpage";
import Duespage from "./Pages/Duespage";
import Profilepage from "./Pages/Profilepage";
import Passwordchange from "./Pages/Passwordchange";
import Adminlandingpage from "./Pages/Adminlandingpage";
import Applyforextension from "./Pages/Applyforextension";
import CurrentLendingspage from "./Pages/CurrentLendingspage";
import Userspage from "./Pages/Userspage";
import Transactionspage from "./Pages/Transactionspage";
import Requestspage from "./Pages/Requestspage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/userslanding/paydues" element={<Duespage />} />
        <Route
          path="/userslanding/requestabook"
          element={<Bookrequestpage />}
        />
        <Route
          path="/userslanding/requestsrecieved"
          element={<Requestsrecievedpage />}
        />
        <Route
          path="/userslanding/passwordchange"
          element={<Passwordchange />}
        />
        <Route path="/adminlanding" element={<Adminlandingpage />} />
        <Route path="/userslanding/extension" element={<Applyforextension />} />
        <Route path="/adminlanding/bookpool" element={<Bookpoolpage />} />
        <Route
          path="/adminlanding/transactions"
          element={<Transactionspage />}
        />
        <Route path="/adminlanding/requests" element={<Requestspage />} />
        <Route path="/adminlanding/users" element={<Userspage />} />
        <Route
          path="/userslanding/lendings"
          element={<CurrentLendingspage />}
        />
        <Route path="/userslanding/profile" element={<Profilepage />} />
        <Route path="/userslanding/returnbook" element={<Bookreturnpage />} />
        <Route path="/userslanding/bookpool" element={<Bookpoolpage />} />
        <Route path="/userslanding/lendabook" element={<Lendabookpage />} />
        <Route path="/userslanding" element={<UserLandingPage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/" element={<Signinpage />} />
      </Routes>
    </div>
  );
};

export default App;

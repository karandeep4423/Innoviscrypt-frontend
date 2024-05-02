import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Theapp from "./pages/Theapp";
import SignIn from "./pages/Signin";
import Signup from "./pages/Signup";
import UserAccount from "./pages/UserAccount";
import ResetPassword from "./pages/ResetPassword";
import Affiliation from "./pages/Affiliation";
import License from "./pages/License";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Router>
      <div>
        {/* <ToastContainer autoClose={false} /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/the-app" element={<Theapp />} />
          <Route path="/sign" element={<SignIn />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/affiliation" element={<Affiliation />} />
          <Route path="/user-account" element={<UserAccount />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/license" element={<License />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

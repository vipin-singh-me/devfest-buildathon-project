import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GetStarted from "./pages/GetStarted";
import CreateProfile from "./pages/CreateProfile";
import BuddyList from "./pages/BuddyList";
import HowMatchingWorks from "./pages/HowMatchingWorks";
import CreateTeam from "./pages/CreateTeam";
import JoinTeam from "./pages/JoinTeam";
import AllTeams from "./pages/AllTeams";
import HowItWorks from "./pages/HowItWorks";
import MyProfile from "./pages/MyProfile";

const App = () => {
  return (
    <div className="flex flex-col h-[100%]">

      {/* ✅ NAVBAR */}
      <Navbar />

      {/* ✅ CONTENT */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/buddy-list" element={<BuddyList />} />
          <Route path="/how-it-works" element={<HowMatchingWorks />} />
          <Route path="/create-team" element={<CreateTeam />} />
          <Route path="/jointeam" element={<JoinTeam />} />
          <Route path="/allteams" element={<AllTeams />} />
          <Route path="/how-matching-works" element={<HowItWorks />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </div>

      {/* ✅ FOOTER */}
      <Footer />

    </div>
  );
};

export default App;

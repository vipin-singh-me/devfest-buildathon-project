import React from "react";
import { Link } from "react-router-dom";
import back from "../assets/back.png"

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${back})`,
    }}
  >
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Hackathon Buddy Finder
        </h1>

        <p className="text-white text-base sm:text-lg mb-8">
          Find the perfect teammates based on skills, interests, and experience.
          Build. Collaborate. Win.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link
            to="/getstarted"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </Link>

          {/* ✅ If NOT logged in -> show login */}
          {!token && (
            <Link
              to="/login"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;

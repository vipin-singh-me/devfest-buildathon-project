import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const JoinTeam = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const team = location.state?.team || {};

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      teamName: team.name,
      message,
    });

    alert("Join request sent! (Demo)");
    navigate("/ideas");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Request to Join Team
        </h2>

        <p className="text-gray-600 mb-6">
          Send a message about why you want to join <b>{team.name}</b>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            rows={5}
            placeholder="Tell them why you'd be a great fit..."
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Request
          </button>
        </form>

        <button
          onClick={() => navigate(-1)}
          className="w-full mt-4 border text-gray-800 py-2 rounded-lg hover:bg-gray-50 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default JoinTeam;

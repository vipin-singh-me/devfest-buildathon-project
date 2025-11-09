import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllTeams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [joiningId, setJoiningId] = useState(null);

  const fetchTeams = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/teams");
      const data = await res.json();
      setTeams(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching teams:", error);
      setLoading(false);
    }
  };

  const handleJoinTeam = async (teamId) => {
    try {
      setJoiningId(teamId);

      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first");
        return;
      }

      const res = await fetch(
        `http://localhost:5000/api/teams/join/${teamId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      if (!res.ok) {
        alert(data.msg || "Unable to join team.");
        setJoiningId(null);
        return;
      }

      alert("✅ Joined team successfully!");

      // ✅ Update UI locally
      setTeams((prev) =>
        prev.map((t) =>
          t._id === teamId ? { ...t, joined: true } : t
        )
      );

      setJoiningId(null);
    } catch (err) {
      console.log("Join team error:", err);
      alert("Error joining team");
      setJoiningId(null);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-700 text-lg">
        Loading Teams...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">All Teams</h1>
          <p className="text-gray-600 mt-2">
            Browse teams and join one that matches your interests & skills.
          </p>
        </div>

        {/* Team list */}
        <div className="grid gap-5 md:grid-cols-2">
          {teams.length === 0 && (
            <p className="text-gray-600 text-center col-span-2">
              No teams found. Be the first to create one!
            </p>
          )}

          {teams.map((team) => (
            <div
              key={team._id}
              className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  {team.name}
                </h2>
                <span className="text-sm text-gray-500">
                  {team.membersRange}
                </span>
              </div>

              <p className="text-sm text-gray-600 mt-2">{team.description}</p>

              <div className="mt-3">
                <p className="text-xs text-gray-500 font-medium">
                  Skills Needed:
                </p>

                <div className="flex flex-wrap gap-2 mt-1">
                  {team.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                {/* ✅ DIRECT JOIN BUTTON */}
                <button
                  onClick={() => handleJoinTeam(team._id)}
                  disabled={team.joined || joiningId === team._id}
                  className={`px-4 py-2 text-sm rounded-lg
                    ${
                      team.joined
                        ? "bg-green-600 text-white"
                        : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                    }`}
                >
                  {team.joined
                    ? "✔ Joined"
                    : joiningId === team._id
                    ? "Joining..."
                    : "Join"}
                </button>

                <Link
                  to={`/details/${team._id}`}
                  className="px-4 py-2 text-sm rounded-lg border hover:bg-gray-50"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA footer */}
        <div className="text-center mt-10">
          <Link
            to="/create-team"
            className="px-6 py-3 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            + Create a Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllTeams;

import React from "react";
import { Link } from "react-router-dom";

// temp dummy team data
const teams = [
  {
    id: 1,
    name: "Community Map",
    desc: "Find local events and allow RSVPs — frontend + maps + backend.",
    members: "3–4 devs",
    skills: ["React", "Node", "Maps API"],
  },
  {
    id: 2,
    name: "Digital Appreciation Wall",
    desc: "Build a wall to appreciate contributors publicly with badges.",
    members: "2–3 devs",
    skills: ["React", "Express", "MongoDB"],
  },
  {
    id: 3,
    name: "Hackathon Companion",
    desc: "A tool to manage tasks, chat, and progress in hackathons.",
    members: "3–5 devs",
    skills: ["React", "Firebase", "Tailwind"],
  },
];

const AllTeams = () => {
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
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  {team.name}
                </h2>
                <span className="text-sm text-gray-500">{team.members}</span>
              </div>

              <p className="text-sm text-gray-600 mt-2">{team.desc}</p>

              <div className="mt-3">
                <p className="text-xs text-gray-500 font-medium">Skills Needed:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {team.skills.map((skill, index) => (
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
                <Link
                  to={`/jointeam/${team.id}`}
                  className="px-4 py-2 text-sm rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                >
                  Join
                </Link>
                <Link
                  to={`/details/${team.id}`}
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

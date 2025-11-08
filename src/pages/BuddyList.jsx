import React, { useEffect, useState } from "react";

// Mock data — replace with backend data later
const mockUsers = [
  {
    id: 1,
    name: "Aman Kumar",
    skills: ["React", "Node", "MongoDB"],
    experience: "intermediate",
    intro: "Full-stack dev who loves APIs.",
    avatar: "",
  },
  {
    id: 2,
    name: "Priya Sharma",
    skills: ["Python", "Machine Learning", "Flask"],
    experience: "expert",
    intro: "ML enthusiast focusing on model tuning.",
    avatar: "",
  },
  {
    id: 3,
    name: "Rahul Singh",
    skills: ["C++", "DSA", "Next.js"],
    experience: "beginner",
    intro: "Beginner excited to contribute.",
    avatar: "",
  },
];

const BuddyList = () => {
  const [users, setUsers] = useState([]);
  const [experience, setExperience] = useState("");
  const [skill, setSkill] = useState("");

  useEffect(() => {
    // Replace with backend GET /users
    setUsers(mockUsers);
  }, []);

  const filteredUsers = users.filter((u) => {
    const matchSkill = skill ? u.skills.some((s) => s.toLowerCase().includes(skill.toLowerCase())) : true;
    const matchExp = experience ? u.experience === experience : true;
    return matchSkill && matchExp;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: Description + Filters */}
        <section className="lg:col-span-1 bg-white rounded-2xl shadow p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                2
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Browse & Filter</h2>
              <p className="text-sm text-gray-600 mt-1">
                Filter participants by skills, experience, and interests — discover ideal teammates quickly.
              </p>
            </div>
          </div>

          {/* FILTERS */}
          <div className="mt-6 space-y-4">
            {/* Skill */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Skill</label>
              <input
                placeholder="e.g. React"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">All</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert</option>
              </select>
            </div>
          </div>
        </section>

        {/* RIGHT — LIST RESULTS */}
        <section className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredUsers.length ? (
              filteredUsers.map((u) => <BuddyCard key={u.id} user={u} />)
            ) : (
              <p className="text-gray-600 col-span-full text-center mt-10">No matching buddies found.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

// ✅ Buddy Card Component
const BuddyCard = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-md transition">
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-lg bg-gray-200 overflow-hidden">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
              Img
            </div>
          )}
        </div>

        {/* Name + Experience */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
          <p className="text-sm text-gray-600 capitalize">{user.experience}</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-3 flex flex-wrap gap-2">
        {user.skills.map((s, idx) => (
          <span
            key={idx}
            className="text-xs bg-gray-50 border px-3 py-1 rounded-full text-gray-700"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Intro */}
      <p className="text-sm text-gray-600 mt-3 line-clamp-3">{user.intro}</p>

      {/* Button */}
      <button
        className="w-full mt-4 px-4 py-2 rounded-lg border text-gray-800 hover:bg-gray-50 transition text-sm font-medium"
        onClick={() => alert(`You showed interest in ${user.name}`)}
      >
        I’m Interested
      </button>
    </div>
  );
};

export default BuddyList;

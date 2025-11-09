import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateTeam = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    teamName: "",
    idea: "",
    techStack: "",
    openRoles: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return navigate("/login");
      }

      // Map to backend fields
      const payload = {
        name: form.teamName,
        description: form.idea,
        membersRange: "3-5 devs", // can be optional or dynamic later
        skills: form.techStack.split(",").map((skill) => skill.trim()),
        openRoles: form.openRoles,
      };

      const res = await axios.post(
        "http://localhost:5000/api/teams",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/allteams");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">
            4
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Create Your Team</h2>
            <p className="text-sm text-gray-600 mt-1">
              Form a team, define your idea, choose your tech stack, and specify roles you are looking for.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Team Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Team Name</label>
            <input
              type="text"
              name="teamName"
              value={form.teamName}
              onChange={handleChange}
              placeholder="e.g. Code Warriors"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Idea */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Idea
            </label>
            <textarea
              name="idea"
              value={form.idea}
              onChange={handleChange}
              placeholder="Describe what your team will build…"
              rows="4"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Tech Stack */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Tech Stack
            </label>
            <input
              type="text"
              name="techStack"
              value={form.techStack}
              onChange={handleChange}
              placeholder="e.g. React, Node, MongoDB"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Open roles */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Open Roles
            </label>
            <input
              type="text"
              name="openRoles"
              value={form.openRoles}
              onChange={handleChange}
              placeholder="e.g. Backend dev, Designer, ML engineer"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
            >
              {loading ? "Creating..." : "Create Team"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/buddy-list")}
              className="px-6 py-3 rounded-lg border text-gray-800 hover:bg-gray-50 transition font-medium"
            >
              Find Members
            </button>
          </div>
        </form>

        {/* Info Section */}
        <div className="mt-10 bg-gray-50 border rounded-xl p-5">
          <h3 className="text-lg font-semibold text-gray-800">Why Create a Team?</h3>
          <ul className="text-sm text-gray-600 mt-3 space-y-2">
            <li>• Collaborate with matching skill sets</li>
            <li>• Assign roles based on strengths</li>
            <li>• Define a clear project direction</li>
            <li>• Stay organized while building</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/* ---------------- TAG INPUT ---------------- */
const TagInput = ({ tags, setTags, placeholder = "Add a skill and press Enter" }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const addTag = (raw) => {
    const t = raw.trim();
    if (!t) return;
    if (!tags.includes(t)) setTags([...tags, t]);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(value);
    } else if (e.key === "Backspace" && !value && tags.length) {
      setTags(tags.slice(0, tags.length - 1));
    }
  };

  return (
    <div className="border rounded-lg p-2 bg-white">
      <div className="flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm"
          >
            <span>{t}</span>
            <button
              type="button"
              onClick={() => setTags(tags.filter((x) => x !== t))}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
        ))}

        <input
          ref={inputRef}
          className="flex-1 min-w-[120px] px-2 py-1 outline-none text-sm"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <p className="text-xs text-gray-400 mt-2">Press Enter or comma to add skill.</p>
    </div>
  );
};

/* ---------------- CREATE PROFILE ---------------- */
const CreateProfile = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    experience: "beginner",
    intro: "",
    availability: "available",
    github: "",
    linkedin: "",
  });

  const [skills, setSkills] = useState([]);
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("");

  const navigate = useNavigate();

  /* ✅ Load existing profile */
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5000/api/profile/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const p = res.data;

        setForm({
          name: p.name || "",
          email: p.email || "",
          experience: p.experience || "beginner",
          intro: p.intro || "",
          availability: p.availability || "available",
          github: p.github || "",
          linkedin: p.linkedin || "",
        });

        setSkills(p.skills || []);
        setAvatarUrl(p.avatarUrl || "");
      } catch {
        console.log("No existing profile");
      }
    };

    loadProfile();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAvatar = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setAvatarFile(f);
    const url = URL.createObjectURL(f);
    setAvatarUrl(url);
  };

  /* ✅ Create / Update Profile */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      return;
    }

    const payload = { ...form, skills, avatarUrl };

    try {
      const token = localStorage.getItem("token");

      await axios.post("http://localhost:5000/api/profile/createprofile", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      navigate("/my-profile");
    } catch (err) {
      console.error("❌ Error:", err?.response?.data || err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">Create / Update Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">

          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="px-4 py-2 border rounded-lg"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Avatar */}
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden">
              {avatarUrl ? (
                <img src={avatarUrl} className="w-full h-full object-cover" />
              ) : (
                <div className="flex justify-center items-center h-full text-gray-400">
                  No image
                </div>
              )}
            </div>

            <label className="bg-white border rounded-md px-4 py-2 cursor-pointer">
              Upload
              <input type="file" accept="image/*" onChange={handleAvatar} className="hidden" />
            </label>
          </div>

          {/* GitHub + LinkedIn */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="github"
              value={form.github}
              onChange={handleChange}
              placeholder="Github URL"
              className="px-4 py-2 border rounded-lg"
            />

            <input
              name="linkedin"
              value={form.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn URL"
              className="px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Skills */}
          <TagInput tags={skills} setTags={setSkills} />

          {/* Experience + Availability */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className="px-4 py-2 border rounded-lg"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>

            <select
              name="availability"
              value={form.availability}
              onChange={handleChange}
              className="px-4 py-2 border rounded-lg"
            >
              <option value="available">Available now</option>
              <option value="maybe">Available soon</option>
              <option value="not-available">Not available</option>
            </select>
          </div>

          {/* Intro */}
          <textarea
            name="intro"
            value={form.intro}
            onChange={handleChange}
            placeholder="Short intro…"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-lg">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;

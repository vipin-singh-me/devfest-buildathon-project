import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

/**
 * TagInput - simple tag / skills input component
 * - add tag on Enter or comma
 * - remove with backspace when empty or by clicking 'x'
 */
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
      // remove last
      setTags(tags.slice(0, tags.length - 1));
    }
  };

  return (
    <div className="border rounded-lg p-2 bg-white">
      <div className="flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <div key={i} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm">
            <span className="text-gray-800">{t}</span>
            <button
              type="button"
              onClick={() => setTags(tags.filter((x) => x !== t))}
              className="text-gray-400 hover:text-gray-600"
              aria-label={`remove ${t}`}
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
      <p className="text-xs text-gray-400 mt-2">Press Enter or comma to add skill. Click × to remove.</p>
    </div>
  );
};

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

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleAvatar = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setAvatarFile(f);
    const url = URL.createObjectURL(f);
    setAvatarUrl(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation example
    if (!form.name.trim() || !form.email.trim()) {
      alert("Please provide name and email.");
      return;
    }

    const payload = { ...form, skills, avatarUrl };
    console.log("Profile payload:", payload);
    // TODO: send to backend /api/users or update context
    alert("Profile saved (demo). Check console for payload.");
    navigate("/buddy-list"); // example redirect after save
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: form */}
        <section className="lg:col-span-2 bg-white rounded-2xl shadow p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Create your profile</h2>
          <p className="text-sm text-gray-500 mb-6">
            Add your skills, experience level, short intro and availability. Make it clear what you can do in a team.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Basic info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Avatar + links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center">
                  {avatarUrl ? (
                    <img src={avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-gray-400 text-sm">No image</div>
                  )}
                </div>
                <div>
                  <label className="inline-block px-4 py-2 bg-white border rounded-md text-sm cursor-pointer hover:bg-gray-50">
                    Upload
                    <input type="file" accept="image/*" onChange={handleAvatar} className="hidden" />
                  </label>
                  {avatarFile && <div className="text-xs text-gray-500 mt-1">{avatarFile.name}</div>}
                </div>
              </div>

              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">GitHub</label>
                  <input
                    name="github"
                    value={form.github}
                    onChange={handleChange}
                    placeholder="https://github.com/yourname"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                  <input
                    name="linkedin"
                    value={form.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/you"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
              <TagInput tags={skills} setTags={setSkills} />
            </div>

            {/* Experience + availability */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                <select
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                <select
                  name="availability"
                  value={form.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="available">Available now</option>
                  <option value="maybe">Available soon</option>
                  <option value="not-available">Not available</option>
                </select>
              </div>
            </div>

            {/* Intro */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Short intro</label>
              <textarea
                name="intro"
                value={form.intro}
                onChange={handleChange}
                placeholder="What will you bring to the team? 1–2 lines is fine."
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Save Profile
              </button>

              <button
                type="button"
                onClick={() => {
                  // reset
                  setForm({
                    name: "",
                    email: "",
                    experience: "beginner",
                    intro: "",
                    availability: "available",
                    github: "",
                    linkedin: "",
                  });
                  setSkills([]);
                  setAvatarFile(null);
                  setAvatarUrl("");
                }}
                className="px-5 py-2 rounded-lg border text-gray-700 hover:bg-gray-50 transition"
              >
                Reset
              </button>
            </div>
          </form>
        </section>

        {/* Right: preview card (matches screenshot style) */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow p-5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white font-semibold flex items-center justify-center">
                  1
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">Create your profile</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Add your skills, experience level, short intro and availability. Make it clear what you can do in a team.
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="px-4 py-2 border rounded-md text-sm text-gray-800 hover:bg-gray-50"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>

            {/* live preview */}
            <div className="mt-6 border rounded-lg p-4 bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gray-200 overflow-hidden">
                  {avatarUrl ? (
                    <img src={avatarUrl} alt="avatar-preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">Img</div>
                  )}
                </div>
                <div>
                  <div className="text-sm text-gray-600">Name</div>
                  <div className="font-semibold text-gray-800">{form.name || "Your name"}</div>
                </div>
              </div>

              <div className="mt-3">
                <div className="text-xs text-gray-500">Skills</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.length ? (
                    skills.map((s, i) => (
                      <span key={i} className="text-xs bg-white px-3 py-1 rounded-full border">
                        {s}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-gray-400">No skills yet</span>
                  )}
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>
                  <div className="text-xs text-gray-500">Experience</div>
                  <div className="text-gray-800">{form.experience}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Availability</div>
                  <div className="text-gray-800">{form.availability}</div>
                </div>
              </div>

              <div className="mt-3 text-sm text-gray-700">
                <div className="text-xs text-gray-500">Intro</div>
                <div className="mt-1 text-sm text-gray-800">{form.intro || "Write a short intro about yourself."}</div>
              </div>
            </div>
          </div>

          {/* small tips card */}
          <div className="mt-4 bg-white rounded-xl p-4 shadow">
            <h4 className="font-semibold text-gray-800">Profile Tips</h4>
            <ul className="text-sm text-gray-600 mt-2 space-y-2">
              <li>• Add 3–5 skills you can actively contribute with.</li>
              <li>• Keep your intro short and role-focused.</li>
              <li>• Share your GitHub for easy review.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CreateProfile;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5000/api/profile/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProfile(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err?.response?.data || err);
        navigate("/create-profile");
      }
    };

    loadProfile();
  }, []);

  if (!profile) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            My Profile
          </h2>

          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
            onClick={() => navigate("/create-profile")}
          >
            Edit Profile
          </button>
        </div>

        {/* Avatar + Name */}
        <div className="mt-6 flex items-center gap-4">
          <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-200">
            {profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="h-full flex justify-center items-center text-gray-400">
                No Image
              </div>
            )}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {profile.name}
            </h3>
            <p className="text-gray-600">{profile.email}</p>
          </div>
        </div>

        {/* Details */}
        <div className="mt-6 space-y-4">

          <DetailRow label="Experience" value={profile.experience} />
          <DetailRow label="Availability" value={profile.availability} />
          <DetailRow label="GitHub" value={profile.github} />
          <DetailRow label="LinkedIn" value={profile.linkedin} />
          <DetailRow label="Intro" value={profile.intro} />

          {/* Skills */}
          <div>
            <h4 className="text-sm font-medium text-gray-600">Skills</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {profile.skills?.length ? (
                profile.skills.map((s, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-3 py-1 rounded-full border"
                  >
                    {s}
                  </span>
                ))
              ) : (
                <span className="text-xs text-gray-400">
                  No skills added
                </span>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// small helper to render rows
const DetailRow = ({ label, value }) => (
  <div>
    <h4 className="text-sm font-medium text-gray-600">{label}</h4>
    <p className="text-gray-800 mt-1">{value || "N/A"}</p>
  </div>
);

export default MyProfile;

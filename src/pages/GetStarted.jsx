// src/pages/GetStarted.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

/* ✅ UPDATED StepCard — supports 2 buttons */
const StepCard = ({
  number,
  title,
  desc,
  ctaText,
  ctaTo,
  ctatext,
  ctato,
  accent = "bg-blue-600",
}) => (
  <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-4 hover:shadow-xl transition">
    <div className="flex items-center gap-3">
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold ${accent}`}
      >
        {number}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>

    <p className="text-sm text-gray-600 flex-1">{desc}</p>

    <div className="flex gap-3 mt-2 flex-wrap">
      {ctaTo && (
        <Link
          to={ctaTo}
          className="px-4 py-2 rounded-lg bg-transparent border border-gray-200 text-sm font-medium hover:bg-gray-50"
        >
          {ctaText}
        </Link>
      )}
      {ctato && (
        <Link
          to={ctato}
          className="px-4 py-2 rounded-lg bg-transparent border border-gray-200 text-sm font-medium hover:bg-gray-50"
        >
          {ctatext}
        </Link>
      )}
    </div>
  </div>
);

/* ✅ External resource card */
const Resource = ({ icon, title, desc, linkText, href }) => (
  <div className="bg-white rounded-xl p-4 flex gap-3 items-start shadow-sm hover:shadow-md transition">
    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 text-2xl">
      {icon}
    </div>

    <div className="flex-1">
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-600 font-medium mt-2 inline-block hover:underline"
      >
        {linkText}
      </a>
    </div>
  </div>
);

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* ---------- HEADER ---------- */}
        <header className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 shadow-sm">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              HackBuddy !
            </h1>
            <p className="text-gray-600 mt-2 max-w-xl">
              Looking for a hackathon partner?🤝 Create your profile, connect
              with teammates, and launch your project — all in minutes.
            </p>
          </div>

          <Link
            to="/buddy-list"
            className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
          >
            Browse Buddies
          </Link>
        </header>

        {/* ---------- MAIN GRID ---------- */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StepCard
                number="1"
                title="Create your profile"
                desc="Add your skills, experience level, short intro and availability."
                ctaText="Edit Profile"
                ctaTo="/create-profile"
                accent="bg-indigo-600"
              />
              <StepCard
                number="2"
                title="Browse & Filter"
                desc="Filter participants by skills, experience — find teammates quickly."
                ctaText="Find Buddies"
                ctaTo="/buddy-list"
                accent="bg-emerald-500"
              />
              <StepCard
                number="3"
                title="Express Interest"
                desc="If interest is mutual, you get a match & start chatting."
                ctaText="How Matching Works"
                ctaTo="/how-it-works"
                accent="bg-yellow-500"
              />
              <StepCard
                number="4"
                title="Form your team"
                desc="Create or join a team, assign roles and start building."
                ctaText="Create Team"
                ctaTo="/create-team"
                ctatext="Join Teams"
                ctato="/allteams"
                accent="bg-pink-500"
              />
            </div>

            {/* Quick checklist */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Quick Hackathon Checklist
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>✅ Add 3+ skills & a short intro</li>
                <li>✅ Prepare idea pitch (30s)</li>
                <li>✅ Keep GitHub public</li>
                <li>✅ Record 2-min demo video</li>
              </ul>
            </div>
          </section>

          {/* ---------- RIGHT SIDEBAR ---------- */}
          <aside className="space-y-4">
            <div className="sticky top-6 bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-gray-800">Hackathon Essentials</h4>
              <p className="text-sm text-gray-500">Everything you need here</p>

              <div className="mt-4 space-y-3">
                {/* ✅ WhatsApp */}
                <Resource
                  icon={<FaWhatsapp className="text-green-600" />}
                  title="WhatsApp Group"
                  desc="Join the official support & announcements group."
                  linkText="Join Group"
                  href="https://wa.me/"
                />

                {/* ✅ GitHub */}
                <Resource
                  icon={<FaGithub className="text-gray-900" />}
                  title="GitHub Template"
                  desc="Starter repo to speed development."
                  linkText="Open Repo"
                  href="https://github.com/"
                />

                {/* ✅ LinkedIn */}
                <Resource
                  icon={<FaLinkedin className="text-blue-600" />}
                  title="LinkedIn"
                  desc="Connect & share your achievements."
                  linkText="Open LinkedIn"
                  href="https://linkedin.com"
                />
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default GetStarted;

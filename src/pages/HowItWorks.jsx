import React from "react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          How Matching Works
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Understand how HackBuddy matches you with the best teammates.
        </p>

        {/* Steps */}
        <div className="mt-10 space-y-6">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-indigo-600">
              1) Create Your Profile
            </h3>
            <p className="text-gray-600 mt-2">
              Add details like skills, experience level, interests, and availability.
              Your profile helps others understand how you can contribute.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-emerald-600">
              2) Browse & Filter
            </h3>
            <p className="text-gray-600 mt-2">
              Search by skills, tech stack, experience, or role you are looking for.
              This helps you quickly discover ideal teammates.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-yellow-600">
              3) Express Interest
            </h3>
            <p className="text-gray-600 mt-2">
              If you find someone interesting, click <strong>“I’m Interested”</strong>.
              Your interest is shared with them. If they also show interest, it becomes a match.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-pink-500">
              4) Mutual Match
            </h3>
            <p className="text-gray-600 mt-2">
              Matches are formed only when both participants express interest.
              Once matched, you can chat and start planning.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600">
              5) Form Your Team
            </h3>
            <p className="text-gray-600 mt-2">
              Create or join a team that matches your goals. Assign roles, share ideas, and start building your project!
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/buddy-list"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
          >
            Start Finding Buddies
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          Love from © D3 Unit ❤️
        </footer>
      </div>
    </div>
  );
};

export default HowItWorks;

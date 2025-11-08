import React from "react";
import { Link } from "react-router-dom";

const HowMatchingWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6 sm:p-10">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold">
            3
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Express Interest
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Click “I’m Interested” on profiles. If interest is mutual, you get
              a match and can start chatting.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-8 space-y-6">
          <Step
            num="1"
            title="Browse Profiles"
            desc="See other hackers’ skills, experience, and interests. Filter to discover the teammates who match your idea or tech stack."
          />
          <Step
            num="2"
            title="Click “I’m Interested”"
            desc="If you like someone's profile, click the button. This shows you want to collaborate with them."
          />
          <Step
            num="3"
            title="Mutual Interest"
            desc="If they also click “I’m Interested” on your profile, it becomes a match."
          />
          <Step
            num="4"
            title="You’re Matched!"
            desc="You’ll now appear in each other’s matches list and can start chatting instantly to build your team."
          />

          <div className="bg-gray-50 border rounded-xl p-5">
            <h3 className="text-lg font-semibold text-gray-800">Matching Logic</h3>
            <ul className="text-sm text-gray-600 mt-3 space-y-2">
              <li>• User A clicks “I’m Interested” on User B</li>
              <li>• User B clicks “I’m Interested” on User A</li>
              <li>✅ Match created</li>
              <li>✅ Chat unlocked</li>
              <li>✅ You can now collaborate!</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/buddy-list"
            className="px-6 py-3 rounded-lg bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition"
          >
            Find Buddies
          </Link>

          <Link
            to="/matches"
            className="px-6 py-3 rounded-lg border text-gray-800 hover:bg-gray-50 transition font-medium"
          >
            View Matches
          </Link>
        </div>
      </div>
    </div>
  );
};

const Step = ({ num, title, desc }) => (
  <div className="flex gap-4">
    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
      {num}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  </div>
);

export default HowMatchingWorks;

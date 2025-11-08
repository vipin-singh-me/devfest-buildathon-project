// src/pages/GetStarted.jsx
import React from "react";
import { Link } from "react-router-dom";

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
        {/* Header */}
        <div className="flex items-center gap-3">
            <div
                className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold ${accent}`}
            >
                {number}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 flex-1">{desc}</p>

        {/* Buttons Row */}
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

const Resource = ({ icon, title, desc, linkText, to }) => (
    <div className="bg-white rounded-xl p-4 flex gap-3 items-start shadow-sm hover:shadow-md transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50">
            {icon}
        </div>
        <div className="flex-1">
            <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-800">{title}</h4>
            </div>
            <p className="text-sm text-gray-600 mt-1">{desc}</p>
            {to && (
                <Link to={to} className="text-sm text-blue-600 font-medium mt-2 inline-block hover:underline">
                    {linkText}
                </Link>
            )}
        </div>
    </div>
);

const GetStarted = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-10">
            <div className="max-w-6xl mx-auto">
                {/* header */}
                <header className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 shadow-sm">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                            Get Started — HackBuddy
                        </h1>
                        <p className="text-gray-600 mt-2 max-w-xl">
                            Quick setup to get you hacking fast. Create your profile, find teammates, match, and launch your
                            project — all in a few minutes.
                        </p>
                    </div>

                    <div className="flex gap-3 items-center">
                        <Link
                            to="/buddy-list"
                            className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
                        >
                            Browse Buddies
                        </Link>
                    </div>
                </header>

                {/* main grid */}
                <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Steps / Flow */}
                    <section className="lg:col-span-2 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <StepCard
                                number="1"
                                title="Create your profile"
                                desc="Add your skills, experience level, short intro and availability. Make it clear what you can do in a team."
                                ctaText="Edit Profile"
                                ctaTo="/profile"
                                accent="bg-indigo-600"
                            />
                            <StepCard
                                number="2"
                                title="Browse & Filter"
                                desc="Filter participants by skills, experience, and interests — discover ideal teammates quickly."
                                ctaText="Find Buddies"
                                ctaTo="/buddy-list"
                                accent="bg-emerald-500"
                            />
                            <StepCard
                                number="3"
                                title="Express Interest"
                                desc="Click 'I'm Interested' on profiles. If interest is mutual, you get a match and can start chatting."
                                ctaText="How Matching Works"
                                ctaTo="/how-it-works"
                                accent="bg-yellow-500"
                            />
                            {/* ✅ Updated: TWO BUTTONS */}
                            <StepCard
                                number="4"
                                title="Form your team"
                                desc="Create or join a team, assign roles and start building. Use the chat to coordinate fast."
                                ctaText="Create Team"
                                ctatext="Join Teams"
                                ctaTo="/create-team"
                                ctato="/allteams"
                                accent="bg-pink-500"
                            />
                        </div>

                        {/* Quick checklist */}
                        <div className="bg-white rounded-2xl p-6 shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Hackathon Checklist</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-sm text-green-600">●</span>
                                    <span><strong>Profile:</strong> Add at least 3 skills & a short bio.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-sm text-green-600">●</span>
                                    <span><strong>Pitch:</strong> Prepare a 30s idea summary to share with teammates.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-sm text-green-600">●</span>
                                    <span><strong>Commit:</strong> Keep your GitHub repo public and commit while you build.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-sm text-green-600">●</span>
                                    <span><strong>Video:</strong> Record a 2-minute demo for submission.</span>
                                </li>
                            </ul>
                        </div>

                        {/* sample idea cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-semibold text-gray-800">Community Map</h4>
                                    <span className="text-sm text-gray-500">3–4 devs</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    Find local events and allow RSVPs — frontend + maps + backend.
                                </p>
                                <div className="mt-3 flex gap-2">
                                    <Link
                                        to="/jointeam"
                                        className="text-sm px-3 py-1 rounded-md bg-blue-50 text-blue-600"
                                    >
                                        Join
                                    </Link>
                                    <Link to="/how-it-works" className="text-sm px-3 py-1 rounded-md border">
                                        Details
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-semibold text-gray-800">Sample Idea — Digital Wall</h4>
                                    <span className="text-sm text-gray-500">2–3 devs</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    Build a public appreciation wall with badges and leaderboard.
                                </p>
                                <div className="mt-3 flex gap-2">
                                    <Link
                                        to="/create-team"
                                        className="text-sm px-3 py-1 rounded-md bg-blue-50 text-blue-600"
                                    >
                                        Join
                                    </Link>
                                    <Link to="/how-it-works" className="text-sm px-3 py-1 rounded-md border">
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Right sidebar */}
                    <aside className="space-y-4">
                        <div className="sticky top-6">
                            {/* resources */}
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Buildathon Essentials</h4>
                                        <p className="text-sm text-gray-500">Everything you need in one place</p>
                                    </div>
                                    <div className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">36h</div>
                                </div>

                                <div className="mt-4 space-y-3">
                                    <Resource
                                        icon={<div className="w-6 h-6 bg-blue-500 rounded" />}
                                        title="WhatsApp Group"
                                        desc="Join the live support group for updates and help."
                                        linkText="Join group"
                                        to="/whatsapp"
                                    />

                                    <Resource
                                        icon={<div className="w-6 h-6 bg-green-500 rounded" />}
                                        title="GitHub Template"
                                        desc="Starter repo to speed up dev."
                                        linkText="Open template"
                                        to="/github"
                                    />

                                    <Resource
                                        icon={<div className="w-6 h-6 bg-orange-500 rounded" />}
                                        title="Pro tip"
                                        desc="Commit small & keep README clear."
                                        linkText="Read tips"
                                        to="/tips"
                                    />
                                </div>
                            </div>

                            {/* progress */}
                            <div className="mt-4 bg-white rounded-xl p-4 shadow-sm">
                                <h4 className="font-semibold text-gray-800">Quick Progress</h4>
                                <p className="text-sm text-gray-500 mt-2">Track how ready you are.</p>
                            </div>

                            {/* quick actions */}
                            <div className="mt-4 bg-white rounded-xl p-4 shadow-sm flex flex-col gap-2">
                                <Link to="/signup" className="w-full text-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium">
                                    Create Profile
                                </Link>
                                <Link to="/buddy-list" className="w-full text-center px-4 py-2 rounded-lg border border-gray-200">
                                    Browse Buddies
                                </Link>
                                <Link to="/how-it-works" className="w-full text-center px-4 py-2 rounded-lg text-sm text-gray-600">
                                    How matching works
                                </Link>
                            </div>
                        </div>
                    </aside>
                </main>
            </div>
        </div>
    );
};

export default GetStarted;

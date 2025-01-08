"use client";
import React, { useState } from "react";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"education" | "interests">(
    "education"
  );

  const handleTabClick = (tab: "education" | "interests") => {
    setActiveTab(tab);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row items-center md:items-start p-6 bg-[#0a0a0a] text-white">
      {/* Left Section: Profile Picture */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
        <img
          src="/images/pic.jpg"
          alt="Gael's Picture"
          className="w-40 h-40 md:w-60 md:h-60 rounded-md object-cover shadow-lg"
        />
      </div>

      {/* Right Section: Content */}
      <div className="flex-grow">
        {/* Greeting */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hi, my name is Gael Garcia
        </h1>

        {/* Tabs */}
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "education"
                ? "bg-[#5D97C9] text-white"
                : "bg-[#2D2D2D] text-[#ADB7BE]"
            }`}
            onClick={() => handleTabClick("education")}
          >
            Education
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "interests"
                ? "bg-[#5D97C9] text-white"
                : "bg-[#2D2D2D] text-[#ADB7BE]"
            }`}
            onClick={() => handleTabClick("interests")}
          >
            Outside Interests
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4 rounded bg-[#181818]">
          {activeTab === "education" ? (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Education</h2>
              <p className="text-[#ADB7BE]">
                I am a rising sophomore at the University of Florida, majoring
                in Computer Science through the Herbert Wertheim College of
                Engineering, and minoring in Mathematics. I graduated high
                school in 2023 with a perfect 4.0 GPA and plan to graduate from
                college a year early.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Outside Interests</h2>
              <p className="text-[#ADB7BE]">
                Outside of my studies, I enjoy playing pickleball, exploring new
                cuisines (especially tacos!), and watching soccer. I also love
                staying active and spending time with friends and family.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;

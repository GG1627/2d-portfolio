"use client";
import React, { Fragment, useState } from "react";
import StarIcon from "../assets/star.svg";

const About: React.FC = () => {
  const slidingText = [
    "Go Gators",
    "Go Gators",
    "Go Gators",
    "Go Gators",
    "Go Gators",
    "Go Gators",
    "Go Gators",
  ];

  const [activeTab, setActiveTab] = useState<"education" | "interests">(
    "education"
  );

  const handleTabClick = (tab: "education" | "interests") => {
    setActiveTab(tab);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row p-6 bg-[#0a0a0a] text-white mt-20">
      {/* Left Section: Profile Picture */}
      <div className="flex-grow md:flex-grow-0 md:basis-1/2 flex items-center justify-center">
        <img
          src="/images/pic.jpg"
          alt="Gael's Picture"
          className="w-[90%] h-auto md:w-[80%] md:h-auto rounded-md object-cover shadow-lg"
        />
      </div>

      {/* Right Section: Content */}
      <div className="flex-grow md:basis-1/2 flex flex-col justify-center items-start p-8">
        {/* Greeting */}
        <h1 className="text-8xl font-bold mb-6">
          Hi, my name is
          <span className="text-sky-400"> Gael Garcia</span>
        </h1>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6 ">
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
        <div className="p-6 rounded bg-[#181818] w-full">
          {activeTab === "education" ? (
            <div>
              <p className="text-[#ADB7BE] text-2xl">
                I am currently a sophomore at the University of Florida,
                majoring in Computer Science through the Herbert Wertheim
                College of Engineering, and minoring in Mathematics. I am
                passionate about solving complex problems through technology and
                finding innovative solutions that make a meaningful impact. I
                love coding and exploring new technologies, as well as tinkering
                with hardware.
              </p>

              <div className="py-6">
                <div className="bg-gradient-to-r from-blue-700 to-orange-500 overflow-x-clip">
                  <div
                    className="flex"
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                      maskImage:
                        "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    }}
                  >
                    <div className="flex-none gap-4 py-4 animate-move-left">
                      {[...new Array(2)].fill(0).map((_, idx) => (
                        <Fragment key={idx}>
                          {slidingText.map((text, index) => (
                            <div
                              key={index}
                              className="inline-flex gap-4 items-center justify-center"
                            >
                              <span
                                key={index}
                                className="text-white font-semibold text-4xl"
                              >
                                {text}
                              </span>
                              <StarIcon className="size-6 text-white" />
                            </div>
                          ))}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-[#ADB7BE] text-xl">
                Outside of my studies, I enjoy playing pickleball, eating tacos,
                and watching soccer. Music is a big part of my life, and I love
                discovering new songs and artists that match my mood. Spending
                quality time with friends and family is also something I deeply
                value, whether it's sharing a meal, watching a game, or just
                catching up on life.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;

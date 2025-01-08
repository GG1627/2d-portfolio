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

  const hobbies = [
    {
      title: "Pickleball",
      emoji: "🏓",
    },
    {
      title: "Tacos",
      emoji: "🌮",
    },
    {
      title: "Soccer",
      emoji: "⚽",
    },
    {
      title: "Music",
      emoji: "🎵",
    },
    {
      title: "Cars",
      emoji: "🏎️",
    },
  ];

  const [activeTab, setActiveTab] = useState<"education" | "interests">(
    "education"
  );

  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [positions, setPositions] = useState<{
    [key: string]: { x: number; y: number };
  }>({});

  const handleTabClick = (tab: "education" | "interests") => {
    setActiveTab(tab);
  };

  const handleDragStart = (item: string) => {
    setDraggedItem(item);
  };

  const handleDragEnd = (e: React.DragEvent, item: string) => {
    const newPositions = { ...positions };
    newPositions[item] = { x: e.clientX, y: e.clientY };
    setPositions(newPositions);
    setDraggedItem(null);
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
          <span className="text-[#5D97C9]"> Gael Garcia</span>
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
                I am currently a sophomore at the{" "}
                <span className="text-blue-600 font-semibold">
                  University of Florida
                </span>
                , majoring in Computer Engineering through the Herbert Wertheim
                College of Engineering, and minoring in Mathematics. I love
                coding and exploring new technologies, as well as tinkering with
                hardware. I am passionate about solving complex problems through
                technology and finding innovative solutions that make a
                meaningful impact.
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
                    <div className="flex-none py-4 animate-move-left">
                      {[...new Array(2)].fill(0).map((_, idx) => (
                        <Fragment key={idx}>
                          {slidingText.map((text, index) => (
                            <div
                              key={index}
                              className="inline-flex items-center justify-center"
                            >
                              <span
                                key={index}
                                className="text-white font-semibold text-4xl leading-tight"
                              >
                                {text}
                              </span>
                              <StarIcon className="size-6 text-white ml-4 mr-4" />
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
                watching soccer and cruising around in my Mustang. Music is a
                big part of my life, and I love discovering new songs and
                artists that match my mood. Spending quality time with friends
                and family is also something I deeply value, whether it's
                sharing a meal, watching a game, or just catching up on life.
              </p>
              {/* Hobby container */}
              <div className="flex gap-6 mb-6">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="w-32 h-32 flex items-center justify-center bg-blue-500 rounded-full text-white cursor-pointer"
                    draggable
                    onDragStart={() => handleDragStart(hobby.title)}
                    onDragEnd={(e) => handleDragEnd(e, hobby.title)}
                    style={{
                      transform:
                        draggedItem === hobby.title
                          ? `translate(${positions[hobby.title]?.x || 0}px, ${
                              positions[hobby.title]?.y || 0
                            }px)`
                          : "none",
                      transition: "transform 0.1s ease-out",
                    }}
                  >
                    <span className="text-4xl">{hobby.emoji}</span>
                    <span className="ml-2 text-sm">{hobby.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;

"use client";
import React from "react";
import AudioVisual from "./AudioVisualizer";

const Showcase = () => {
  const songs = [
    { title: "Brent X Cole", src: "../songs/Brent X Cole.wav" },
  ];

  return (
    <div className="showcase md:min-w-[575px]">
      <AudioVisual songs={songs} />
    </div>
  );
};

export default Showcase;

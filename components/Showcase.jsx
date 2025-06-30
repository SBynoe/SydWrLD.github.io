"use client";
import React from "react";
import AudioVisual from "./AudioVisualizer";

const Showcase = () => {
  const songs = [
    { title: "Brent X Cole", src: "../songs/Brent X Cole.wav" },
  ];

  return (
    <div className="w-full max-w-3xl min-w-0">
      <AudioVisual songs={songs} />
    </div>
  );
};

export default Showcase;

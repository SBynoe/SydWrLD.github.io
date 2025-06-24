"use client";
import React from "react";
import AudioVisual from "./AudioVisualizer";

const Showcase = () => {
  const songs = [
    { title: "Brent X Cole", src: "../songs/Brent X Cole.wav" },
  ];

  return (
    <div className="showcase">
      <AudioVisual songs={songs} />
    </div>
  );
};

export default Showcase;

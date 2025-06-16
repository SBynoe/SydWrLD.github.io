"use client";
import React, { useState, useCallback } from "react";
import AudioVisual from "./AudioVisualizer";

const Showcase = () => {
  const songs = [
    { title: "Shawty X Dodo Steve", src: "../songs/Brent X Cole.wav" },
  ];

  return (
    <div className="showcase">
      <AudioVisual songs={songs} />
    </div>
  );
};

export default Showcase;

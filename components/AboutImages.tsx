"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function App() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-[500px] h-[400px]">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="h-full w-full"
        >
          <SwiperSlide className="flex justify-center items-center">
            <div className="">
              <img
                src="/images/grad_pic.jpg"
                className="h-full object-cover block mb-[700px]"
                alt="Grad Pic"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img
              src="/images/Earthtones_Spring_2024.jpg"
              className="h-full object-cover"
              alt="Earthtones"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <div>
              <img
                src="/images/close_up_bass_shot.jpg"
                className="h-full object-cover"
                alt="Bass Shot"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

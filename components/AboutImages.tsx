"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function App() {
  return (
    <div className="flex justify-center items-center w-full px-4">
      <div className="w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="w-full"
        >
          <SwiperSlide className="flex justify-center items-center">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/grad_pic.jpg"
                alt="Grad Pic"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center items-center">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/Earthtones_Spring_2024.jpg"
                alt="Earthtones"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center items-center">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/close_up_bass_shot.jpg"
                alt="Bass Shot"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

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
              <Image
                width={500}
                height={400}
                src="./images/grad_pic.jpg"
                className="h-full object-cover block mb-[700px] rounded-lg"
                alt="Grad Pic"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image
              width={500}
              height={400}
              src="./images/Earthtones_Spring_2024.jpg"
              className="h-full object-cover rounded-lg"
              alt="Earthtones"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <div>
              <Image
                width={500}
                height={400}
                src="./images/close_up_bass_shot.jpg"
                className="h-full object-cover rounded-lg"
                alt="Bass Shot"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

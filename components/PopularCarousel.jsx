"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Bike from "./Bike";
import SkeletonCard from "./SkeletonCard";

const PopularCarousel = ({ bikes, loading }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
      }}
      className="popular-bike-slider mb-8"
    >
      {bikes.map((bike) => {
        return (
          <SwiperSlide key={bike._id}>
            <Bike bike={bike} />
          </SwiperSlide>
        );
      })}

      {loading &&
        Array(4)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <SkeletonCard />
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default PopularCarousel;

"use client";
import React, { FC, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import ArrowButton from "./arrowButton";

interface SliderProps {
  children: React.ReactNode;
  items: number;
}

const Slider: FC<SliderProps> = ({ children, items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      slides: {
        spacing: 15,
      },
      initial: 0,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3500);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  const slideLeft = () => {
    instanceRef.current?.prev();
  };
  const slideRight = () => {
    instanceRef.current?.next();
  };

  return (
    <div ref={sliderRef} className="keen-slider relative rounded-2xl">
      {children}
      {/* slider dots */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1">
        {Array.from({ length: items }, (_, index) => (
          <div
            key={index}
            className={`h-1 w-1  rounded-full xl:h-2 xl:w-2 ${
              index === currentSlide ? "bg-black" : "bg-black/30"
            }`}
          />
        ))}
      </div>

      <ArrowButton
        onClick={slideLeft}
        buttonStyle="hidden xl:flex left-3 z-10 absolute top-1/2 -translate-y-1/2"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </ArrowButton>

      <ArrowButton
        onClick={slideRight}
        buttonStyle="hidden xl:flex z-10 right-3 absolute top-1/2 -translate-y-1/2"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </ArrowButton>
    </div>
  );
};

export default Slider;

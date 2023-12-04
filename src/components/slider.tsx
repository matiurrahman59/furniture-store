"use client";

import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Slider({
  children,
  items,
}: {
  children: React.ReactNode;
  items: number;
}) {
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

  return (
    <div ref={sliderRef} className="keen-slider relative">
      {children}
      {/* slider dots */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1">
        {Array.from({ length: items }, (_, index) => (
          <div
            key={index}
            className={`h-1 w-1 rounded-full xl:h-2 xl:w-2 ${
              index === currentSlide ? "bg-black" : "bg-black/30"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-10 hidden items-center justify-between xl:flex">
        {/* slider left arrow*/}
        <button
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
          className="ml-2.5 rounded-lg bg-black/20 p-2 transition-colors hover:bg-black/40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* slider right arrow*/}
        <button
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
          className="mr-2.5 rounded-lg bg-black/20 p-2 transition-colors hover:bg-black/40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

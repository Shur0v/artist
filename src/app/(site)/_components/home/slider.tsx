"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Slider() {
  const imageSliderRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const imageSlider = imageSliderRef.current;
    if (!imageSlider) return;

    const imageContainers = imageSlider.querySelectorAll(
      ".slide-container"
    ) as NodeListOf<HTMLElement>;
    if (!imageContainers || imageContainers.length === 0) return;

    // Initially hide all slides except the first one
    gsap.set(imageContainers, { autoAlpha: 0 });
    gsap.set(imageContainers[0], { autoAlpha: 1 });

    // Kill existing timeline if any
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Create main timeline
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
    });

    timelineRef.current = tl;

    // Build the timeline
    imageContainers.forEach((_, index) => {
      const currentImageContainer = imageContainers[index];
      const nextImageContainer =
        imageContainers[(index + 1) % imageContainers.length];

      // Create a nested timeline for each transition
      const transitionTl = gsap
        .timeline()
        // Fade out current slide
        .to(currentImageContainer, {
          autoAlpha: 0,
          duration: 1,
          ease: "power2.inOut",
        })
        // Fade in next slide
        .fromTo(
          nextImageContainer,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          "-=1" // Overlap the animations
        );

      // Add the transition timeline to the main timeline
      tl.add(transitionTl).to({}, { duration: 4 }); // Pause between transitions
    });

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <div className="main mx-4 lg:mx-0 mt-6">
      <div className="container">
        <div className="content">
          <div className="flex flex-col justify-center items-center gap-6">
            {/* Image Slider */}
            <div
              ref={imageSliderRef}
              className="relative h-[400px] md:h-[650px] md:w-[62%] w-full rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="slide-container absolute inset-0">
                <Image
                  src="/art/art5.jpg"
                  alt="Art 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="slide-container absolute inset-0">
                <Image
                  src="/art/art2.jpg"
                  alt="Art 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="slide-container absolute inset-0">
                <Image
                  src="/images/slidersecond.jpg"
                  alt="Art 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="slide-container absolute inset-0">
                <Image
                  src="/art/art4.jpg"
                  alt="Art 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="slide-container absolute inset-0">
                <Image
                  src="/art/art5.jpg"
                  alt="Art 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="slide-container absolute inset-0">
                <Image
                  src="/art/art2.jpg"
                  alt="Art 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="slide-container absolute inset-0">
                <Image
                  src="/images/slidersecond.jpg"
                  alt="Art 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="slide-container absolute inset-0">
                <Image
                  src="/art/art4.jpg"
                  alt="Art 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="slide-container absolute inset-0">
                <Image
                  src="/art/art5.jpg"
                  alt="Art 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="slide-container absolute inset-0">
                <Image
                  src="/art/art2.jpg"
                  alt="Art 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="slide-container absolute inset-0">
                <Image
                  src="/images/slidersecond.jpg"
                  alt="Art 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="slide-container absolute inset-0">
                <Image
                  src="/art/art4.jpg"
                  alt="Art 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

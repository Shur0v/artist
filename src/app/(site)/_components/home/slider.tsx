"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const containers = sliderRef.current?.querySelectorAll('.slide-container') as NodeListOf<HTMLElement>;
    if (!containers || containers.length === 0) return;

    // Initially set all slides to invisible except the first one
    gsap.set(containers, { autoAlpha: 0 });
    gsap.set(containers[0], { autoAlpha: 1 });

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
    containers.forEach((_, index) => {
      const currentContainer = containers[index];
      const nextContainer = containers[(index + 1) % containers.length];

      // Create a nested timeline for each transition
      const transitionTl = gsap.timeline()
        .to(currentContainer, {
          autoAlpha: 0,
          duration: 1.5,
          ease: "power2.inOut",
        })
        .fromTo(nextContainer,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 1.5,
            ease: "power2.inOut",
          },
          "-=1.5" // Overlap the animations
        );

      // Add the transition timeline to the main timeline
      tl.add(transitionTl)
        .to({}, { duration: 3 }); // Pause between transitions
    });

    // Special handling for seamless loop
    tl.eventCallback("onRepeat", () => {
      // Pre-position the first slide just before the loop
      gsap.set(containers[0], { autoAlpha: 0 });
    });

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <div className="main py-20 mx-4 lg:mx-0 my-[200px]">
      <div className="container">
        <div className="content">
          <div className="flex justify-center items-center">
            <div ref={sliderRef} className="relative h-[400px] md:h-[650px] md:w-[62%] w-full rounded-xl overflow-hidden shadow-2xl">
              <div className="slide-container absolute inset-0">
                <Image src="/art/art2.jpg" alt="Art 1" fill className="object-cover" priority />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h1 className="text-3xl font-bold text-white mb-2">Villages and Passages</h1>
                  <p className="text-white/90">Acrylic on canvas, 36&quot; x 48&quot;. Available.</p>
                </div>
              </div>

              <div className="slide-container absolute inset-0">
                <Image src="/art/art3.jpg" alt="Art 2" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h1 className="text-3xl font-bold text-white mb-2">L&apos;Aiisha, Life in our Names</h1>
                  <p className="text-white/90">Acrylic on paper, 20 1/8&quot; x 22 6/8&quot;. Prints available.</p>
                </div>
              </div>

              <div className="slide-container absolute inset-0">
                <Image src="/art/art4.jpg" alt="Art 3" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h1 className="text-3xl font-bold text-white mb-2">An Alhambra Afterglow</h1>
                  <p className="text-white/90">Acrylic on canvas, 36&quot; x 48&quot;. Available.</p>
                </div>
              </div>

              <div className="slide-container absolute inset-0">
                <Image src="/art/art5.jpg" alt="Art 4" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h1 className="text-3xl font-bold text-white mb-2">Cauldron Delights II</h1>
                  <p className="text-white/90">Acrylic on paper, 17&quot; x 11&quot;. Prints available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





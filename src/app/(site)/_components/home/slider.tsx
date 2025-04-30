"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Slider() {
  const imageSliderRef = useRef<HTMLDivElement>(null);
  const textSliderRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const imageSlider = imageSliderRef.current;
    const textSlider = textSliderRef.current;
    
    if (!imageSlider || !textSlider) return;

    const imageContainers = imageSlider.querySelectorAll('.slide-container') as NodeListOf<HTMLElement>;
    const textContainers = textSlider.querySelectorAll('.slide-container') as NodeListOf<HTMLElement>;
    
    if (!imageContainers || !textContainers || imageContainers.length === 0) return;

    // Initially hide all slides
    gsap.set(imageContainers, { autoAlpha: 0 });
    gsap.set(textContainers, { autoAlpha: 0 });

    // Show first slide
    gsap.set([imageContainers[0], textContainers[0]], { autoAlpha: 1 });

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
      const nextImageContainer = imageContainers[(index + 1) % imageContainers.length];
      const currentTextContainer = textContainers[index];
      const nextTextContainer = textContainers[(index + 1) % textContainers.length];

      // Create a nested timeline for each transition
      const transitionTl = gsap.timeline()
        // Fade out current slides
        .to([currentImageContainer, currentTextContainer], {
          autoAlpha: 0,
          duration: 1,
          ease: "power2.inOut",
        })
        // Fade in next slides
        .fromTo([nextImageContainer, nextTextContainer],
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          "-=1" // Overlap the animations
        );

      // Add the transition timeline to the main timeline
      tl.add(transitionTl)
        .to({}, { duration: 4 }); // Pause between transitions
    });

    // Special handling for seamless loop
    tl.eventCallback("onRepeat", () => {
      gsap.set([imageContainers[0], textContainers[0]], { autoAlpha: 0 });
    });

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <div className="main pb-20 mx-4 lg:mx-0 my-[200px] mt-6">
      <div className="container">
        <div className="content">
          <div className="flex flex-col justify-center items-center gap-6">
            {/* Image Slider */}
            <div ref={imageSliderRef} className="relative h-[400px] md:h-[650px] md:w-[62%] w-full rounded-xl overflow-hidden shadow-2xl">
              <div className="slide-container absolute inset-0">
                <Image src="/art/art2.jpg" alt="Art 1" fill className="object-cover" priority />
              </div>

              <div className="slide-container absolute inset-0 opacity-0">
                <Image src="/art/art3.jpg" alt="Art 2" fill className="object-cover" />
              </div>

              <div className="slide-container absolute inset-0 opacity-0">
                <Image src="/art/art4.jpg" alt="Art 3" fill className="object-cover" />
              </div>

              <div className="slide-container absolute inset-0 opacity-0">
                <Image src="/art/art5.jpg" alt="Art 4" fill className="object-cover" />
              </div>
            </div>

            {/* Text Slider */}
            <div ref={textSliderRef} className="md:w-[62%] w-full relative h-[80px]">
              <div className="slide-container absolute w-full">
                <h1 className="text-3xl font-bold text-black mb-2">Villages and Passages</h1>
                <p className="text-black/80">Acrylic on canvas, 36&quot; x 48&quot;. Available.</p>
              </div>

              <div className="slide-container absolute w-full opacity-0">
                <h1 className="text-3xl font-bold text-black mb-2">L&apos;Aiisha, Life in our Names</h1>
                <p className="text-black/80">Acrylic on paper, 20 1/8&quot; x 22 6/8&quot;. Prints available.</p>
              </div>

              <div className="slide-container absolute w-full opacity-0">
                <h1 className="text-3xl font-bold text-black mb-2">An Alhambra Afterglow</h1>
                <p className="text-black/80">Acrylic on canvas, 36&quot; x 48&quot;. Available.</p>
              </div>

              <div className="slide-container absolute w-full opacity-0">
                <h1 className="text-3xl font-bold text-black mb-2">Cauldron Delights II</h1>
                <p className="text-black/80">Acrylic on paper, 17&quot; x 11&quot;. Prints available.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





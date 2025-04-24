"use client"
import React, { useEffect, useRef } from 'react'
import Image from "next/image"
import "./art.css"
import gsap from 'gsap'

export default function Artbottom() {
  const smallGradientRef = useRef<HTMLDivElement>(null);
  const largeGradientRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const smallGradient = smallGradientRef.current;
    const largeGradient = largeGradientRef.current;
    const container = containerRef.current;
    
    if (!smallGradient || !largeGradient || !container) return;

    // Get container dimensions
    const bounds = container.getBoundingClientRect();
    const maxX = bounds.width - 200;
    const maxY = bounds.height - 200;

    // Function to get random position within bounds
    const getRandomPosition = () => ({
      x: gsap.utils.random(-maxX/2, maxX/2),
      y: gsap.utils.random(-maxY/2, maxY/2),
      rotation: gsap.utils.random(-180, 180)
    });

    // Function to create next animation
    const animateGradient = (target: HTMLElement, duration: number) => {
      const pos = getRandomPosition();
      
      gsap.to(target, {
        x: pos.x,
        y: pos.y,
        rotation: pos.rotation,
        duration: duration,
        ease: "power1.inOut",
        onComplete: () => animateGradient(target, gsap.utils.random(5, 10))
      });
    };

    // Initial setup
    gsap.set([smallGradient, largeGradient], {
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: 0
    });

    // Start endless animations
    animateGradient(smallGradient, 8);
    animateGradient(largeGradient, 10);

    // Cleanup
    return () => {
      gsap.killTweensOf([smallGradient, largeGradient]);
    };
  }, []);

  return (
    <div className="main py-20 mx-4 lg:mx-0">
      <div className="container">
        <div className="content">
          {/* title */}
          <div className="flex flex-col justify-start items-start gap-6">
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="flex justify-start items-center gap-2">
                <div className="text-[#4a4c56] text-base font-normal leading-tight">
                  Art Gallery
                </div>
                <div className="w-[63px] h-0 outline-[1.50px] outline-offset-[-0.75px] outline-[#ff6b00]"></div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2.5">
              <div className="max-w-[830px] justify-start">
                <span className="text-[#1d1f2c] text-[40px] font-bold leading-[48px] tracking-tight">
                  Dive Into Our Collection of{" "}
                </span>
                <span className="text-[#ff6b00] text-[40px] font-bold leading-[48px] tracking-tight">
                  Engaging Art.
                </span>
              </div>
            </div>
          </div>

          {/* gallery */}
          <div className="gallery">
            <div className="grid-gallery">
              {/* Gallery hallway - tall left */}
              <div className="gallery-item item-1">
                <Image
                  src="/art/var3.jpg"
                  alt="Art gallery hallway with paintings"
                  width={274}
                  height={406}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Boat painting */}
              <div className="gallery-item item-2">
                <Image
                  src="/art/art12.jpg"
                  alt="Painting of a boat on water at sunset"
                  width={274}
                  height={214}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Person viewing art */}
              <div className="gallery-item item-3">
                <Image
                  src="/art/art21.jpg" 
                  alt="Person viewing art in gallery"
                  width={274}
                  height={214}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Framed artwork - tall right */}
              <div className="gallery-item item-4">
                <Image
                  src="/art/var1.jpg"
                  alt="Framed artwork displayed on walls"
                  width={274}
                  height={406}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Black swan */}
              <div className="gallery-item item-5">
                <Image
                  src="/art/art15.jpg"
                  alt="Black swan illustration"
                  width={274}
                  height={214}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Artist feature - large center */}
              <div className="gallery-item item-6" ref={containerRef}>
                <div className="gradient small-gradient" ref={smallGradientRef}></div>
                <div className="gradient large-gradient" ref={largeGradientRef}></div>
                <div className="text-container justify-start">
                  <h2 className='font-playwrite'>Rajaa <br /> Gharbi </h2>
                </div>
              </div>

              {/* Person examining painting */}
              <div className="gallery-item item-7">
                <Image
                  src="/art/art31.jpg"
                  alt="Person examining a painting"
                  width={538}
                  height={214}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Artist hand */}
              <div className="gallery-item item-8">
                <Image
                  src="/art/art11.jpg"
                  alt="Artist hand with paintbrush"
                  width={274}
                  height={214}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gallery scene - tall right */}
              <div className="gallery-item item-9">
                <Image
                  src="/art/var2.jpg"
                  alt="Gallery scene with person viewing art"
                  width={274}
                  height={406}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



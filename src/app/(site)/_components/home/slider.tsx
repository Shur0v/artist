"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const images = sliderRef.current?.querySelectorAll('.slide-image') as NodeListOf<HTMLElement>;
    if (!images || images.length === 0) return;

    // Hide all images except the first one
    gsap.set(images, { opacity: 0 });
    gsap.set(images[0], { opacity: 1 });

    // Create timeline
    timelineRef.current = gsap.timeline({ repeat: -1 });

    // Add animations for each image
    images.forEach((image: HTMLElement, index: number) => {
      const nextIndex = (index + 1) % images.length;
      
      // Smooth cross-fade transition
      timelineRef.current?.to(image, {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut"
      })
      .fromTo(images[nextIndex], 
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 2,
          ease: "power2.inOut"
        },
        "-=2"
      )
      .to({}, { duration: 4 }); // 4 second pause between transitions
    });

    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  return (
    <div className="main py-20 mx-4 lg:mx-0 my-[200px]">
      <div className="container">
        <div className="content">
          <div className="flex justify-center items-center">


              <div ref={sliderRef} className="images relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image src="/art/art2.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art1.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art3.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art4.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art5.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art6.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art7.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art8.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art9.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art10.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art11.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art12.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />    
                <Image src="/art/art13.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art14.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art15.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art16.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art17.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art18.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art19.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art20.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art21.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art22.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art23.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art24.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art25.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art26.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art27.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art28.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art29.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art30.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />    
                <Image src="/art/art31.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art32.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art33.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art34.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art35.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
                <Image src="/art/art36.jpg" alt="slider" width={1000} height={1000} className="slide-image absolute top-0 left-0 w-full h-full object-cover" />
              </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

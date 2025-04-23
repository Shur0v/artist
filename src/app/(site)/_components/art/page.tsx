import React from 'react'
import Image from "next/image"
import "./art.css"

export default function Artbottom() {
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
                  src="/gallery/gal1.png"
                  alt="Art gallery hallway with paintings"
                  width={274}
                  height={406}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Boat painting */}
              <div className="gallery-item item-2">
                <Image
                  src="/gallery/gal2.png"
                  alt="Painting of a boat on water at sunset"
                  width={274}
                  height={214}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Person viewing art */}
              <div className="gallery-item item-3">
                <Image
                  src="/gallery/gal3.png"
                  alt="Person viewing art in gallery"
                  width={274}
                  height={214}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Framed artwork - tall right */}
              <div className="gallery-item item-4">
                <Image
                  src="/gallery/gal4.png"
                  alt="Framed artwork displayed on walls"
                  width={274}
                  height={406}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Black swan */}
              <div className="gallery-item item-5">
                <Image
                  src="/gallery/gal8.png"
                  alt="Black swan illustration"
                  width={274}
                  height={214}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Artist feature - large center */}
              <div className="gallery-item item-6">
                <div className="text-container justify-start">
                  <h2 className='font-playwrite'>Rajaa <br /> Gharbi </h2>
                </div>
              </div>

              {/* Person examining painting */}
              <div className="gallery-item item-7">
                <Image
                  src="/gallery/gal7.png"
                  alt="Person examining a painting"
                  width={538}
                  height={214}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Artist hand */}
              <div className="gallery-item item-8">
                <Image
                  src="/gallery/gal6.png"
                  alt="Artist hand with paintbrush"
                  width={274}
                  height={214}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gallery scene - tall right */}
              <div className="gallery-item item-9">
                <Image
                  src="/gallery/gal5.png"
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



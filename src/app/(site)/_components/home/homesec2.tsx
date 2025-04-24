"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Homesec2() {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className="main py-20 mx-4 lg:mx-0">
      <div className="container">
        <div className="content ">
          {/* top */}
          <div className="top md:flex justify-between items-center mb-10 md:mb-20 gap-20 w-full">
            <div className="md:grid md:grid-cols-12 gap-8 w-full">
                <div className="col-span-7 flex justify-center items-center">
                    <div className="about">
                        <div className="max-w-[690px] flex justify-start items-center gap-2.5">
                            <div className="flex-1">
                                <span className="text-color2 text-[48px] font-bold leading-[48px] font-playwrite">
                                    Rajaa Gharbi.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-5">
                    <div className="right flex my-6 md:m-0 flex-col gap-4">
                        <div className="image justify-start max-w-[400px] h-[300px] rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/profile.jpg"
                                alt="artist"
                                width={2000}
                                height={2000}
                                className="w-[400px] h-[300px] bg-cover object-cover"
                            />
                        </div>
                        <p className="text-start text-sm font-normal leading-none mt-4">
                            <span className="font-bold">Rajaa Gharbi</span> Photo by <span className="font-bold">Sara Gharbi-Reinking</span> 2025.
                        </p>
                    </div>
                </div>
            </div>
          </div>

          {/* bottom */}


          <div className="about mb-10 mt-20 md:mt-0">
              <div className="max-w-[135px] flex flex-col justify-start items-start gap-2">
                <div className="flex justify-start items-center gap-2">
                  <div className="text-base font-normal leading-tight">
                    About
                  </div>
                  <div className="w-[63px] h-0 outline-[1.50px] outline-color2"></div>
                </div>
              </div>

              <div className=" max-w-[690px] flex justify-start items-center gap-2.5">
                <div className="flex-1 justify-center">
                  <span className="text-color1 text-[40px] font-bold leading-[48px]">
                    This is{" "}
                  </span>
                  <span className="text-color2 text-[40px] font-bold leading-[48px]">
                    Rajaa Gharbi.
                  </span>
                  <span className="text-color1 text-[40px] font-bold leading-[48px]">
                    {" "}
                    I&apos;m Always Here to Help You.
                  </span>
                </div>
              </div>
            </div>



          <div className=" mb-10 md:mb-0">
            <div className=" flex flex-col justify-start items-start gap-6">
              <div
                className={`flex flex-col justify-center items-start gap-2.5 transition-all duration-300 ${
                  showFullText ? "opacity-100" : "opacity-100"
                }`}
              >
                <div className="justify-center text-base font-normal leading-relaxed">
                  Rajaa A. Gharbi is an international painter, poet,
                  socio-linguist and filmmaker. She was born and raised in
                  Tunisia where she was a multimedia artist with the OTEMA
                  (Organization Nationale de Theatre de Marionnettes) at Ibn
                  Rachiq Arts Center, and an apprentice filmmaker with the Rue
                  de Marseille Cine-club in Tunis, from middle school until she
                  moved to Morocco in 1977.
                </div>
              </div>

              <div
                className={` flex flex-col justify-center items-start gap-2.5 transition-all duration-300 ${
                  showFullText
                    ? "opacity-100 max-h-[1000px]"
                    : "opacity-30 max-h-[120px] overflow-hidden"
                }`}
              >
                <div className="justify-center text-base font-normal leading-relaxed">
                  At the Ibn Rachiq Arts Center she was able to begin
                  translating into an interdisciplinary art form what she had
                  been learning since early childhood in textile work and
                  clothes design from her mother and story-telling from her
                  father. She passionately sculpted, painted, costumed, and
                  performed in Tunisia&apos;s prestigious and neighborhood
                  theatres the tige-marionnettes characters that she had created
                  with the Organization Nationale de Theatre de Marionnettes,
                  with the mentorship of Abdel Haq Khmir, and later with Tahar
                  Jerbi. In 1977 she became the first Tunisian woman to begin
                  working as a salaried marrionettist.
                </div>
              </div>

              <div
                className={` flex flex-col justify-center items-start gap-2.5 transition-all duration-300 ${
                  showFullText
                    ? "opacity-100 max-h-[1000px]"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                <div className="justify-center text-base font-normal leading-relaxed">
                  In Morocco, she was invited by playwright and North African
                  theatre leader Tayeb Seddiki to join, as a marionnetist and
                  actor, the Casablanca Municipal Theatre which he has been
                  directing since the mid-seventies. A daily commute between
                  Casablanca and Fez where she lived from 1977 to 1982 was not
                  possible. She continued painting and occasionally acting in
                  film until she moved to the United States in 1982. Gharbi has
                  been living in Seattle, Washington and Tunis since then, when
                  possible, creating artwork in the visual and literary in
                  Spain, Morocco and France.
                </div>
              </div>

              <button
                onClick={() => setShowFullText(!showFullText)}
                className="h-11 px-8 py-4 bg-color2 rounded-[22px] inline-flex justify-center items-center gap-3 cursor-pointer hover:bg-color1 transition-colors duration-300"
              >
                <div className="justify-center text-background text-base font-medium font-['Poppins'] leading-none">
                  {showFullText ? "Show Less" : "Learn More"}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

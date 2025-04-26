import React from "react";
import Image from "next/image";
import Review from "./review";

export default function Eventsec() {
  return (
    <div className="main py-20 mx-4 lg:mx-0">
      <div className="container">
        <div className="content">
          {/* top part */}
          <div className="flex flex-col md:flex-row justify-start items-start gap-16 mb-[60px]">
            <div className="w-full md:max-w-[690px] inline-flex flex-col justify-start items-start gap-6">
              <div className="max-w-[135px] flex flex-col justify-start items-start gap-2">
                <div className="inline-flex justify-start items-center gap-2">
                  <div className="justify-start text-color5 text-base font-normal leading-tight">
                    Event
                  </div>
                  <div className="w-[63px] h-0 outline-[1.50px] outline-offset-[-0.75px] outline-color2"></div>
                </div>
              </div>
              <div className="inline-flex justify-start items-center gap-2.5">
                <div className="flex-1 justify-center">
                  <span className="text-color1 text-[28px] md:text-[40px] font-bold leading-tight md:leading-[48px]">
                    The Future of Tech:{" "}
                  </span>
                  <span className="text-color2 text-[28px] md:text-[40px] font-bold leading-tight md:leading-[48px]">
                    Live Sessions & Meetups
                  </span>
                </div>
              </div>

              {/* Image moved here for mobile, will reposition on desktop */}
              <div className="block md:hidden w-full mb-6">
                <Image
                  className="w-full h-[520px] rounded-xl shadow-2xl object-cover bg-cover"
                  src="/event/ft1.png"
                  alt="artist"
                  width={2000}
                  height={2000}
                />
              </div>

              <div className="flex flex-col justify-center items-start gap-2.5">
                <div className="justify-center">
                  <span className="text-base font-normal leading-relaxed">
                    With years of experience,{" "}
                  </span>
                  <span className=" text-base font-medium leading-relaxed">
                    [Owner&apos;s Name]
                  </span>
                  <span className=" text-base font-normal leading-relaxed">
                    {" "}
                    is dedicated to delivering top-quality painting services.
                    Passionate about craftsmanship and customer satisfaction,
                    they lead a skilled team committed to transforming homes and
                    businesses with precision and care. Trust in expertise,
                    reliability, and a flawless finish every time!{" "}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-2.5">
                <div className="justify-center">
                  <span className=" text-base font-medium leading-relaxed">
                    Psychology is the scientific study
                  </span>
                  <span className="text-base font-normal leading-relaxed">
                    {" "}
                    of the human mind and behavior. It explores how people
                    think, feel, and act in various situations. As a discipline,
                    psychology helps us understand mental processes such as
                    perception, learning, memory, and emotion, while also
                    examining social influences, personality, and development
                    across the lifespan.
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-2.5">
                <div className="justify-center  text-base font-normal leading-relaxed">
                  By studying psychology, students gain insights into both
                  individual behavior and group dynamics, which can be applied
                  in real-life contexts such as education, mental health,
                  relationships, and the workplace. For teachers, an
                  understanding of psychological principles can be especially
                  useful in creating effective teaching strategies, managing
                  classrooms, and supporting students&apos; emotional and
                  cognitive growth.
                </div>
              </div>
            </div>

            {/* Image hidden on mobile, visible on desktop */}
            <div className="hidden md:block">
              <Image
                className="w-full md:max-w-[506px] h-[520px] md:h-[599px] rounded-xl shadow-2xl object-cover bg-cover"
                src="/event/ft1.png"
                alt="artist"
                width={2000}
                height={2000}
              />
            </div>
          </div>

          {/* second part */}
          <div className="inline-flex flex-col justify-start items-start gap-10">
            <div className="flex flex-col md:flex-row justify-start items-center gap-6 w-full">
              <div className="w-full md:w-96 inline-flex flex-col justify-start items-start gap-6">
                <Image
                  className="w-full h-[287px] rounded-xl object-cover bg-cover"
                  src="/event/ft2.png"
                  alt="artist"
                  width={2000}
                  height={2000}
                />
                <div className="inline-flex justify-start items-start gap-[105px]">
                  <div className="w-[177px] inline-flex flex-col justify-start items-start gap-1">
                    <div className="justify-center text-color1 text-lg font-medium leading-[28.80px]">
                      Purpose of the Prize
                    </div>
                    <div className="justify-center text-color5 text-sm font-normal leading-snug">
                      22 Sep, 2025
                    </div>
                  </div>
                  <Image
                    className="w-[102px] h-9"
                    src="/icon/ptrn.svg"
                    alt="artist"
                    width={2000}
                    height={2000}
                  />
                </div>
              </div>
              <div className="w-full md:w-96 inline-flex flex-col justify-start items-start gap-6">
                <Image
                  className="w-full h-[287px] rounded-xl object-cover bg-cover"
                  src="/event/ft3.png"
                  alt="artist"
                  width={2000}
                  height={2000}
                />
                <div className="inline-flex justify-start items-start gap-[105px]">
                  <div className="w-[177px] inline-flex flex-col justify-start items-start gap-1">
                    <div className="justify-center text-color1 text-lg font-medium leading-[28.80px]">
                      Purpose of the Prize
                    </div>
                    <div className="justify-center text-color5 text-sm font-normal leading-snug">
                      22 Sep, 2025
                    </div>
                  </div>
                  <Image
                    className="w-[102px] h-9"
                    src="/icon/ptrn.svg"
                    alt="artist"
                    width={2000}
                    height={2000}
                  />
                </div>
              </div>
              <div className="w-full md:w-96 inline-flex flex-col justify-start items-start gap-6">
                <Image
                  className="w-full h-[287px] rounded-xl object-cover bg-cover"
                  src="/event/ft4.png"
                  alt="artist"
                  width={2000}
                  height={2000}
                />
                <div className="inline-flex justify-start items-start gap-[105px]">
                  <div className="w-[177px] inline-flex flex-col justify-start items-start gap-1">
                    <div className="justify-center text-color1 text-lg font-medium leading-[28.80px]">
                      Purpose of the Prize
                    </div>
                    <div className="justify-center text-color5 text-sm font-normal leading-snug">
                      22 Sep, 2025
                    </div>
                  </div>
                  <Image
                    className="w-[102px] h-9"
                    src="/icon/ptrn.svg"
                    alt="artist"
                    width={2000}
                    height={2000}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="justify-center">
                <span className=" text-base font-normal leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </span>
                <span className=" text-base font-medium leading-relaxed">
                  Duis aute irure dolor in reprehenderit
                </span>
                <span className=" text-base font-normal leading-relaxed">
                  {" "}
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident.
                </span>
              </div>
              <div className="justify-center">
                <span className=" text-base font-normal leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </span>
                <span className=" text-base font-medium leading-relaxed">
                  Duis aute irure dolor in reprehenderit
                </span>
                <span className=" text-base font-normal leading-relaxed">
                  {" "}
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </span>
                <span className=" text-base font-medium leading-relaxed">
                  Duis aute irure dolor in reprehenderit
                </span>
                <span className=" text-base font-normal leading-relaxed">
                  {" "}
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident.{" "}
                </span>
              </div>
            </div>
          </div>


<div className="mt-[300px]">

<Review />

</div>





        </div>
      </div>
    </div>
  );
}

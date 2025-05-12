"use client";
import Image from "next/image";
import Poetrysec from "../home/poetrysec";

export default function Poetrysection() {
  return (
    <div>
      <div className="main py-20 mx-4 lg:mx-0 ">
        <div className="container">
          <div className="content">
            {/* top */}
            <div className="top md:flex justify-between items-center mb-10 md:mb-20 gap-20 w-full">
              <div className="md:grid md:grid-cols-12 gap-8 w-full">
                <div className="col-span-7 flex justify-center items-center">
                  <div className="about">
                    <div className="max-w-[690px] flex justify-start items-center gap-2.5">
                      <div className="flex-1">
                        <span className="text-color2 text-[56px] font-medium leading-[48px] font-garamond">
                          Rajaa Gharbi
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-5">
                  <div className="right flex my-6 md:m-0 flex-col gap-4">
                    <div className="image justify-start max-w-[336px] h-[240px] rounded-xl overflow-hidden shadow-2xl">
                      <Image
                        src="/images/event.jpg"
                        alt="artist"
                        width={2000}
                        height={2000}
                        className="w-[336px] h-[240px] bg-cover object-cover"
                      />
                    </div>
                    <p className="text-start text-sm font-normal leading-none ">
                      Photo by{" "}
                      <span className="font-bold">Jacinta Ceballo</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Poetrysec />
          </div>
        </div>
      </div>
    </div>
  );
}

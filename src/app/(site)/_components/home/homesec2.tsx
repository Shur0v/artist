
import Image from "next/image";

export default function Homesec2() {

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
                        <div className="image justify-start max-w-[336px] h-[240px] rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/profile.jpg"
                                alt="artist"
                                width={2000}
                                height={2000}
                                className="w-[336px] h-[240px] bg-cover object-cover"
                            />
                        </div>
                        <p className="text-start text-sm font-normal leading-none ">
                            <span className="font-bold">Rajaa Gharbi</span> Photo by <span className="font-bold">Sara Gharbi-Reinking</span> 2025.
                        </p>
                    </div>
                </div>
            </div>
          </div>

          {/* bottom */}

{/* 
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
            </div> */}



          <div className=" mb-10 md:mb-0">
            <div className=" flex flex-col justify-start items-start gap-6">
              <div
                className={`flex flex-col justify-center items-start gap-2.5 transition-all duration-300 `}
              >
                <div className="justify-center text-base font-normal leading-relaxed">
                My artwork is a search for the soul of everything and a search for medicine laughter.
Utilizing natural and synthetic water-based media to paint, and many other media to
design small and large installations, I still alternate, stylistically and thematically,
between the meditative semi-abstract and the playfully caricatural, always looking for
“Poetry” that surfaces in the dark and daylight, unsuspected, gentle, yet unbreakable
                </div>
              </div>




            </div>
          </div>






        </div>
      </div>
    </div>
  );
}

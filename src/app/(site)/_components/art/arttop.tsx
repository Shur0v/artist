import React from 'react'
import Image from 'next/image'

export default function Arttop() {
  return (
    <div className="main py-20 mx-4 lg:mx-0">
      <div className="container">
        <div className="content">



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
                                src="/art/galleryfirst.jpg"
                                alt="artist"
                                width={2000}
                                height={2000}
                                className="w-[336px] h-[240px] bg-cover object-cover"
                            />
                        </div>
                        <p className="text-start text-sm font-normal leading-none ">
                            <span className="font-bold">Rajaa Gharbi</span> Photo by <span className="font-bold">Amanda Ovena</span> 2025.
                        </p>
                    </div>
                </div>
            </div>
          </div>



          <div className="pb-5 border-b-2 border-color2 w-full inline-flex justify-start items-center gap-2.5">
            <div className="justify-start text-color2 text-[36px] md:text-[56px] font-medium leading-[1.2]">Our Gallery</div>
          </div>

          <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <Image 
                className="w-full h-[240px] md:h-80 rounded-xl object-cover" 
                src="/art/art10.jpg" 
                alt="Art 1" 
                width={588} 
                height={320}
              />
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] leading-loose">Art 1</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">21 Sep, 2025</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <Image 
                className="w-full h-[240px] md:h-80 rounded-xl object-cover" 
                src="/art/art2.jpg" 
                alt="Art 2" 
                width={588} 
                height={320}
              />
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] leading-loose">Art 2</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">22 Sep, 2025</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <Image 
                className="w-full h-[240px] md:h-80 rounded-xl object-cover" 
                src="/art/art3.jpg" 
                alt="Art 3" 
                width={588} 
                height={320}
              />
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] leading-loose">Art 3</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">22 Sep, 2025</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <Image 
                className="w-full h-[240px] md:h-80 rounded-xl object-cover" 
                src="/art/art4.jpg" 
                alt="Art 4" 
                width={588} 
                height={320}
              />
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] leading-loose">Art 4</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">22 Sep, 2025</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <Image 
                className="w-full h-[240px] md:h-80 rounded-xl object-cover" 
                src="/art/art5.jpg" 
                alt="Art 5" 
                width={588} 
                height={320}
              />
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] leading-loose">Art 5</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">22 Sep, 2025</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <Image 
                className="w-full h-[240px] md:h-80 rounded-xl object-cover" 
                src="/art/art6.jpg" 
                alt="Art 6" 
                width={588} 
                height={320}
              />
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] leading-loose">Art 6</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">22 Sep, 2025</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

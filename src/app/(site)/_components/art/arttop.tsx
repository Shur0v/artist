import React from 'react'
import Image from 'next/image'

export default function Arttop() {
  return (
    <div className="main py-20 mx-4 lg:mx-0">
      <div className="container">
        <div className="content">

          <div className="pb-5 border-b-2 border-color2 w-full inline-flex justify-start items-center gap-2.5">
            <div className="justify-start text-color2 text-[36px] md:text-[56px] font-medium leading-[1.2]">Our Gallery</div>
          </div>

          <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <Image 
                className="w-full h-[240px] md:h-80 rounded-xl object-cover" 
                src="/art/galleryfirst.jpg" 
                alt="Art 1" 
                width={588} 
                height={320}
              />
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] leading-loose">Art 1</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">by <span className="font-bold">Amanda Ovena</span></div>
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

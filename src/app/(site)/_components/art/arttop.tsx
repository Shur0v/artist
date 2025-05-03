'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function Arttop() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

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

{/* ======================================================================== */}

          <div className="pb-5 border-b-2 border-color2 w-full inline-flex justify-start items-center gap-2.5">
            <div className="justify-start text-color2 text-[36px] md:text-[56px] font-medium leading-[1.2]">Our Gallery</div>
          </div>

          <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <div className="relative w-full">
                <div 
                  className="relative w-full h-[240px] md:h-80 cursor-pointer"
                  onClick={() => handleImageClick('/art/art2.jpg')}
                >
                  <Image 
                    className="rounded-xl object-cover" 
                    src="/art/art2.jpg" 
                    alt="Art 1" 
                    fill
                  />
                </div>
              </div>
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] leading-loose">Villages and Passages</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">crylic on canvas 36&quot; x 48&quot;. Available</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <div className="relative w-full">
                <div 
                  className="relative w-full h-[240px] md:h-80 cursor-pointer"
                  onClick={() => handleImageClick('/art/art4.jpg')}
                >
                  <Image 
                    className="rounded-xl object-cover" 
                    src="/art/art4.jpg" 
                    alt="Art 2" 
                    fill
                  />
                </div>
              </div>
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] leading-loose">An-Alhambra Afterglow</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">Acrylic on canvas 36hx48 Available</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <div className="relative w-full">
                <div 
                  className="relative w-full h-[240px] md:h-80 cursor-pointer"
                  onClick={() => handleImageClick('/art/art3.jpg')}
                >
                  <Image 
                    className="rounded-xl object-cover" 
                    src="/art/art3.jpg" 
                    alt="Art 3" 
                    fill
                  />
                </div>
              </div>
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] leading-loose">L&apos;Aiisha, Life in our Names</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">Acrylic on paper 20.1/8 X 22.6/8.Prints available</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <div className="relative w-full">
                <div 
                  className="relative w-full h-[240px] md:h-80 cursor-pointer"
                  onClick={() => handleImageClick('/latest/4.jpg')}
                >
                  <Image 
                    className="rounded-xl object-cover" 
                    src="/latest/4.jpg" 
                    alt="Art 4" 
                    fill
                  />
                </div>
              </div>
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-[&apos;Poppins&apos;] leading-loose">Moons, Desires and Rumi&apos;s Mistresses</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed"> Acrylicon paper30.1/8x 22.3/8. Prints available</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <div className="relative w-full">
                <div 
                  className="relative w-full h-[240px] md:h-80 cursor-pointer"
                  onClick={() => handleImageClick('/latest/5.jpg')}
                >
                  <Image 
                    className="rounded-xl object-cover" 
                    src="/latest/5.jpg" 
                    alt="Art 5" 
                    fill
                  />
                </div>
              </div>
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] leading-loose">Hidden Friends I.</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">Acrylic on paper. 30.4/8x22.7/8. Available</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <div className="relative w-full">
                <div 
                  className="relative w-full h-[240px] md:h-80 cursor-pointer"
                  onClick={() => handleImageClick('/latest/6.jpeg')}
                >
                  <Image 
                    className="rounded-xl object-cover" 
                    src="/latest/6.jpeg" 
                    alt="Art 6" 
                    fill
                  />
                </div>
              </div>
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] leading-loose">Birds in the Wind and in the Mouth</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">Acrylic on canvas.24x24. Available</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <div className="relative w-full">
                <div 
                  className="relative w-full h-[240px] md:h-80 cursor-pointer"
                  onClick={() => handleImageClick('/latest/7.jpg')}
                >
                  <Image 
                    className="rounded-xl object-cover" 
                    src="/latest/7.jpg" 
                    alt="Art 7" 
                    fill
                  />
                </div>
              </div>
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] leading-loose">I love you Too</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed"> Acrylic on paperboard. 14.6/8x10.7/8. Prints available.23.1/2x 11.6/8. Available</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <div className="relative w-full">
                <div 
                  className="relative w-full h-[240px] md:h-80 cursor-pointer"
                  onClick={() => handleImageClick('/latest/8.jpg')}
                >
                  <Image 
                    className="rounded-xl object-cover" 
                    src="/latest/8.jpg" 
                    alt="Art 8" 
                    fill
                  />
                </div>
              </div>
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] leading-loose">In-Sights</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">Acrylics on paper. 19.4/8X 9.1/4. Available</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <div className="relative w-full">
                <div 
                  className="relative w-full h-[240px] md:h-80 cursor-pointer"
                  onClick={() => handleImageClick('/latest/9.jpg')}
                >
                  <Image 
                    className="rounded-xl object-cover" 
                    src="/latest/9.jpg" 
                    alt="Art 9" 
                    fill
                  />
                </div>
              </div>
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] ">Lioness, Le Rouge et Le Noir Ne s&apos;épousent-ils Pas ?</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">Acrylic on paper.11x8.4/8. Available</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <div className="relative w-full">
                <div 
                  className="relative w-full h-[240px] md:h-80 cursor-pointer"
                  onClick={() => handleImageClick('/latest/10.jpeg')}
                >
                  <Image 
                    className="rounded-xl object-cover" 
                    src="/latest/10.jpeg" 
                    alt="Art 10" 
                    fill
                  />
                </div>
              </div>
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] leading-loose">Once Beneath a Time, Conversation</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] ">Watercolor Ink, and Pencilon paper. 20.4/8X20.4/8. Prints available</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <div className="relative w-full">
                <div 
                  className="relative w-full h-[240px] md:h-80 cursor-pointer"
                  onClick={() => handleImageClick('/latest/11.jpg')}
                >
                  <Image 
                    className="rounded-xl object-cover" 
                    src="/latest/11.jpg" 
                    alt="Art 11" 
                    fill
                  />
                </div>
              </div>
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] ">Songs of the Flower-Eyed Dancer;Tribute to Michael Jackson</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">Acrylic on paper. 28x38. Available</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

            <div className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
              <div className="relative w-full">
                <div 
                  className="relative w-full h-[240px] md:h-80 cursor-pointer"
                  onClick={() => handleImageClick('/latest/12.jpg')}
                >
                  <Image 
                    className="rounded-xl object-cover" 
                    src="/latest/12.jpg" 
                    alt="Art 12" 
                    fill
                  />
                </div>
              </div>
              <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] leading-loose">I see you Coming from Far Away</div>
                  <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">Acrylic on paper9.4/8x7.4/8. Available</div>
                </div>
                <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
              </div>
            </div>

          </div>

          {/* Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
              onClick={handleCloseModal}
            >
              <div className="relative w-[70vw] h-[80vh] flex items-center justify-center">
                <Image
                  src={selectedImage}
                  alt="Selected artwork"
                  fill
                  className="object-contain"
                  sizes="70vw"
                  priority
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}


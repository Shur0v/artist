'use client'
import React, { useState } from 'react'
import Image from 'next/image'

// Define the artwork data structure
interface ArtworkData {
  id: number;
  image: string;
  title: string;
  description: string;
}

// Array of artwork data
const artworkData: ArtworkData[] = [
  {
    id: 1,
    image: '/art/art2.jpg',
    title: 'Villages and Passages',
    description: 'crylic on canvas 36" x 48". Available'
  },
  {
    id: 2,
    image: '/art/art4.jpg',
    title: 'An-Alhambra Afterglow',
    description: 'Acrylic on canvas 36hx48 Available'
  },
  {
    id: 3,
    image: '/art/art3.jpg',
    title: "L'Aiisha, Life in our Names",
    description: 'Acrylic on paper 20.1/8 X 22.6/8.Prints available'
  },
  {
    id: 4,
    image: '/art/art5.jpg',
    title: "Cauldron Delights II",
    description: 'Acrylic on parchment.17x11. Prints available'
  },
  {
    id: 5,
    image: '/latest/15.jpg',
    title: 'Cauldron Delights I',
    description: 'Acrylic on parchment.14X11.Available'
  },
  {
    id: 6,
    image: '/latest/22.jpg',
    title: 'Circus and Steady Dancers',
    description: 'Acrylic on canvas. 48x24.Prints available'
  },
  {
    id: 7,
    image: '/latest/21.jpg',
    title: 'Trip to Bountiful',
    description: 'Acrylic on paper.6.3/8x4. Prints available'
  },
  {
    id: 8,
    image: '/latest/4.jpg',
    title: "Moons, Desires and Rumi's Mistresses",
    description: 'Acrylicon paper30.1/8x 22.3/8. Prints available'
  },
  {
    id: 9,
    image: '/latest/23.jpg',
    title: 'Not an Omen',
    description: 'Gouacheandink. 12x9/4/8. Prints available'
  },
  {
    id: 10,
    image: '/latest/11.jpg',
    title: 'Songs of the Flower-Eyed Dancer;Tribute to Michael Jackson',
    description: 'Acrylic on paper. 28x38. Available'
  },
  {
    id: 11,
    image: '/latest/12.jpg',
    title: 'I see you Coming from Far Away',
    description: 'Acrylic on paper9.4/8x7.4/8. Available'
  },
  {
    id: 12,
    image: '/latest/10.jpeg',
    title: 'Once Beneath a Time, Conversation',
    description: 'Watercolor Ink, and Pencilon paper. 20.4/8X20.4/8. Prints available'
  },
  {
    id: 13,  
    image: '/latest/8.jpg',
    title: 'In-Sights',
    description: 'Acrylics on paper. 19.4/8X 9.1/4. Available'
  },
  {
    id: 14,
    image: '/latest/7.jpg',
    title: 'I love you Too',
    description: 'Acrylic on paperboard. 14.6/8x10.7/8. Prints available.23.1/2x 11.6/8. Available'
  },
  {
    id: 15,
    image: '/latest/13.jpg',
    title: 'A Child’s Freedom',
    description: 'Acrylic on paper.11x8.4/8. Prints available'
  },
  {
    id: 16,
    image: '/latest/5.jpg',
    title: 'Hidden Friends I.',
    description: 'Acrylic on paper. 30.4/8x22.7/8. Available'
  },
  {
    id: 17,
    image: '/latest/6.jpeg',
    title: 'Birds in the Wind and in the Mouth',
    description: 'Acrylic on canvas.24x24. Available'
  },
  {
    id: 18,
    image: '/latest/16.jpg',
    title: 'Dancers by the Rim of Dreams',
    description: 'Acrylic on paper 18.4.8by17.4.8'
  },
  {
    id: 19,
    image: '/latest/19.jpg',
    title: 'When the Diacritic Sign Speaks its Life',
    description: ' Acrylic on paper. 21.1/8x15.2/8.Printsavailable'
  },
  {
    id: 20,
    image: '/latest/14.jpg',
    title: 'Birds in the City',
    description: ' Acrylic on canvas. 9x12. Prints available'
  },
  {
    id: 21,
    image: '/latest/17.jpg',
    title: 'Memory Before the Tablet',
    description: 'Gouache, watercolor, pencil, ink on paper.32x25. Prints available'
  },
  {
    id: 22,
    image: '/latest/20.jpg',
    title: 'On a Ride to Where...?',
    description: 'Acrylic on canvas. 48X36. Available'
  },

  {
    id: 23,
    image: '/latest/9.jpg',
    title: 'Lioness, Le Rouge et Le Noir Ne s\'épousent-ils Pas ?',
    description: 'Acrylic on paper.11x8.4/8. Available'
  },
  {
    id: 24,
    image: '/latest/18.jpg',
    title: 'Simorgh Never Was Entirely Plucked 2014',
    description: 'Acrylic on paper 41x28.4..8'
  },
  {
    id: 25,
    image: '/latest/25.jpg',
    title: 'Triptych  Dancer in the City 1 of 3',
    description: 'Acrylic 20x8. Prints available'
  },
  {
    id: 26,
    image: '/latest/24.jpg',
    title: 'Triptych Dancer in the City 2 of 3',
    description: 'Acrylic 20x8. Prints available'
  },
  {
    id: 27,
    image: '/latest/26.jpg',
    title: 'Triptyh 3of 3 Dancer in the City',
    description: 'Acrylic 20x8. Prints available'
  },
];

export default function Arttop() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="main pt-20 mx-4 lg:mx-0">
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
                            Photo by <span className="font-bold">Amanda Ovena</span> 2025.
                        </p>
                    </div>
                </div>
            </div>
          </div>

          <div className="pb-5 border-b-2 border-color2 w-full inline-flex justify-start items-center gap-2.5">
            <div className="justify-start text-color2 text-[36px] md:text-[56px] font-medium leading-[1.2]">Our Gallery</div>
          </div>

          <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
            {artworkData.map((artwork) => (
              <div key={artwork.id} className="w-full inline-flex flex-col justify-start items-start gap-8 mb-6">
                <div className="relative w-full">
                  <div 
                    className="relative w-full h-[240px] md:h-80 cursor-pointer"
                    onClick={() => handleImageClick(artwork.image)}
                  >
                    <Image 
                      className="rounded-xl object-cover" 
                      src={artwork.image} 
                      alt={artwork.title} 
                      fill
                    />
                  </div>
                </div>
                <div className="self-stretch h-[62px] inline-flex justify-between items-start w-full">
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="justify-center text-color1 text-xl font-medium font-['Poppins'] ">{artwork.title}</div>
                    <div className="justify-center text-color5 text-base font-normal font-['Poppins'] leading-relaxed">{artwork.description}</div>
                  </div>
                  <Image className="w-[175px] h-[62px]" src="/icon/ptrn.svg" alt="Pattern" width={175} height={62}/>
                </div>
              </div>
            ))}
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

          <div className='text-center text-color5 text-sm font-normal mt-12'> Art Photography by <span className='font-bold'>The Color Group</span> </div>

        </div>
      </div>
    </div>
  )
}


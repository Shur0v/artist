'use client'
import React from "react";
import Image from "next/image";
import { MdPictureAsPdf } from "react-icons/md";
// import Review from "./review";

export default function Eventsec() {
  return (
    <div className="main py-20 mx-4 lg:mx-0">
      <div className="container">
        <div className="content">
          {/* top part */}


              <div className="max-w-[135px] flex flex-col justify-start items-start gap-2 mb-[50px]">
                <div className="inline-flex justify-start items-center gap-2">
                  <div className="justify-start text-color5 text-base font-normal leading-tight">
                    Reviews
                  </div>
                  <div className="w-[63px] h-0 outline-[1.50px] outline-offset-[-0.75px] outline-color2"></div>
                </div>
              </div>


              <div className="justify-center mb-[100px]">
              …Her writing is steeped in symbolism… is  made of different terrains of meanings that paint with words where the poet makes the unraveling of the third person pronoun a spiritual rebirth that reaches deep flight into existence and one’s being; as the poet comments: “It’s important to write in the first person pronoun, the pronoun of the historian, the witness, the documentarian, the analyst, the creator, the one who defies the pains of silence or its comforts. <br />
              <span className="text-base font-medium leading-relaxed"> -Dr. Fatma Lakhdhar, Writer, literary Critic, University of Tunis</span>
              </div>


              <div className="justify-center mb-[100px]">
                نوع الكتابة التي توختها الشاعرة موغل في الرمزية،
                يتكوّن من تضاريس معنوية مختلفة؛
                فهو شعر يستكشف أغوار الذات والنفسيات،
                ويعمد إلى رسم بالكلمات،
                لتجعل فيها من انسلاخها عن ضمير الغائب انبعاثًا روحيًا
                يحقّق لها التحليق بعيدًا في الكون وفي الكيان.

                كما تضيف الشاعرة:
                &ldquo;الكتابة بالأنا، ضمير الحاضر؛
                المؤرّخ، الشاهد، الموثّق، المحلّل، المبدع،
                المتحدّي لعذاب الصمت أو راحته... المؤرّخ.&rdquo;
              </div>


              <div className="justify-center mb-[100px]">
              Her poetic writing is fresh, powerful... it commands attention and mandates its own articulations of verb and meaning. It establishes an innovation in the emotional and the esthetic in this North American context. But her writing goes beyond [this context] thanks to her quest for the universal... Pearls of Love... Her reflections on Poetry are sublime...A warrior for light..
              </div>

              
              <div className="justify-center mb-[100px]">

              Son écriture poétique est fraiche et forte qui force l’attention et exige ses propres articulations compréhensives verbales. C’est une mise au point affectif et esthétique dans ce contexte nord-américain. Mais son écriture va plus loin grâce à cette quête de l’universel ... perles d’Amour... sa réflexion sur la poésie est sublime...une guerrière de la lumière... C’est une grande joie et un immense honneur d’avoir cette écrivaine dans Le Maghreb Littéraire... <br />
              <span className="text-base font-medium leading-relaxed">-Najib Redouane, Literary critic Chief editor of the international Le Maghreb Littéraire</span>

              </div>

              
              <div className="justify-center mb-[100px]">

              Gharbi’s visuals read like poems and her poems read like poems. She dissects meaning and reinstates it in a narrative context that embraces forces of an intuitive nature...
              </div>
              

              
              <div className="justify-center mb-[100px]">

              L’art visuel de Gharbi se lit comme des poèmes et ses poèmes se lisent comme de l’art visuel… Elle dissèque le sens et le réintègre dans un contexte de récit qui embrasse des forces d’une nature intuitive… <br />
              <span className="text-base font-medium leading-relaxed">-American Artist Joe Fedderson</span>

              </div>


              <div className="justify-center mb-[100px]">

              ...Tunisian-born artist/poet Rajaa A. Gharbi enthralled the audience at her poetry reading and book signing...

              </div>

              

              <div className="justify-center mb-[100px]">

              L’artiste et poète d’origine Tunisienne Rajaa Gharbi a emerveillé l’audience pendant sa lecture et signature de livre à l’espace culturel de l’ambassade de Tunisie… <br />
              <span className="text-base font-medium leading-relaxed">-The Washington Report on Middle East Affairs</span>

              </div>

              

              <div className="justify-center mb-[100px]">
              …In I-dentity”, the poetic voice employs an image – metaphor – that comes back to haunt the fortunate reader. This successful metaphor is but one of many in this delightful book of words and images.
              </div>
              

              <div className="justify-center mb-[100px]">
              ...Dans le poème “I-Dentity” la voix poetique emploie une image-métaphore qui revient pour hanter le chanceux lecteur. <br />
              <span className="text-base font-medium leading-relaxed">-Dena Bugel-Shunra Literary and Judiciary Hebrew Translator, Proteus publication</span>
              </div>
              

              <div className="justify-center mb-[100px]">
              ...I was moved by both the scope and depth of her work.  Her strength of expression in the English language is extraordinary.
              </div>
              


              <div className="justify-center mb-[100px]">
              ...J’étais touchée aussi bien par l’étendue que par la profondeur de son travail.  La force de son expression dans la langue anglaise est extraordinaire. <br />
              <span className="text-base font-medium leading-relaxed">-Reader, Malti Greenberg</span>
              </div>


<div className="max-w-[405px]"> 

<button 
                onClick={() => window.open('/event/Dreamscapes.pdf', '_blank')}
                className="bg-color2/20 px-4 py-2 rounded-md w-[400px] text-lg cursor-pointer hover:bg-color2 hover:text-white transition-all duration-300 mb-[10px] flex justify-between items-center group"
              >
                <span>Dreamscapes of the soul</span>
                <MdPictureAsPdf className="group-hover:text-white group-hover:scale-150 transition-all duration-300" />
              </button> <br />


              <button 
              onClick={() => window.open('/event/Return.pdf', '_blank')}
              className="bg-color2/20 px-4 py-2 rounded-md w-[400px] text-lg cursor-pointer hover:bg-color2 hover:text-white transition-all duration-300 mb-[220px] flex justify-between items-center group"
              >
                <span>The Circle of Departure and Return</span>
                <MdPictureAsPdf className="group-hover:text-white group-hover:scale-150 transition-all duration-300" />
              </button>

</div>




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


{/* <div className="mt-[300px]"> <Review /> </div> */}





        </div>
      </div>
    </div>
  );
}

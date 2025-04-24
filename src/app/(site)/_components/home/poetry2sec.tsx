"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

export default function Poetry2sec() {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className="main py-20 mx-4 lg:mx-0">
      <div className="container">
        <div className="content">


        <div className="flex justify-center "> 
          <div className="flex justify-center flex-col gap-4">
            <Image 
                src="/images/event.jpg" 
                alt="poetry reviews" 
                width={996} 
                height={430} 
                className="w-full md:w-[696px] h-auto md:h-[430px] rounded-xl object-cover"
            />
                        <p className="text-start text-sm font-normal leading-none mt-4">
                        by <span className="font-bold">Jacinta Ceballo</span> 
                        </p>
          </div>
        </div>

          <div className="flex flex-col justify-start items-center gap-10 mt-10">
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="text-2xl font-medium leading-[38.40px]">
                Excerpts from written reviews:
              </div>

              {/* First review - French */}
              <div className={`text-base font-normal leading-relaxed ${showFullText ? 'opacity-100' : 'opacity-100'}`}>
                &apos;Son écriture poétique est fraiche et forte qui force l&apos;attention et exige ses propres articulations compréhensives verbales. C&apos;est une mise au point affectif et esthétique dans ce contexte nord-american. Mais son écriture va plus loin grace a cette quête de l&apos;universel ... perles d&apos;Amour... sa réflexion sur la poesie est sublime...une guerrière de la lumiére...C&apos;est une grande joie et un immense honneur d&apos;avoir cette ecrivaine dans Le Maghreb Litteraire...&apos;
              </div>

              {/* First review - English translation */}
              <div className={`${showFullText ? 'opacity-100' : 'opacity-100'}`}>
                <span className="text-base font-normal leading-relaxed">
                  &quot;Her poetic writing is fresh, powerful... it commends attention and mandates its own articulations of verb and meaning. It establishes an innovation in the emotional and the esthetic in this North American context. But her writing goes beyond [this context] thanks to her quest for the universal... Pearls of Love... Her reflections on Poetry are sublime...A warrior for light...&quot;     
                </span>
                <span className="text-base font-medium leading-relaxed">
                  -Najib Redouane, Literary critic Chief editor of the international
                </span>
              </div>

              {/* Second review - Bilingual */}
              <div className={`${showFullText ? 'opacity-100' : 'opacity-100'}`}>
                <span className="text-base font-normal leading-relaxed">
                  &quot;Gharbi&apos;s visuals read like poems. She dissects meaning and reinstates it in a narrative context that embraces forces of an intuitive nature...&quot;      &quot;L&apos;art visual de Gharbi se lit comme des poèmes et ses poèmes se lisent comme de l&apos;art visuel… Elle dissèque le sens et le reintégre dans un context de récit qui embrasse des forces d&apos;une nature intuitive…&quot;     
                </span>
                <span className="text-base font-medium leading-relaxed">
                  -American Artist Joe Fedderson
                </span>
              </div>

              {/* Third review */}
              <div className={`text-base font-normal leading-relaxed ${showFullText ? 'opacity-100' : 'opacity-100'}`}>
                &quot;…Gharbi&apos;s poetry leaps boundaries, embraces, is personal, political and spiritual-without being &quot;neatly&quot; or &quot;categorically&quot; any one of those things…&quot; &quot;... This evening, with art and poetry, is indicative of the range, intertwining, and connectedness between art forms and ideas that Rajaa Gharbi explores in this beautiful new work...&quot;
              </div>

              {/* Fifth review - Visible but with low opacity when collapsed */}
              <div className={`transition-all duration-300 ${showFullText ? 'opacity-100' : 'opacity-30'}`}>
                <span className="text-base font-normal leading-relaxed">
                  &quot;Gharbi saute des barrières, est politique et spirituelle sans ẻtre &quot;joliement&quot; ou &quot;catégoriquement&quot;  l&apos;une ou l&apos;autre de ces choses ... Cette soirée avec de l&apos;art et de la poesie est indicative de la portée, de l&apos;entrelacement et des liens entre des arts et des pensées que R. Gharbi explore dans cette belle nouvelle oeuvre&quot; »      
                </span>
                <span className="text-base font-medium leading-relaxed">
                  -Rick Simonson, Literary curator of the Elliott Bay Book Company
                </span>
              </div>

              {/* Hidden reviews */}
              <div className={`flex flex-col gap-6 transition-all duration-300 ${showFullText ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                {/* Rest of the reviews */}
                <div>
                  <span className="text-base font-normal leading-relaxed">
                    &quot;...Tunisian-born artist/poet Rajaa A. Gharbi enthralled the audience at her poetry reading and book signing...&quot;         
                    <br/>
                    &quot;L&apos;artiste et poète d&apos;origine Tunisienne Rajaa Gharbi a emerveillé l&apos;audience pendant sa lecture et signature de livre à l&apos;espace culturel de l&apos;ambassade de Tunisie&quot;...     
                  </span>
                  <span className="text-base font-medium leading-relaxed">
                    -The Washington Report on Middle East Affairs
                  </span>
                </div>

                <div className="text-base font-normal leading-relaxed">
                  &quot;… The best poetry takes a very private, particular experience and transmutes it into something that is universal; when it wears well, poetry returns to its readers when their own particular circumstances align with those universal ones… In &quot;I-dentity&quot;, the poetic voice employs an image – metaphor – that comes back to haunt the fortunate reader. This successful metaphor is but one of many in this delightful book of words and images&quot;.
                </div>

                <div>
                  <span className="text-base font-normal leading-relaxed">
                    &quot;…La meilleure poésie saisit une experience particulière et privée et la transmue en quelque chose d&apos;universel. Quand cette poésie voyage bien à travers le temps qui passe, elle retourne à ses lecteurs lorsque leurs propres circonstances particulières ou privées s&apos;alignent avec les circonstances qui sont universelles... Dans le poeme &quot;I-Dentity&quot; la voix poetique emploie une image-métaphore qui revient pour hanter le chanceux lecteur&quot; .      
                  </span>
                  <span className="text-base font-medium leading-relaxed">
                    -Dena Bugel-Shunra Literary and Judiciary Hebrew Translator, Proteus publication
                  </span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowFullText(!showFullText)}
              className="h-11 px-8 py-4 bg-[#ff6b00] rounded-[22px] inline-flex justify-center items-center gap-3 hover:bg-[#e65600] transition-colors duration-300"
            >
              <div className="text-[#fff9eb] text-base font-medium leading-none flex items-center">
                {showFullText ? 'Show Less' : 'See More'} 
                <FaAngleDown className={`text-white ml-2 transition-transform duration-300 ${showFullText ? 'rotate-180' : 'rotate-0'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
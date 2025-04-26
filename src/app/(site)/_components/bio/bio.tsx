"use client"
import React from 'react'
import Image from 'next/image';

export default function Biography() {
  return (
    <div className="main py-20 mx-4 lg:mx-0">
    <div className="container">
      <div className="content">
          {/* tittle */}
        <div className="flex flex-col justify-start items-center gap-6 mb-20">
          <div className="px-6 py-2.5 border-b-2 border-color2 flex justify-center items-center gap-3">
            <div className="text-color2 text-base font-normal leading-none">Biography</div>
          </div>
          <div className="inline-flex justify-center items-center gap-2.5">
            <div className="max-w-[1099px] text-center">
              <span className="text-color1 text-[40px] font-semibold leading-[46px]">Here All You Can </span>
              <span className="text-color2 text-[40px] font-semibold leading-[46px]">Know About Me</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">

          <div className="text-color5 text-base font-normal leading-relaxed">
          Rajaa A. Gharbi is an international multi-disciplinary artist, poet and sociolinguist born and raised in Tunisia. She trained and worked for seven years as a multimedia artist with The National Puppet Theatre of Tunisia (OTEMA) at both its Ibn Rachiq Arts Center and later at its Rue de Marseille studios of which she was a founding member, and where she started translating into an interdisciplinary art form what she had been learning about textile and clothes design from her mother and story–telling from her father-Gharbi’s paternal grandmother was Tunisia’s last king/Bey’s storyteller. She passionately sculpted, painted, costumed, created masks, and performed in Tunisia’s prestigious and neighborhood theatres the tige-marionettes characters that she had created with the mentorship of Abdel Haq Khmir, and later with Tahar Jerbi. In 1977 she became Tunisia’s first salaried female puppet theatre artist.
              </div>

            <div className="flex justify-between items-start gap-[60px] flex-col md:flex-row">
              <div className="max-w-[487px] text-color5 text-base font-normal leading-relaxed">
              The same year the National Puppet Theatre of Tunisia (OTEMA) hosted performances by the visiting Boulder, Colorado Black Light Puppet Theatre of which Gharbi’s future husband was a leading puppeteer. Gharbi agreed to leave the OTEMA and move with her husband to Morocco with the prenuptial condition that the couple will start its own puppet theatre in Fez, Morocco- The prenuptial condition never materialized.
              </div>
              <div className="img max-w-[653px] h-[200px] rounded-xl overflow-hidden">
                  <Image className="flex-1 object-cover bg-cover scale-110 bg-center" height={700} width={700} src="/images/image2.png" alt="biography" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="text-color5 text-base font-normal leading-relaxed">
In Morocco, Gharbi was invited by playwright and international theatre leader Tayeb Saddiki to join as a marionettist and actor the Casablanca Municipal Theatre. A daily commute between Casablanca and Fez where she lived from 1977 to 1982 was impossible. She continued painting and occasionally acting in film. After experimenting in costume design with Swiss German filmmaker Daniel Schmidt she moved to Washington state in 1982. She established herself and matured in the US both as a painter and a poet, creating artwork in the visual and literary, mostly in the US. She has also created artworks in Tunisia, Spain, Morocco, Russia and Chile. In 1986 she became the first North African English language poet in the United States to be published and awarded public funding for literary work and was nominated in 2007 for the Seattle Mayor’s Art Award and the Horace Mann Achievement Award. Both her visual art and literary work have been published, presented, critiqued and anthologized by art curators and literary scholars from the US, and overseas with solo and group exhibitions and poetry readings in general and academic settings since 1984. Gharbi’s has undergraduate and graduate degrees in Applied Communication/fine art and filmmaking from The Evergreen State College and Antioch University in the United States. She is a member of Academy of American Poets, Le PEN US, a former member of the Alumni Advisory Board of Antioch University, a founding member of several Northwest art organizations including the Northwest African and African American Artists Association which has branched out into several organizations, and Gallery 110 Seattle (of which she was the Diversity advising board member from 2017 to 2020).  She is a member of Puget Sound Group Northwest Artists, Washington’s Center on Contemporary Art, Artist Trust, and Washington Lawyers for the Arts. Gharbi has served as panelist/Juror for national art Fellowships or artist selections.She has made art contributions to various art organizations, including PONCHO, West Edge Sculpture and Artist Trust.
              </div>


    
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

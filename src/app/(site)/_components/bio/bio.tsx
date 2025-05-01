"use client"
import React, { useState } from 'react'
import Image from 'next/image';

export default function Biography() {
  const [showFullText, setShowFullText] = useState(false);

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
          Rajaa A. Gharbi is an international multi-disciplinary artist, poet and sociolinguist born and raised in Tunisia. She trained and worked for seven years as a multimedia artist with The National Puppet Theatre of Tunisia (OTEMA) at both its Ibn Rachiq Arts Center and later at its Rue de Marseille studios of which she was a founding member, and where she started translating into an interdisciplinary art form what she had been learning about textile and clothes design from her mother and story–telling from her father-Gharbi&apos;s paternal grandmother was Tunisia&apos;s last king/Bey&apos;s storyteller. She passionately sculpted, painted, costumed, created masks, and performed in Tunisia&apos;s prestigious and neighborhood theatres the tige-marionettes characters that she had created with the mentorship of Abdel Haq Khmir, and later with Tahar Jerbi. In 1977 she became Tunisia&apos;s first salaried female puppet theatre artist.
          </div>

            <div className="flex justify-between items-start gap-[60px] flex-col md:flex-row">
              <div className="max-w-[487px] text-color5 text-base font-normal leading-relaxed">
              The same year the National Puppet Theatre of Tunisia (OTEMA) hosted performances by the visiting Boulder, Colorado Black Light Puppet Theatre of which Gharbi&apos;s future husband was a leading puppeteer. Gharbi agreed to leave the OTEMA and move with her husband to Morocco with the prenuptial condition that the couple will start its own puppet theatre in Fez, Morocco- The prenuptial condition never materialized.
              </div>
              <div className="img max-w-[653px] h-[200px] rounded-xl overflow-hidden">
                  <Image className="flex-1 object-cover bg-cover scale-110 bg-center" height={700} width={700} src="/images/image2.png" alt="biography" />
              </div>
            </div>

            <div className={`flex flex-col gap-6 transition-all duration-300 ${showFullText ? 'opacity-100 max-h-[5000px]' : 'opacity-30 max-h-24 overflow-hidden'}`}>
              <div className="text-color5 text-base font-normal leading-relaxed">
                In Morocco, Gharbi was invited by playwright and international theatre leader Tayeb Saddiki to join as a marionettist and actor the Casablanca Municipal Theatre. A daily commute between Casablanca and Fez where she lived from 1977 to 1982 was impossible. She continued painting and occasionally acting in film. After experimenting in costume design with Swiss German filmmaker Daniel Schmidt she moved to Washington state in 1982. She established herself and matured in the US both as a painter and a poet, creating artwork in the visual and literary, mostly in the US. She has also created artworks in Tunisia, Spain, Morocco, Russia and Chile.
              </div>

              <div className="text-color5 text-base font-normal leading-relaxed">
                <h3 className="font-semibold mb-4">Selected awards, Academic Studies, and Presentations as Featured Artist</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tunisia&apos;s Hannibal Arts and Culture Grant Award for retrospective art exhibition given by H.E. M. Najib Hachana, Ambassador of Tunisia to the US in Washington, DC, 2006.</li>
                  <li>The US Department of State&apos;s Official Diplomatic Calendar invited feature artist: three paintings, 2011.</li>
                  <li>Nomination for Tunisia&apos;s National Book Translation Award; From Songs of Bridges/Men Aghani Aljousour, Paintings and selected poems (Medali Editions, Tunis, Tunisia 2018).</li>
                  <li>Achievement Award, the International Arab Women Artists Biennale conference in Sousse, Tunisia, 2012.</li>
                  <li>Tunisia&apos;s National Television and radio stations, Le Maghreb, La Presse, Assahafa, and Le Temps National Newspapers, featured artist and writer; interviews, published paintings, and Gharbi&apos;s books&apos; covers, 1990, 1993, 1994, 2009, 2011, 2012 and 2018.</li>
                  <li>NPR Featured artist, 2004, 2006.</li>
                  <li>PBS International Goodwill Arts Festival, 1990.</li>
                  <li>Encyclopedia of Arab American Artists; Rajaa Gharbi&apos;s Fine Art and poetry USA 2007 (Dr. Fayeq Oweis Heinemann 2007). Featured artist, article, and Paintings.</li>
                  <li>The Circle of Departure and Return: A Reading of Songs of Bridges, Paintings, and Poems written in English and translated to Arabic by Rajaa Gharbi, a study by Dr. Fatma Lakhdhar, writer and literary critic University of Tunis (Jinanu alareef, Tunisia 2015).</li>
                  <li>We Have Crossed Many Rivers, New Poetry from Africa Anthology, featured poet, (Dr. Diké Okoro Northwestern University Illinois and Lagos Nigeria 2012).</li>
                  <li>Poetry reading tour across Chile, including Universidad Central de Chile in Santiago, Gabriela Mistral and Pablo Neruda Museums, 2022.</li>
                  <li>Connecticut College, New London, Connecticut, Moments of Freedom: Revolutionary Art from South Africa, China, and Tunisia Exhibition, featured artist and poet, 2014.</li>
                  <li>Art Residency Saint Petersburg, Russia, for her exhibition Tell Me More I, Conversation with Filonov, 2016.</li>
                  <li>Bellevue Art Museum and Bellevue College, Washington, featured artist and opening Gala keynote speaker, Arabic Arts, juried group exhibition, 2016.</li>
                  <li>Seattle International Art Fair, featured artist presented by Gallery110, 2019.</li>
                  <li>Artist Trust 30th Annual Fundraising Gala, featured artist, 2016.</li>
                  <li>The Poetry and Painting of Rajaa Gharbi, a study presented at the Eighth International Symposium on Comparative Literature Cairo University, Egypt (Dr. Nejib Redouane, writer and literary critic, University of California, Long Beach, 2006).</li>
                  <li>Subversive Compositional Techniques in art, School of Art and Sciences, Rutgers University, New Brunswick.</li>
                  <li>Multiple years featured author, the Elliott Bay Book Company, Washington State.</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-4">Selected books by Rajaa Gharbi</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>2018 Men Aghani Aljousour/ From Songs of Bridges, Paintings and selected poems written and translated by Rajaa Gharbi (Medali Editions, Tunis).</li>
                  <li>2004 From Songs of a Grasshopper, A book of poems and paintings-partly funded by King County Washington Arts Commission, Kehna publications).</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-4">Other articles, interviews, or portraits</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>2022 Best Things Washington: Essay on the exhibition From Another Impressionism</li>
                  <li>2022 International Gallerie Art Magazine, Mumbai, India 2022.</li>
                  <li>2021 Tell Me More II at Center on Contemporary Art Seattle, essay by Negarra A. Kudumu, Southern Oregon. Artists Resource.</li>
                  <li>2019 Seattle International Art Fair; online catalogue. Painting When the Silence Diacritic Speaks its Life.</li>
                  <li>2019 The PREVIEW Guide to Galleries and Museums, Best Things Washington, the Stranger Newspaper, Visit Seattle, painting, and previews.</li>
                  <li>2016 The Raven Chronicles Journal of Art and Literature US, review and book cover painting.</li>
                  <li>2014 The Seattle Symphony and Chamber Music; Live Performances and Poetry Program, featured poet.</li>
                  <li>2012 Town Hall, Seattle, Washington.</li>
                  <li>2010 Seattle&apos;s Central Library.</li>
                  <li>2006 National Public Radio (NPR).</li>
                  <li>2006 the Alliance Francaise&apos;s Journee Internationale de la Francophonie, and other media.</li>
                  <li>1996 Seattle Langston Hughes Arts Center.</li>
                  <li>1994 The East Glacier Reporter.</li>
                  <li>1992 Seattle&apos;s Intiman Theatre.</li>
                  <li>1992 Voice of America.</li>
                </ul>
              </div>

              <div className="text-color5 text-base font-normal leading-relaxed">
                <h3 className="font-semibold mb-4">Selected Solo Exhibitions</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>2023 Rajaa Gharbi Selected Works Gallery 110 Seattle</li>
                  <li>2022 From Another Impressionism, paintings, Gallery 110, Seattle</li>
                  <li>2021 Tell More II interactive non-electronic multimedia installations and acrylic paintings, Center on Contemporary Art Seattle, Washington</li>
                  <li>2020 Cauldron Delights, acrylic paintings, Gallery 110, Seattle</li>
                  <li>2019 Tell Me More I, interactive non-electronic multimedia installations and acrylic paintings, Gallery 110 Seattle</li>
                  <li>2014 Universal Signs of Life, Seattle Municipal Tower Art Gallery, exhibition curated by Seattle&apos;s Office of Art and Culture</li>
                  <li>2013 Circus and Steady Dancers, Windows Gallery, Seattle</li>
                  <li>2011 Selected Works Artisans on Taylor Gallery, Port Townsend, Washington</li>
                </ul>
              </div>

              <div className="text-color5 text-base font-normal leading-relaxed">
                <h3 className="font-semibold mb-4">Selected Group Exhibitions</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Voices Unbound Bellevue City Hall, Washington, National African American History Celebration group exhibition, featured artist, 2025</li>
                  <li>Member&apos;s Annual exhibition, Center on Contemporary Art, Seattle, Washington, 2024</li>
                  <li>Rajaa Gharbi Selected Works, guest artist, Art Gallery of SnoValley, 2024</li>
                  <li>National African American History Month; Northwest Group Exhibition G.S.A. Federal Building Art Space Portland, Oregon, 2016</li>
                  <li>Cairo Biennale, Egypt, projection, paintings, 2012</li>
                  <li>Black Palette Fine Art Exhibit, African American Art Museum&apos;s Seattle, Washington, 2010</li>
                  <li>International Indigenous Synergy Collaborative Works visual art exhibit at the San Francisco American Indian Contemporary Art Center, the C.M. Russell Museum, the Museum of the Great Plains, and Montana Historical Society 1996</li>
                </ul>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setShowFullText(!showFullText)}
            className="h-11 px-8 py-4 bg-color2 rounded-[22px] inline-flex justify-center items-center gap-3 cursor-pointer hover:bg-color1 transition-colors duration-300 self-center"
          >
            <div className="text-white text-base font-medium leading-none">
              {showFullText ? 'Show Less' : 'Read More'}
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

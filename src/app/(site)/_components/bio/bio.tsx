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
          <div className="px-6 py-2.5 border-b-2 border-[#ff6b00] flex justify-center items-center gap-3">
            <div className="text-[#ff6b00] text-base font-normal leading-none">Biography</div>
          </div>
          <div className="inline-flex justify-center items-center gap-2.5">
            <div className="max-w-[1099px] text-center">
              <span className="text-[#1d1f2c] text-[40px] font-semibold leading-[46px]">Here All You Can </span>
              <span className="text-[#ff6b00] text-[40px] font-semibold leading-[46px]">Know About Me</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start gap-[60px] flex-col md:flex-row">
              <div className="max-w-[487px] text-[#4a4c56] text-base font-normal leading-relaxed">
                Rajaa A. Gharbi is an international painter, poet, socio-linguist and filmmaker. She was born and raised in Tunisia where she was a multimedia artist with the OTEMA (Organization Nationale de Theatre de Marionnettes) at Ibn Rachiq Arts Center, and an apprentice filmmaker with the Rue de Marseille Cine-club in Tunis, from middle school until she moved to Morocco in 1977.
              </div>
              <div className="img max-w-[653px] h-[200px] rounded-xl overflow-hidden">
                  <Image className="flex-1 object-cover bg-cover scale-110 bg-center" height={700} width={700} src="/images/image2.png" alt="biography" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="text-[#4a4c56] text-base font-normal leading-relaxed">
                At the Ibn Rachiq Arts Center she was able to begin translating into an interdisciplinary art form what she had been learning since early childhood in textile work and clothes design from her mother and story–telling from her father. She passionately sculpted, painted, costumed, and performed in Tunisia&apos;s prestigious and neighborhood theatres the tige-marionnettes characters that she had created with the Organization Nationale de Theatre de Marionnettes, with the mentorship of Abdel Haq Khmir, and later with Tahar Jerbi. In 1977 she became the first Tunisian woman to begin working as a salaried marrionettist.
              </div>
              <div className="text-[#4a4c56] text-base font-normal leading-relaxed">
                In Morocco, she was invited by playwright and North African theatre leader Tayeb Seddiki to join, as a marionnetist and actor, the Casablanca Municipal Theatre which he has been directing since the mid-seventies. A daily commute between Casablanca and Fez where she lived from 1977 to 1982 was not possible. She continued painting and occasionally acting in film until she moved to the United States in 1982. Gharbi has been living in Seattle, Washington and Tunis since then, when possible, creating artwork in the visual and literary in Spain, Morocco and France.
              </div>
              <div className="text-[#4a4c56] text-base font-normal leading-relaxed">
                Gharbi is the first North African English language poet in the United States to have been published and awarded public funding for literary work (1986-2006) and both her visual art and literary work have been published, presented, critiqued and anthologized by art curators and literary scholars from North Africa and the United States with solo and group exhibitions since 1984.
              </div>
              <div className="flex flex-col lg:flex-row justify-between gap-[42px] w-full">
                <div className="lg:w-[610px] flex flex-col justify-center gap-2.5">
                  <div className="text-[#4a4c56] text-base font-normal leading-relaxed">
                    Between 1997 and 2011 Gharbi&apos;s visual art and poetry were celebrated in a number of events including an invitation for feature publication in the USA state department&apos;s 2011 Official Diplomatic Calendar, a 2006 Honor retrospective exhibition, poetry recital and signing of her book of paintings and poems ...From Songs of a Grasshopper (Kehna Publications 2004) given by H.E. Najib Hachana, Ambassador of Tunisia to the United States in Washington DC, a special inclusion of her Fine art and poetry work appeared in the Encyclopedia of Arab American Artists, USA 2007 (Dr. Fayeq Oweis Heinemann 2007). Also in 2007 she was nominated for the Seattle Mayor&apos;s Art Award and the Horace Mann Achievement Award. In 2006 an extensive study of her poetry and paintings was presented at the Power and the Role of the Intellectual-the Eighth International Symposium on Comparative Literature, Cairo, Egypt (Dr. Najib Redouane writer and literary critic, University of California Long Beach). Also in 2006, on the occasion of Tunisia&apos;s 50th year of independence, she was the first North African artist and English language poet to be invited to publish paintings and poetry work in the French-language anthology Expressions Maghrebines, and gave, as an artist, the opening keynote address for Working Mother Magazine&apos;s Town Hall.
                  </div>
                </div>
                <div className="lg:w-[548px] h-[461px] rounded-xl overflow-hidden">
                  <Image className="w-full h-full object-cover" height={461} width={548} src="/images/image6.png" alt="biography additional" />
                </div>
              </div>
              <div className="text-[#4a4c56] text-base font-normal leading-relaxed">
                Presentations of Gharbi&apos;s work also include, Subversive Compositional Techniques in art, course at Rutgers University 2011, Seattle Reads 2010, African American Art Museum&apos;s Black Palette Fine Art Exhibit 2009, visual art exhibit &quot;International Indigenous Synergy Collaborative Works&quot; at the San Francisco American Indian Contemporary Art Center in 1996, the C.M. Russell Museum, the Museum of the Great Plains, and Montana Historical Society.
              </div>
              <div className="text-[#4a4c56] text-base font-normal leading-relaxed">
                Gharbi&apos;s solo exhibitions in the USA include 2011, 2010 Selected Works GHAYYA Studio, 2009 Collective Psyches Artisans On Taylor, 2009 Selected Works Seattle Broadway Last Friday, 2008 Selected Works GHAYYA Studio, 2006 Retrospective Exhibit Cultural Space Embassy of Tunisia, 2005 show &quot;Yes In Spite of Steel Walls&quot; Art & Soul Gallery, 2005 &quot;Eyes beyond Typhoons&quot; Ghayya Gallery, 2005 &quot;Selected Works&quot; West Seattle Chamber of Commerce, 2004 &quot;In Storms and Fresh Ink&quot; Ghayya Gallery, 2003&quot;Images, Scripts and Diacritical Signs&quot; Gallery 110, 2003 &quot;An Archeology of Languaging&quot; M. Rosetta Hunter Gallery, 2001 &quot;...From Songs of a Grasshopper paintings&quot; at Antioch University, and in 1996 &quot;A Story of Language&quot; at Antioch University.
              </div>
              <div className="text-[#4a4c56] text-base font-normal leading-relaxed">
                Gharbi has talked about her visual art and read from her published poetry at numerous art, media, and literary venues including Tunisia&apos;s National Television, radio and La Presse, Assahafa, and Le Temps Newspapers, National Public Radio (NPR), Voice of America, The International African Diaspora Film Festival at Columbia University, Bumbershoot&apos;s International Readers program, Seattle&apos;s Museum of History and Industry, Elliott Bay Book Company, PBS&apos;s International Goodwill Arts Festival, The East Glacier Reporter, Seattle&apos;s Langston Hughes Arts Center, Seattle&apos;s Intiman Theatre, Edmond Washington Black Box Theatre, Seattle&apos;s Central Library and Town Hall, the Alliance Francaise&apos;s Journee Internationale de la Francophonie, The Cauldron&apos;s Bird&apos;s Nest and other media.
              </div>
              <div className="text-[#4a4c56] text-base font-normal leading-relaxed">
                Gharbi&apos;s work continues to be invited to national and international events. Some of which are the USA Womens&apos; Caucus for Art, the International Minoan Celebration of Partnership, Heraklion, Crete, and World Congress of Poets in Greece, Poetas del Mundo annual Rencontre Internationale de Poesie, Santiago, Chili and Havana, Cuba, International Academy Orient-Occident, Curtea de Argeş, Romania, , 2011 Asociaciòn Tunecina De Hispanistas, Tunis, Tunisia, Art Biennale, Cairo, Egypt, Salon d&apos;Automne, Paris France.
              </div>
              <div className="text-[#4a4c56] text-base font-normal leading-relaxed">
                Gharbi&apos;s formal education is in fine art, filmmaking, creative writing, and socio-linguistics with an MA in Whole Systems Design-Transcultural Communications from Antioch University. She is a member of the Academy of American Poets, the Tunisian Writers&apos; National Association, the Tunisian Union of Fine Artists, Poetas del Mundo, Washington Lawyers for the Arts, Seattle Art Museum&apos;s African Arts Council, and Antioch University Alumni Council. She is a contributing artist to PONCHO, West Edge Sculpture and Artist Trust, An Arabic language book of New and Selected poems by Rajaa A. Gharbi will be published in Tunisia in 2012. She is a featured artist in London&apos;s LAHD Gallery&apos;s 2012 Contemporary Tunisia exhibition. Her upcoming solo show is in Chelsea New York (2013) and her workis also scheduled to appear this year in anthologies including New Poetry From AfricaUSA and the World Congress of Poets Greece.
              </div>
              <div className="text-[#4a4c56] text-base font-normal leading-relaxed">
                <span className="font-medium">Gharbi is represented in the United States and Tunisia. For bookings, studio visits or more information, please email </span>
                <a href="mailto:contact@rajaagharbi.com" className="font-medium underline">contact@rajaagharbi.com</a>
                <span className="font-medium">, visit her website: RajaaGharbi.com or call in the USA 206-816-9378, in Tunisia 216-55-748-212</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

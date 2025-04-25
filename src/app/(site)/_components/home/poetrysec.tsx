import Image from 'next/image'
import React from 'react'
import { HiOutlineDownload, HiOutlineMail } from 'react-icons/hi'

export default function Poetrysec() {
  return (
    <div className="main py-20 mx-4 lg:mx-0">
    <div className="container">
      <div className="content">

          {/* top frame */}
<div className=" flex justify-center items-center mb-20">
    <Image src="/icon/ptrntop.svg" alt="artist" width={2000} height={2000} className="w-[636px] h-auto" />
</div>

{/* title */}
<div className="flex flex-col justify-start items-center gap-6 mb-[60px]">
  <div className="px-6 py-2.5 border-b-2 border-color2 flex justify-center items-center gap-3">
    <div className="justify-center text-color2 text-base font-normal leading-none"> </div>
  </div>
  <div className="flex justify-center items-center gap-2.5">
    <div className="max-w-[1099px] text-center justify-center"><span className="text-color1 text-[40px] font-semibold leading-[46px]">The Poetry of </span><span className="text-color2 text-[40px] font-semibold leading-[46px]">Rajaa Gharbi</span></div>
  </div>
</div>

{/* content */}
<div className="content md:grid grid-cols-12 gap-[60px] justify-between">
  <div className="col-span-5 mb-10 md:mb-0 h-auto">
    <Image className="w-full h-auto md:w-[506px] md:h-[736px] rounded-xl" src="/images/image4.png" alt="artist" width={2000} height={2000}/>
  </div>
  <div className="col-span-7 flex flex-col justify-start items-start gap-7">
    <div className="w-full md:w-[640px] justify-center text-base font-normal font-['Poppins'] leading-relaxed">
      Gharbi&apos;s writing and visual arts have been critically acclaimed by writers, artists and art organizers, and her book ...From Songs of a Grasshopper has been  attaining recognition as seminal work that is both refreshing and challenging in its themes as well as its aesthetics...Subject and object... brilliant, authoritative work ...From Songs of a Grasshopper is a book of selected memoirs fluidly interweaving poetry, painting and prosems* written between 1982 and 2004 in the United States, Tunisia, Morocco and Spain with color and B&W paintings exhibited during the same period. All poems in the book are simultaneously independent and connected to each other and the paintings reproduced in the book (Najib Redouane).
    </div>
    <div className="w-full flex flex-col justify-start items-start gap-8">
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <div className="h-[23px] inline-flex justify-start items-center gap-2">
          <div className="justify-start text-color5 text-lg font-medium leading-normal">About the poet</div>
          <div className="w-[63px] h-0 outline-[1.50px] outline-offset-[-0.75px] outline-color2 "></div>
        </div>
        <div className="w-full justify-center text-base font-normal font-['Poppins'] leading-relaxed">
          ...From Songs of a Grasshopper is an uncompromised narrative that begins at the book&apos;s front cover with Gharbi&apos;s painting titled &ldquo;Memory before the Tablet&rdquo;. The author meditates on Love, language, religion, exile, identity, poetry, History and the tightly woven relationship between religion and poetry as she investigates and lives them in her native country and in the United States ...The poetics of her writing embody a motion that is unpredictable...with linguistic and spiritual resonances that open the door of the wondrous and the sublime [whether she] is proposing her own re-interpretation of the History and evolution of the Arabic language, a phrase from the bible, or a verse from the Quoraan... Her words, are like blood that emerges to translate the interiority of silence...She looks into the night for what transcends it...giving space to poetic meanings that initiate an enriching dialogue.&rdquo; (N.R)
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-start items-start md:items-center gap-6">
        <div className="w-full md:w-auto px-7 py-2.5 bg-color7 rounded-xl flex justify-start items-center gap-3">
          <div className="w-10 h-10 p-[5px] bg-white/20 rounded-[20px] flex justify-center items-center gap-2.5">
            <HiOutlineDownload className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 md:flex-none inline-flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch justify-start text-white text-base font-medium font-['Poppins'] leading-tight">Download This Poet</div>
            <div className="self-stretch justify-start text-white text-sm font-normal font-['Poppins'] leading-[18.20px]">The Poetry of Abdul</div>
          </div>
        </div>
        <div className="w-full md:w-auto px-7 py-2.5 bg-color7 rounded-xl flex justify-start items-center gap-3">
          <div className="w-10 h-10 p-[5px] bg-white/20 rounded-[20px] flex justify-center items-center gap-2.5">
            <HiOutlineMail className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 md:flex-none inline-flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch justify-start text-white text-base font-medium font-['Poppins'] leading-tight">Email Us</div>
            <div className="self-stretch justify-start text-white text-sm font-normal font-['Poppins'] leading-[18.20px]">demo@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


          {/* top frame */}
          <div className=" flex justify-center items-center mt-20">
    <Image src="/icon/ptrnbuttom.svg" alt="artist" width={2000} height={2000} className="w-[636px] h-auto" />
</div>

      </div>
    </div>
  </div>
  )
}

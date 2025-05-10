import Image from "next/image";
import React from "react";
import { HiOutlineDownload, HiOutlineMail } from "react-icons/hi";

export default function Poetrysec() {
  const handleEmailClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contactsec");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const win = window.open("", "_blank");
    if (win) {
      win.document.write(`
        <html>
          <head><title>Download Images</title></head>
          <body style='margin:0;padding:0;display:flex;flex-direction:column;align-items:center;background:#111;'>
            <img src='/latest/prg1.jpg' style='max-width:90vw;max-height:160vh;margin:20px 0;'/>
            <img src='/latest/prg2.jpg' style='max-width:90vw;max-height:160vh;margin:20px 0;'/>
          </body>
        </html>
      `);
      win.document.close();
    }
  };

  return (
    <div className="main mx-4 lg:mx-0 md:mt-[80px] my-0 -mb-[80px]">
      <div className="container">
        <div className="content">
          {/* top frame */}
          <div className=" flex justify-center items-center mb-20">
            <Image
              src="/icon/ptrntop.svg"
              alt="artist"
              width={2000}
              height={2000}
              className="w-[636px] h-auto"
            />
          </div>

          {/* title */}
          <div className="flex flex-col justify-start items-center gap-6 mb-[60px]">
            <div className="px-6 py-2.5 border-b-2 border-color2 flex justify-center items-center gap-3">
              <div className="justify-center text-color2 text-base font-normal leading-none">
                {" "}
              </div>
            </div>
            <div className="flex justify-center items-center gap-2.5">
              <div className="max-w-[1099px] text-center justify-center">
                <span className="text-color1 text-[40px] font-semibold leading-[46px]">
                  The Poetry of{" "}
                </span>
                <span className="text-color2 text-[40px] font-semibold leading-[46px]">
                  Rajaa Gharbi
                </span>
              </div>
            </div>
          </div>

          {/* content */}
          <div className="content md:grid grid-cols-12 gap-[60px] justify-between">
            <div className="col-span-5 mb-10 md:mb-0 h-[650px] shadow-2xl">
              <Image
                className="w-full h-auto md:w-[506px] md:h-[650px] rounded-xl object-cover"
                src="/latest/prg.jpg"
                alt="artist"
                width={2000}
                height={2000}
              />
            </div>
            <div className="col-span-7 flex flex-col justify-start items-start gap-7">
              <div className="w-full flex flex-col justify-start items-start gap-8">
                <div className="content">
                  {/* top part */}

                  <div className="w-[70%] justify-center mb-[16px]">
                    ...Rajaa Gharbi&apos;swriting is steeped in symbolism...of
                    different terrains of meanings that paint with wordswhere
                    the poetmakestheunraveling ofthe third person pronouna
                    spiritual rebirththat reaches deep flight into
                    psychologiesand intoone&apos;s being;as the poet comments:
                    &ldquo;It&apos;s importantto writeinthe first person
                    pronoun, the pronoun of thehistorian, the creator,the
                    witness, the documentarian,the analyst, the one who
                    defiesthe pains of silence or its comforts. <br />
                  </div>

                  <div className="w-[70%] justify-center mb-[16px]" dir="rtl">
                    بالطبع، إليك إعادة صياغة للنص الموجود في الصورة بلغة عربية
                    واضحة وسلسة: &ldquo;الكتابة التي تمارسها الشاعرة تنتمي إلى
                    الشعر الرمزي، حيث تتعدد دلالاتها وتتنوع معانيها. فهي كتابة
                    تستكشف عمق الذات وتغوص في التأويل، متجاوزة الشكل الظاهري
                    للكلمات، لتصوغ هي ضمير الغائب بأنفاسٍ داخلية وروح تتفاعل مع
                    الكون والوجود. وكما تصف الشاعرة: &lsquo;إنها كتابة بصوت
                    الحاضر، الأنا الساردة، الشاهد، المبدع، المتأمل، الذي يواجه
                    عذابات الصمت أو يجد فيها سكينته.&rsquo;&rdquo; هل ترغب في
                    تلخيصه أيضًا؟
                    <br />
                    <span className="text-base font-medium leading-relaxed">
                      Dr. Fatma Lakhdhar, Writer, literary Critic, University of
                      Tunis-
                    </span>
                  </div>

                  <div className="w-[70%] justify-center mb-[16px]">
                    ...Herpoetic writing is fresh, powerful... it
                    commandsattention and mandates its own articulations of verb
                    and meaning. It establishes an innovationin the emotional
                    and the esthetic in this North American context. But her
                    writing goes beyond [it] thanks to her quest for the
                    universal... Pearls of Love... Her reflections on Poetry are
                    sublime...A warrior for light...
                  </div>

                  <div className="w-[70%] justify-center mb-[16px]">
                    Son écriture poétique est fraiche et forte qui force
                    l&apos;attention et exige ses propres articulations
                    compréhensives verbales. C&apos;est une mise au point
                    affectif et esthétique dans ce contexte nord-américain. Mais
                    son écriture va plus loin grâce à cette quêtede
                    l&apos;universel ... perles d&apos;Amour... sa réflexionsur
                    la poésie est sublime...une guerrière de la
                    lumière...C&apos;est une grande joie et un immense honneur
                    d&apos;avoir cette écrivaine dans Le Maghreb Littéraire...
                    <br />
                    <span className="text-base font-medium leading-relaxed">
                      -Dr. Najib Redouane,Literary critic Chief editor of the
                      internationalLe Maghreb Littéraire
                    </span>
                  </div>

                  <div className="w-[70%] justify-center mb-[16px]">
                    Gharbi&apos;s visuals read like poemsand her poems read like
                    poems. She dissects meaning and reinstates it in a narrative
                    context that embraces forces of an intuitive nature...
                  </div>

                  <div className="w-[70%] justify-center mb-[16px]">
                    L&apos;art visuelde Gharbi se lit comme des poèmes et ses
                    poèmes se lisent comme de l&apos;art visuel... Elle dissèque
                    le sens et le réintègredans un contextede récit qui embrasse
                    des forces d&apos;une nature intuitive...
                    <br />
                    <span className="text-base font-medium leading-relaxed">
                      -American Artist Joe Fedderson
                    </span>
                  </div>

                  <div className="w-[70%] justify-center mb-[16px]">
                    ...Tunisian-born artist/poet Rajaa A. Gharbi enthralled the
                    audience at her poetry reading and book signing...
                  </div>

                  <div className="w-[70%] justify-center mb-[16px]">
                    L&apos;artiste et poète d&apos;origine Tunisienne Rajaa
                    Gharbi a emerveillé l&apos;audience pendant sa lecture et
                    signature de livre à l&apos;espace culturel de
                    l&apos;ambassade de Tunisie... <br />
                    <span className="text-base font-medium leading-relaxed">
                      -The Washington Report on Middle East Affairs
                    </span>
                  </div>

                  <div className="w-[70%] justify-center mb-[16px]">
                    ...In I-dentity&rdquo;, the poetic voice employs an image
                    &ndash;metaphor &ndash;that comes back to haunt the
                    fortunate reader. This successful metaphor is but one of
                    many in this delightful book of words and images.
                  </div>

                  <div className="w-[70%] justify-center mb-[16px]">
                    ...Dans le poème&ldquo;I-Dentity&rdquo; la voix poetique
                    emploie une image-métaphore qui revient pour hanter le
                    chanceux lecteur. <br />
                    <span className="text-base font-medium leading-relaxed">
                      -Dena Bugel-Shunra Literary and Judiciary Hebrew
                      Translator, Proteus publication
                    </span>
                  </div>

                  <div className="w-[70%] justify-center mb-[16px]">
                    ...I was moved by both the scope and depth of her work. Her
                    strength of expression in the English language is
                    extraordinary.
                  </div>

                  <div className="w-[70%] justify-center mb-[16px]">
                    ...J&apos;étais touchée aussi bien par l&apos;étendue que
                    par la profondeur de son travail. La force de son expression
                    dans la langue anglaise est extraordinaire. <br />
                    <span className="text-base font-medium leading-relaxed">
                      -Reader, Malti Greenberg
                    </span>
                  </div>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-start items-start md:items-center gap-6">
                  <div
                    className="w-full md:w-auto px-7 py-2.5 bg-color7 rounded-xl flex justify-start items-center gap-3 cursor-pointer"
                    onClick={handleDownloadClick}
                  >
                    <div className="w-10 h-10 p-[5px] bg-white/20 rounded-[20px] flex justify-center items-center gap-2.5">
                      <HiOutlineDownload className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 md:flex-none inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="self-stretch justify-start text-white text-base font-medium font-['Poppins'] leading-tight">
                        Download This Poet
                      </div>
                      <div className="self-stretch justify-start text-white text-sm font-normal font-['Poppins'] leading-[18.20px]">
                        The Poetry of Rajaa Gharbi
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-full md:w-auto px-7 py-2.5 bg-color7 rounded-xl flex justify-start items-center gap-3 cursor-pointer"
                    onClick={handleEmailClick}
                  >
                    <div className="w-10 h-10 p-[5px] bg-white/20 rounded-[20px] flex justify-center items-center gap-2.5">
                      <HiOutlineMail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 md:flex-none inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="self-stretch justify-start text-white text-base font-medium font-['Poppins'] leading-tight">
                        Email Us
                      </div>
                      <div className="self-stretch justify-start text-white text-sm font-normal font-['Poppins'] leading-[18.20px]">
                        contact@rajaagharbi.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

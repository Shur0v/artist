import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="main py-20 mx-4 lg:mx-0">
      <div className="container">
        <div className="content">


        <div className=" inline-flex justify-start items-start gap-[60px]">
  <div className="w-96 inline-flex flex-col justify-start items-start gap-8">
    <div className="max-w-[135px] flex flex-col justify-start items-start gap-2">
      <div className="self-stretch inline-flex justify-start items-center gap-2">
        <div className="justify-start text-[#4a4c56] text-base font-normal font-['Poppins'] leading-tight">Contact</div>
        <div className="max-w-[60px] h-0 outline-1 outline-offset-[-0.50px] outline-[#ff6b00]"></div>
      </div>
      <div className="self-stretch justify-start text-[#1d1f2c] text-2xl font-semibold font-['Poppins'] leading-[31.20px]">Contact Us</div>
    </div>



    <div className="self-stretch flex flex-col justify-start items-start gap-6">


      <div className="self-stretch inline-flex justify-start items-center gap-[13px]">
        <div className="w-10 h-10 p-[5px] bg-[#ff6b00]/20 rounded-[20px] flex justify-center items-center gap-2.5">
          <div className="w-6 h-6 relative overflow-hidden">
          <Image className="w-[102px]" src="/icon/location.svg" alt="artist" width={2000} height={2000}/>
          </div>
        </div>
        <div className="w-[272px] inline-flex flex-col justify-start items-start gap-1.5">
          <div className="self-stretch justify-start text-[#1d1f2c] text-base font-medium font-['Poppins'] leading-tight">Address</div>
          <div className="self-stretch justify-start text-[#777980] text-sm font-normal font-['Poppins'] leading-[18.20px]">A108 Adam Street, New York, NY 535022</div>
        </div>
      </div>

      <div className="self-stretch inline-flex justify-start items-center gap-[13px]">
        <div className="w-10 h-10 p-[5px] bg-[#ff6b00]/20 rounded-[20px] flex justify-center items-center gap-2.5">
          <div className="w-6 h-6 relative overflow-hidden">
          <Image className="w-[102px]" src="/icon/call.svg" alt="artist" width={2000} height={2000}/>
          </div>
        </div>
        <div className="w-[272px] inline-flex flex-col justify-start items-start gap-1.5">
          <div className="self-stretch justify-start text-[#1d1f2c] text-base font-medium font-['Poppins'] leading-tight">Call Us</div>
          <div className="self-stretch justify-start text-[#777980] text-sm font-normal font-['Poppins'] leading-[18.20px]">+1 5589 55488 55</div>
        </div>
      </div>

      <div className="self-stretch inline-flex justify-start items-center gap-[13px]">
        <div className="w-10 h-10 p-[5px] bg-[#ff6b00]/20 rounded-[20px] flex justify-center items-center gap-2.5">
          <div className="w-6 h-6 relative overflow-hidden">
          <Image className="w-[102px]" src="/icon/mail.svg" alt="artist" width={2000} height={2000}/>
          </div>
        </div>
        <div className="w-[272px] inline-flex flex-col justify-start items-start gap-1.5">
          <div className="self-stretch justify-start text-[#1d1f2c] text-base font-medium font-['Poppins'] leading-tight">Email Us</div>
          <div className="self-stretch justify-start text-[#777980] text-sm font-normal font-['Poppins'] leading-[18.20px]">demo@gmail.com</div>
        </div>
      </div>


    </div>
  </div>
  <div className="w-[756px] self-stretch inline-flex flex-col justify-start items-start gap-6">
    <div className="self-stretch flex flex-col justify-start items-start gap-3">
      <div className="self-stretch inline-flex justify-start items-start gap-3">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
          <div className="inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-[#777980] text-base font-normal font-['Poppins'] leading-relaxed">Your Name</div>
          </div>
          <div className="self-stretch h-14 px-[18px] py-3.5 bg-white rounded-md border-[0.60px] border-black/20" />
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
          <div className="inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-[#777980] text-base font-normal font-['Poppins'] leading-relaxed">Your Email</div>
          </div>
          <div className="self-stretch h-14 px-[18px] py-3.5 bg-white rounded-md border-[0.60px] border-black/20" />
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-3">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
          <div className="inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-[#777980] text-base font-normal font-['Poppins'] leading-relaxed">Subject</div>
          </div>
          <div className="self-stretch h-14 px-[18px] py-3.5 bg-white rounded-md border-[0.60px] border-black/20" />
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div className="inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-[#777980] text-base font-normal font-['Poppins'] leading-relaxed">Message</div>
          </div>
          <div className="self-stretch h-[168px] px-[18px] py-3.5 bg-white rounded-md outline outline-[0.60px] outline-offset-[-0.60px] outline-black/20 inline-flex justify-start items-start gap-4">
            <div className="justify-start text-[#a5a5ab] text-base font-normal font-['Poppins'] leading-relaxed">Share your thoughts...</div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-col justify-start items-center gap-20">
      <div className="self-stretch h-14 px-7 py-4 bg-[#ff6b00] rounded-[10px] inline-flex justify-center items-center gap-4">
        <div className="justify-center text-[#fef7f9] text-xl font-medium font-['Poppins'] leading-7">Send Message</div>
      </div>
    </div>
  </div>
</div>


        </div>
      </div>
    </div>
  );
}

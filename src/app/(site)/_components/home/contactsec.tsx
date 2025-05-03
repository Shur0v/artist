"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contactsec() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission here
    
    // Reset form after successful submission
    reset();
  };

  return (
    <div className="main py-20 mx-4 lg:mx-0 md:my-[220px] my-20">
      <div className="container">
        <div className="content">
          <div className="both flex justify-between flex-col lg:flex-row">
            {/* left Content */}
            <div>
              {/* Left Side - Contact Info */}
              {/* Contact Title */}
              <div className="max-w-[135px] flex flex-col justify-start items-start gap-2">
                <div className="self-stretch inline-flex justify-start items-center gap-2">
                  <div className="justify-start text-base font-normal leading-tight">Contact</div>
                  <div className="w-[60px] h-0 outline-1 outline-offset-[-0.50px] outline-color2"></div>
                </div>
                <div className="self-stretch justify-start text-color1 text-2xl font-semibold leading-[31.20px] mb-8">Contact Us</div>
              </div>

              <div className="lg:col-span-4 inline-flex flex-col justify-start items-start gap-6">
                {/* Address */}
                <div className="self-stretch inline-flex justify-start items-center gap-[13px]">
                  <div className="w-10 h-10 p-[5px] bg-color2/20 rounded-[20px] flex justify-center items-center">
                    <HiOutlineLocationMarker className="w-6 h-6 text-color2" />
                  </div>
                  <div className="max-w-[272px] inline-flex flex-col justify-start items-start gap-1.5">
                    <div className="self-stretch justify-start text-color1 text-base font-medium leading-tight">Address</div>
                    <div className="self-stretch justify-start text-color5 text-sm font-normal leading-[18.20px]">2518 Adams Street, New York, NY 53022</div>
                  </div>
                </div>

                {/* Call Us */}
                <div className="self-stretch inline-flex justify-start items-center gap-[13px]">
                  <div className="w-10 h-10 p-[5px] bg-color2/20 rounded-[20px] flex justify-center items-center">
                    <HiOutlinePhone className="w-6 h-6 text-color2" />
                  </div>
                  <div className="max-w-[272px] inline-flex flex-col justify-start items-start gap-1.5">
                    <div className="self-stretch justify-start text-color1 text-base font-medium leading-tight">Call Us</div>
                    <div className="self-stretch justify-start text-color5 text-sm font-normal leading-[18.20px]">(206)816-9378</div>
                  </div>
                </div>

                {/* Email Us */}
                <div className="self-stretch inline-flex justify-start items-center gap-[13px]">
                  <div className="w-10 h-10 p-[5px] bg-color2/20 rounded-[20px] flex justify-center items-center">
                    <HiOutlineMail className="w-6 h-6 text-color2" />
                  </div>
                  <div className="max-w-[272px] inline-flex flex-col justify-start items-start gap-1.5">
                    <div className="self-stretch justify-start text-color1 text-base font-medium leading-tight">Email Us</div>
                    <div className="self-stretch justify-start text-color5 text-sm font-normal leading-[18.20px]">demo@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="w-full lg:w-[756px] mt-8 lg:mt-0">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full inline-flex flex-col justify-start items-start gap-6">
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  <div className="self-stretch inline-flex justify-start items-start gap-3 flex-col md:flex-row">
                    <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-2">
                      <div className="inline-flex justify-center items-center gap-2.5">
                        <div className="justify-start text-color5 text-base font-normal font-['Poppins'] leading-relaxed">Your Name</div>
                      </div>
                      <input
                        type="text"
                        {...register("name", { required: true })}
                        className="self-stretch h-14 px-[18px] py-3.5 bg-white rounded-md border-[0.60px] border-black/20 focus:outline-none focus:border-color2 w-full"
                      />
                      {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>
                    <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-2">
                      <div className="inline-flex justify-center items-center gap-2.5">
                        <div className="justify-start text-color5 text-base font-normal font-['Poppins'] leading-relaxed">Your Email</div>
                      </div>
                      <input
                        type="email"
                        {...register("email", { 
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                        })}
                        className="self-stretch h-14 px-[18px] py-3.5 bg-white rounded-md border-[0.60px] border-black/20 focus:outline-none focus:border-color2  w-full"
                      />
                      {errors.email && <span className="text-red-500 text-sm">Please enter a valid email</span>}
                    </div>
                  </div>

                  <div className="self-stretch inline-flex justify-start items-start gap-3">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 w-full">
                      <div className="inline-flex justify-center items-center gap-2.5">
                        <div className="justify-start text-color5 text-base font-normal font-['Poppins'] leading-relaxed">Subject</div>
                      </div>
                      <input
                        type="text"
                        {...register("subject", { required: true })}
                        className="self-stretch h-14 px-[18px] py-3.5 bg-white rounded-md border-[0.60px] border-black/20 focus:outline-none focus:border-color2  w-full"
                      />
                      {errors.subject && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>
                  </div>

                  <div className="self-stretch flex flex-col justify-start items-start gap-8 w-full">
                    <div className="self-stretch flex flex-col justify-start items-start gap-2 w-full">
                      <div className="inline-flex justify-center items-center gap-2.5">
                        <div className="justify-start text-color5 text-base font-normal font-['Poppins'] leading-relaxed">Message</div>
                      </div>
                      <textarea
                        {...register("message", { required: true })}
                        rows={6}
                        placeholder="Share your thoughts..."
                        className="self-stretch h-[168px] px-[18px] py-3.5 bg-white rounded-md border-[0.60px] border-black/20 focus:outline-none focus:border-color2 resize-none text-color5 text-base font-normal font-['Poppins'] leading-relaxed w-full"
                      />
                      {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-center gap-20">
                  <button
                    type="submit"
                    className="self-stretch h-14 px-7 py-4 bg-color2 rounded-[10px] inline-flex justify-center items-center gap-4 hover:bg-color1 transition-colors duration-300"
                  >
                    <span className="justify-center text-white text-xl font-medium font-['Poppins'] leading-7">Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
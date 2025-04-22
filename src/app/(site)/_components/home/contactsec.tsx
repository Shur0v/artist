"use client"
import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contactsec() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="main py-20 mx-4 lg:mx-0">
      <div className="container">
        <div className="content grid grid-cols-1 gap-8">
          {/* Contact Title */}
          <div className="grid gap-2">
            <div className="max-w-[135px] flex flex-col justify-start items-start gap-2">
              <div className="inline-flex justify-start items-center gap-2">
                <div className="justify-start text-[#4a4c56] text-base font-normal leading-tight">Contact</div>
                <div className="w-[63px] h-0 outline-[1.50px] outline-offset-[-0.75px] outline-[#ff6b00]"></div>
              </div>
            </div>
            <h2 className="text-[#1d1f2c] text-[28px] md:text-[40px] font-bold leading-tight">Contact Us</h2>
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left Side - Contact Info */}
            <div className="lg:col-span-4 grid gap-8">
              {/* Address */}
              <div className="grid grid-cols-[auto_1fr] gap-4">
                <div className="w-10 h-10 p-[5px] bg-[#ff6b00]/20 rounded-[20px] flex justify-center items-center">
                  <Image 
                    src="/icon/location.svg" 
                    alt="location" 
                    width={24} 
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div className="grid gap-1">
                  <h4 className="text-[#1d1f2c] text-lg font-medium leading-[28.80px]">Address</h4>
                  <p className="text-[#4a4c56] text-base">2518 Adams Street, New York, NY 53022</p>
                </div>
              </div>

              {/* Call Us */}
              <div className="grid grid-cols-[auto_1fr] gap-4">
                <div className="w-10 h-10 p-[5px] bg-[#ff6b00]/20 rounded-[20px] flex justify-center items-center">
                  <Image 
                    src="/icon/call.svg" 
                    alt="phone" 
                    width={24} 
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div className="grid gap-1">
                  <h4 className="text-[#1d1f2c] text-lg font-medium leading-[28.80px]">Call Us</h4>
                  <p className="text-[#4a4c56] text-base">+1 5589 55488 55</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="grid grid-cols-[auto_1fr] gap-4">
                <div className="w-10 h-10 p-[5px] bg-[#ff6b00]/20 rounded-[20px] flex justify-center items-center">
                  <Image 
                    src="/icon/mail.svg" 
                    alt="email" 
                    width={24} 
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div className="grid gap-1">
                  <h4 className="text-[#1d1f2c] text-lg font-medium leading-[28.80px]">Email Us</h4>
                  <p className="text-[#4a4c56] text-base">demo@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      {...register("name", { required: true })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[#ff6b00] bg-[#fff9eb]"
                    />
                    {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                  </div>
                  <div className="grid gap-2">
                    <input
                      type="email"
                      placeholder="Your Email"
                      {...register("email", { 
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[#ff6b00] bg-[#fff9eb]"
                    />
                    {errors.email && <span className="text-red-500 text-sm">Please enter a valid email</span>}
                  </div>
                </div>

                <div className="grid gap-2">
                  <input
                    type="text"
                    placeholder="Subject"
                    {...register("subject", { required: true })}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[#ff6b00] bg-[#fff9eb]"
                  />
                  {errors.subject && <span className="text-red-500 text-sm">This field is required</span>}
                </div>

                <div className="grid gap-2">
                  <textarea
                    placeholder="Share your thoughts..."
                    {...register("message", { required: true })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[#ff6b00] bg-[#fff9eb] resize-none"
                  />
                  {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
                </div>

                <button
                  type="submit"
                  className="w-full h-11 px-8 py-4 bg-[#ff6b00] rounded-[22px] inline-flex justify-center items-center gap-3 cursor-pointer hover:bg-[#e65600] transition-colors duration-300"
                >
                  <span className="text-[#fff9eb] text-base font-medium leading-none">Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
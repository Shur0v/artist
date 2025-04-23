import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn  } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socialLinks = [
  {
    id: 1,
    icon: FaFacebookF,
    link: "https://facebook.com",
    ariaLabel: "Visit Facebook profile"
  },
  {
    id: 2,
    icon: FaTwitter,
    link: "https://twitter.com",
    ariaLabel: "Visit Twitter profile"
  },
  {
    id: 3,
    icon: FaLinkedinIn,
    link: "https://linkedin.com",
    ariaLabel: "Visit LinkedIn profile"
  },
  {
    id: 4,
    icon: RiInstagramFill ,
    link: "https://instagram.com",
    ariaLabel: "Visit Instagram profile"
  }
];

export default function Footer() {
  return (
    <div className="footer bg-color3">
      <div className="container h-[412px]">
        <div className="content py-[60px]">

          
          <div className="top max-w-[996px] mx-auto flex justify-center flex-col items-center border-b border-white mb-10">

          <div className="justify-start text-white text-[28px] font-normal font-playwrite leading-9 mb-5">
            Rajaa
            <br />
            Gharbi
          </div>
          <div className="text-center text-white text-lg font-normal leading-[27px] mx-5 md:mx-0 mb-8">
            It is a long established fact that a reader will be distracted by
            the.
          </div>
          <div className="inline-flex justify-start items-center gap-4 mb-10">
            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                className="w-10 h-10 bg-[#ff6b00] rounded-full flex items-center justify-center hover:bg-[#e66000] transition-colors"
              >
                <item.icon className="text-white text-xl" />
              </a>
            ))}
          </div>

          </div>

          <div className="text-center text-white text-base font-normal leading-tight">Copyright Rajaa Gharbi All Rights Reserved</div>

        </div>
      </div>
    </div>
  );
}

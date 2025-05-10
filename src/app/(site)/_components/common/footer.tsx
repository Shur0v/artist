import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Image from "next/image";

const socialLinks = [
  {
    id: 1,
    icon: FaFacebookF,
    link: "https://www.facebook.com/RajaaGharbiStudio",
    ariaLabel: "Visit Facebook profile",
  },
  {
    id: 2,
    icon: FaTwitter,
    link: "https://twitter.com",
    ariaLabel: "Visit Twitter profile",
  },
  {
    id: 3,
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/rajaa-gharbi-0b07861b?trk=people-guest_people_search-card",
    ariaLabel: "Visit LinkedIn profile",
  },
  {
    id: 4,
    icon: RiInstagramFill,
    link: "https://www.instagram.com/rajaagharbistudio/",
    ariaLabel: "Visit Instagram profile",
  },
];

export default function Footer() {
  return (
    <div className="footer bg-color3">
      <div className="container h-auto">
        <div className="content py-[60px]">
          <div className="top max-w-[996px] mx-auto flex justify-center flex-col items-center border-b border-white mb-10">
            <div className="justify-start text-white text-[38px] font-normal font-garamond leading-9 mb-5">
              Rajaa Gharbi
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
                  className="w-10 h-10 bg-color2 rounded-full flex items-center justify-center hover:bg-color1 transition-colors"
                >
                  <item.icon className="text-white text-xl" />
                </a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-6 mb-10">
              <Image
                src="/images/PayPal.svg"
                alt="PayPal"
                width={250}
                height={120}
                className="h-[80px] w-auto bg-white p-2 rounded"
              />
              <Image
                src="/images/Zelle.svg"
                alt="Zelle"
                width={250}
                height={120}
                className="h-[80px] w-auto bg-white p-2 rounded"
              />
            </div>
          </div>

          <div className="text-center text-white text-base font-normal leading-tight">
            {" "}
            © 2025 Rajaa Gharbi All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

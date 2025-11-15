import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[#f0f0f3] py-8 px-6 [font-family:'Montserrat',Helvetica] shadow-footer"
      style={{
        boxShadow: "0px -7px 7.3px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main content */}
        <div className="flex items-center justify-between mb-8">
          {/* Logo */}
          <div className="mt-[5.2px] w-[211px] h-[41.56px] bg-[url(/upwealth-text-logo-1.svg)] bg-[100%_100%]" />

          {/* Navigation */}
          <nav className="flex gap-12">
            <a
              href="#"
              className="text-black hover:text-[#8B3A9C] transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black hover:text-[#8B3A9C] transition-colors"
            >
              Kaltech
            </a>
            <a
              href="#"
              className="text-black hover:text-[#8B3A9C] transition-colors"
            >
              Insurance Life
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-neomorphic">
              <Facebook className="w-5 h-5 text-black" />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-neomorphic">
              <Instagram className="w-5 h-5 text-black" />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-neomorphic">
              <Linkedin className="w-5 h-5 text-black" />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-neomorphic">              
              <img src="../../../pajamas_twitter.svg" alt="" className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <p className=" w-[247px] h-2 rounded-sm shadow-neomorphic-hover bg-[#F0F0F3] my-10 mx-auto"></p>

        {/* Copyright */}
        <div className="text-center text-black text-lg font-semibold">
          © 2022 - 2024 | All rights reserved by Kaltech Designs
        </div>
      </div>
    </footer>
  );
}

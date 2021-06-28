import Image from "next/image";
import React from "react";
import cloud from "../public/cloud.png";
import message from "../public/icons/message.png";
import profile from "../public/icons/profile.png";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="flex justify-between items-center py-8">
      <Image src={cloud} alt="Cloud Icon" width={64} height={64} />
      <div className="flex items-center space-x-2">
        <a
          href="https://github.com/coderinblack08"
          target="_blank"
          className="flex items-center bg-white border border-gray-200 py-1.5 px-5 rounded-lg text-orange-400"
          rel="noreferrer"
        >
          <Image src={profile} alt="Profile Icon" width={16} height={16} />
          <span className="ml-2 font-medium">GitHub</span>
        </a>
        <a
          href="mailto:kevin@affordance.app"
          className="flex items-center bg-white border border-gray-200 py-1.5 px-5 rounded-lg text-orange-400"
        >
          <Image src={message} alt="Message Icon" width={16} height={16} />
          <span className="ml-2 font-medium">Contact</span>
        </a>
      </div>
    </nav>
  );
};
